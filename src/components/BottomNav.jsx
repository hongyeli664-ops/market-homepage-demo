import { NavLink } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { CartIcon, HomeIcon, OrderIcon, UserIcon } from "./Icons";

var tabs = [
  { label: "首页", to: "/", icon: HomeIcon },
  { label: "订单", to: "/orders", icon: OrderIcon },
  { label: "购物车", to: "/cart", icon: CartIcon },
  { label: "我的", to: "/profile", icon: UserIcon }
];

export default function BottomNav() {
  var shop = useShop();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-200 bg-white sm:hidden">
      <div className="grid grid-cols-4 pb-[max(env(safe-area-inset-bottom),8px)] pt-2">
        {tabs.map(function (tab) {
          var Icon = tab.icon;
          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={function (options) {
                return "relative flex min-h-14 flex-col items-center justify-center gap-1 text-xs " +
                  (options.isActive ? "text-orange-500" : "text-slate-500");
              }}
            >
              <Icon className="h-5 w-5" />
              <span>{tab.label}</span>
              {tab.to === "/cart" && shop.cartCount > 0 ? (
                <span className="absolute right-[28%] top-1 rounded-full bg-orange-500 px-1.5 py-0.5 text-[10px] text-white">
                  {shop.cartCount}
                </span>
              ) : null}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
