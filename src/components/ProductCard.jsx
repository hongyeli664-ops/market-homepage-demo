import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { formatPrice } from "../utils/format";
import { StarIcon } from "./Icons";

function ProductVisual({ product }) {
  const [primary, secondary] = product.colors;
  return (
    <div
      className="relative h-52 overflow-hidden rounded-[24px] p-5 text-white"
      style={{
        background: `linear-gradient(135deg, ${primary}, ${secondary})`
      }}
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
      <div className="absolute bottom-0 right-0 h-20 w-20 rounded-full bg-black/10 blur-2xl" />
      <div className="relative flex h-full flex-col justify-between">
        <span className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
          {product.badge}
        </span>
        <div>
          <div className="text-xl font-black tracking-wide">{product.brand}</div>
          <div className="mt-2 text-sm text-white/85">{product.coverLabel}</div>
        </div>
      </div>
    </div>
  );
}

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useShop();

  return (
    <article
      onClick={() => navigate(`/product/${product.id}`)}
      className="group cursor-pointer rounded-[28px] border border-white/80 bg-white p-4 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <ProductVisual product={product} />
      <div className="mt-5">
        <div className="min-h-[56px] overflow-hidden text-lg font-semibold leading-7 text-ink-900">
          {product.name}
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
          <StarIcon className="h-4 w-4 text-amber-400" />
          <span>{product.rating}</span>
          <span>已售 {product.sales}</span>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="text-2xl font-black text-brand-600">{formatPrice(product.price)}</div>
            <div className="mt-1 text-sm text-slate-400 line-through">
              {formatPrice(product.originalPrice)}
            </div>
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              addToCart(product, 1);
            }}
            className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-brand-600"
          >
            加入购物车
          </button>
        </div>
      </div>
    </article>
  );
}
