import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { formatPrice } from "../utils/format";

var toneMap = {
  orange: "bg-orange-100 text-orange-700",
  amber: "bg-amber-100 text-amber-700",
  slate: "bg-slate-200 text-slate-700",
  gray: "bg-gray-200 text-gray-700",
  blue: "bg-blue-100 text-blue-700",
  indigo: "bg-indigo-100 text-indigo-700",
  rose: "bg-rose-100 text-rose-700",
  green: "bg-green-100 text-green-700",
  stone: "bg-stone-200 text-stone-700",
  brown: "bg-yellow-100 text-yellow-800",
  red: "bg-red-100 text-red-700",
  yellow: "bg-yellow-100 text-yellow-700",
  purple: "bg-purple-100 text-purple-700",
  teal: "bg-teal-100 text-teal-700"
};

function ProductCover(props) {
  var product = props.product || {};
  var toneClass = toneMap[product.imageTone] || toneMap.orange;

  return (
    <div className={"flex h-32 items-center justify-center rounded-2xl " + toneClass}>
      <div className="px-3 text-center">
        <div className="text-sm font-bold">{product.brand || "品牌馆"}</div>
        <div className="mt-1 text-xs">{product.coverLabel || "精选好物"}</div>
      </div>
    </div>
  );
}

export default function ProductCard(props) {
  var product = props.product || null;
  var shop = useShop();

  if (!product) {
    return null;
  }

  return (
    <article className="surface-card overflow-hidden p-3">
      <Link to={"/product/" + product.id}>
        <ProductCover product={product} />
        <div className="mt-3">
          <div className="min-h-[44px] text-sm font-semibold leading-6 text-slate-900">
            {product.name || "未命名商品"}
          </div>
          <div className="mt-1 text-xs text-slate-500">{product.summary || "精选商品"}</div>
          <div className="mt-3 flex items-end justify-between gap-3">
            <div>
              <div className="text-lg font-bold text-orange-500">{formatPrice(product.price)}</div>
              <div className="text-xs text-slate-400 line-through">
                {formatPrice(product.originalPrice)}
              </div>
            </div>
            <div className="text-right text-xs text-slate-500">{product.salesText || "热卖中"}</div>
          </div>
        </div>
      </Link>

      <button
        type="button"
        onClick={function () {
          shop.addToCart(product, 1);
        }}
        className="mt-3 min-h-11 w-full rounded-xl bg-slate-900 text-sm font-semibold text-white"
      >
        加入购物车
      </button>
    </article>
  );
}
