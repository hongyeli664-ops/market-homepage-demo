import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/mockData";
import { useShop } from "../context/ShopContext";
import { formatPrice } from "../utils/format";
import { StarIcon } from "../components/Icons";

function ProductVisual({ product }) {
  const [primary, secondary] = product.colors;
  return (
    <div
      className="relative h-[480px] overflow-hidden rounded-[36px] p-10 text-white shadow-soft"
      style={{ background: `linear-gradient(135deg, ${primary}, ${secondary})` }}
    >
      <div className="absolute -right-20 top-8 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-black/10 blur-3xl" />
      <div className="relative flex h-full flex-col justify-between">
        <span className="inline-flex w-fit rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
          {product.badge}
        </span>
        <div>
          <div className="text-5xl font-black tracking-[0.08em]">{product.brand}</div>
          <div className="mt-4 text-xl text-white/85">{product.coverLabel}</div>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useShop();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="container-wide pt-12">
        <div className="rounded-[32px] bg-white px-8 py-16 text-center shadow-card">
          <div className="text-2xl font-bold text-ink-900">商品不存在</div>
          <Link to="/" className="mt-6 inline-flex rounded-full bg-ink-900 px-6 py-3 text-white">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container-wide pt-8">
      <div className="mb-6 text-sm text-slate-500">
        <Link to="/">首页</Link>
        <span className="mx-2">/</span>
        <Link to={`/category/${product.category}`}>分类频道</Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </div>

      <section className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_520px]">
        <ProductVisual product={product} />
        <div className="glass-panel p-8">
          <div className="inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
            {product.badge}
          </div>
          <h1 className="mt-5 text-4xl font-black leading-tight text-ink-900">{product.name}</h1>
          <p className="mt-4 text-base leading-8 text-slate-600">{product.description}</p>

          <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
            <div className="flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-amber-600">
              <StarIcon className="h-4 w-4" />
              {product.rating}
            </div>
            <div>累计销量 {product.sales}</div>
            <div>库存 {product.stock} 件</div>
          </div>

          <div className="mt-8 rounded-[28px] bg-[#fff7ef] p-6">
            <div className="text-sm text-slate-500">到手价</div>
            <div className="mt-2 flex items-end gap-4">
              <div className="text-5xl font-black text-brand-600">{formatPrice(product.price)}</div>
              <div className="pb-2 text-lg text-slate-400 line-through">
                {formatPrice(product.originalPrice)}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-lg font-semibold text-ink-900">商品亮点</div>
            <div className="mt-4 flex flex-wrap gap-3">
              {product.highlights.map((item) => (
                <div key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-ink-800">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="text-lg font-semibold text-ink-900">服务保障</div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {product.services.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <button
              type="button"
              onClick={() => addToCart(product, 1)}
              className="rounded-full bg-gradient-to-r from-brand-600 to-orange-400 px-8 py-4 text-base font-semibold text-white shadow-glow"
            >
              加入购物车
            </button>
            <Link
              to={`/category/${product.category}`}
              className="rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-ink-900 shadow-card"
            >
              查看同类商品
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="text-3xl font-black text-ink-900">你可能还会喜欢</div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
