import { Link, useParams } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import ProductGrid from "../components/ProductGrid";
import { getProductById, getProductsByCategory } from "../data/mockData";
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

export default function ProductDetailPage() {
  var params = useParams();
  var shop = useShop();
  var product = getProductById(params.id);

  if (!product) {
    return (
      <div className="page-shell py-6">
        <EmptyState
          title="商品不存在"
          description="这个商品可能已经下架，或者链接地址有误。"
          action={
            <Link to="/" className="inline-flex min-h-11 items-center rounded-xl bg-orange-500 px-4 text-sm font-semibold text-white">
              返回首页
            </Link>
          }
        />
      </div>
    );
  }

  var toneClass = toneMap[product.imageTone] || toneMap.orange;
  var relatedProducts = getProductsByCategory(product.category)
    .filter(function (item) {
      return item && item.id !== product.id;
    })
    .slice(0, 4);

  return (
    <div className="page-shell py-4 sm:py-6">
      <div className="text-xs text-slate-500">
        <Link to="/">首页</Link>
        <span className="px-2">/</span>
        <Link to={"/category/" + product.category}>分类</Link>
        <span className="px-2">/</span>
        <span>{product.name}</span>
      </div>

      <section className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className={"surface-card flex min-h-[260px] items-center justify-center p-6 " + toneClass}>
          <div className="text-center">
            <div className="text-lg font-bold">{product.brand || "品牌馆"}</div>
            <div className="mt-2 text-sm">{product.coverLabel || "精选好物"}</div>
          </div>
        </div>

        <div className="surface-card p-5">
          <div className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
            {product.badge || "精选"}
          </div>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900">{product.name}</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">{product.summary || "精选商品详情介绍。"}</p>

          <div className="mt-5 rounded-2xl bg-orange-50 p-4">
            <div className="text-xs text-slate-500">到手价</div>
            <div className="mt-2 text-3xl font-bold text-orange-500">{formatPrice(product.price)}</div>
            <div className="mt-1 text-sm text-slate-400 line-through">{formatPrice(product.originalPrice)}</div>
          </div>

          <div className="mt-5">
            <div className="text-sm font-semibold text-slate-900">商品亮点</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {Array.isArray(product.highlights)
                ? product.highlights.map(function (item) {
                    return (
                      <span key={item} className="rounded-full bg-slate-100 px-3 py-2 text-xs text-slate-700">
                        {item}
                      </span>
                    );
                  })
                : null}
            </div>
          </div>

          <div className="mt-5">
            <div className="text-sm font-semibold text-slate-900">服务保障</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {Array.isArray(product.services)
                ? product.services.map(function (item) {
                    return (
                      <span key={item} className="rounded-full border border-slate-200 px-3 py-2 text-xs text-slate-600">
                        {item}
                      </span>
                    );
                  })
                : null}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={function () {
                shop.addToCart(product, 1);
              }}
              className="min-h-12 rounded-xl bg-slate-900 text-sm font-semibold text-white"
            >
              加入购物车
            </button>
            <Link
              to={"/category/" + product.category}
              className="flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-900"
            >
              查看同类
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="section-title">猜你喜欢</h2>
          <Link to={"/category/" + product.category} className="text-sm font-semibold text-orange-500">
            更多同类
          </Link>
        </div>
        <ProductGrid products={relatedProducts} />
      </section>
    </div>
  );
}
