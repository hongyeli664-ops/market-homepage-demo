import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { readStorage, writeStorage } from "../utils/storage";

var ShopContext = createContext(null);

function normalizeCartItem(product, quantity) {
  if (!product || !product.id) {
    return null;
  }

  return {
    id: product.id,
    name: product.name || "未命名商品",
    category: product.category || "",
    brand: product.brand || "",
    price: typeof product.price === "number" ? product.price : 0,
    originalPrice:
      typeof product.originalPrice === "number" ? product.originalPrice : product.price || 0,
    summary: product.summary || "",
    imageTone: product.imageTone || "orange",
    coverLabel: product.coverLabel || "",
    quantity: quantity > 0 ? quantity : 1
  };
}

export function ShopProvider(props) {
  var children = props.children;
  var [searchQuery, setSearchQuery] = useState("");
  var [cartItems, setCartItems] = useState([]);
  var [isReady, setIsReady] = useState(false);

  useEffect(function () {
    try {
      var storedItems = readStorage("market-cart", []);
      setCartItems(Array.isArray(storedItems) ? storedItems : []);
    } catch (error) {
      setCartItems([]);
    } finally {
      setIsReady(true);
    }
  }, []);

  useEffect(
    function () {
      if (!isReady) {
        return;
      }

      try {
        writeStorage("market-cart", cartItems);
      } catch (error) {
        return;
      }
    },
    [cartItems, isReady]
  );

  function addToCart(product, quantity) {
    var safeQuantity = typeof quantity === "number" && quantity > 0 ? quantity : 1;
    var safeProduct = normalizeCartItem(product, safeQuantity);

    if (!safeProduct) {
      return;
    }

    setCartItems(function (currentItems) {
      var list = Array.isArray(currentItems) ? currentItems : [];
      var existing = list.find(function (item) {
        return item && item.id === safeProduct.id;
      });

      if (!existing) {
        return list.concat([safeProduct]);
      }

      return list.map(function (item) {
        if (!item || item.id !== safeProduct.id) {
          return item;
        }

        return {
          ...item,
          quantity: (item.quantity || 1) + safeQuantity
        };
      });
    });
  }

  function updateQuantity(productId, nextQuantity) {
    setCartItems(function (currentItems) {
      var list = Array.isArray(currentItems) ? currentItems : [];
      return list.map(function (item) {
        if (!item || item.id !== productId) {
          return item;
        }

        return {
          ...item,
          quantity: nextQuantity > 1 ? nextQuantity : 1
        };
      });
    });
  }

  function removeFromCart(productId) {
    setCartItems(function (currentItems) {
      var list = Array.isArray(currentItems) ? currentItems : [];
      return list.filter(function (item) {
        return item && item.id !== productId;
      });
    });
  }

  function clearCart() {
    setCartItems([]);
  }

  var cartCount = useMemo(function () {
    return cartItems.reduce(function (total, item) {
      return total + (item && item.quantity ? item.quantity : 0);
    }, 0);
  }, [cartItems]);

  var cartTotal = useMemo(function () {
    return cartItems.reduce(function (total, item) {
      var quantity = item && item.quantity ? item.quantity : 0;
      var price = item && typeof item.price === "number" ? item.price : 0;
      return total + quantity * price;
    }, 0);
  }, [cartItems]);

  var contextValue = useMemo(
    function () {
      return {
        searchQuery: searchQuery,
        setSearchQuery: setSearchQuery,
        cartItems: cartItems,
        cartCount: cartCount,
        cartTotal: cartTotal,
        addToCart: addToCart,
        updateQuantity: updateQuantity,
        removeFromCart: removeFromCart,
        clearCart: clearCart
      };
    },
    [searchQuery, cartItems, cartCount, cartTotal]
  );

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
}

export function useShop() {
  var context = useContext(ShopContext);

  if (!context) {
    return {
      searchQuery: "",
      setSearchQuery: function () {},
      cartItems: [],
      cartCount: 0,
      cartTotal: 0,
      addToCart: function () {},
      updateQuantity: function () {},
      removeFromCart: function () {},
      clearCart: function () {}
    };
  }

  return context;
}
