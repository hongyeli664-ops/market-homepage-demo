import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { formatPrice } from "../utils/format";

export default function CartPage() {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart } = useShop();

  return (
    <div className="container-wide pt-8">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
        <section className="glass-panel p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black text-ink-900">购物车</h1>
              <div className="mt-2 text-sm text-slate-500">已选 {cartItems.length} 款商品</div>
            </div>
            {cartItems.length ? (
              <button
                type="button"
                onClick={clearCart}
                className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-500"
              >
                清空购物车
              </button>
            ) : null}
          </div>

          {cartItems.length ? (
            <div className="mt-8 space-y-4">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="grid gap-5 rounded-[28px] border border-slate-100 bg-slate-50 p-5 md:grid-cols-[160px_minmax(0,1fr)] xl:grid-cols-[160px_minmax(0,1fr)_120px_160px] xl:items-center"
                >
                  <div
                    className="h-32 rounded-[24px]"
                    style={{
                      background: `linear-gradient(135deg, ${item.colors[0]}, ${item.colors[1]})`
                    }}
                  />
                  <div>
                    <div className="text-xl font-semibold text-ink-900">{item.name}</div>
                    <div className="mt-2 text-sm text-slate-500">{item.coverLabel}</div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="mt-4 text-sm font-semibold text-brand-600"
                    >
                      删除
                    </button>
                  </div>
                  <div className="flex items-center justify-start gap-3 xl:justify-center">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-base font-semibold">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-left xl:text-right">
                    <div className="text-2xl font-black text-brand-600">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">{formatPrice(item.price)} / 件</div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-[28px] bg-slate-50 px-8 py-16 text-center">
              <div className="text-2xl font-bold text-ink-900">购物车还是空的</div>
              <div className="mt-3 text-slate-500">去首页挑几件心仪商品吧。</div>
              <Link to="/" className="mt-6 inline-flex rounded-full bg-ink-900 px-6 py-3 text-white">
                去逛首页
              </Link>
            </div>
          )}
        </section>

        <aside className="glass-panel h-fit p-8">
          <div className="text-2xl font-black text-ink-900">结算清单</div>
          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>商品金额</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>平台补贴</span>
              <span>- {formatPrice(cartTotal > 0 ? 80 : 0)}</span>
            </div>
            <div className="flex justify-between">
              <span>运费</span>
              <span>{cartTotal > 0 ? "包邮" : formatPrice(0)}</span>
            </div>
          </div>
          <div className="mt-6 border-t border-dashed border-slate-200 pt-6">
            <div className="flex items-end justify-between">
              <span className="text-sm text-slate-500">应付总额</span>
              <span className="text-4xl font-black text-brand-600">
                {formatPrice(Math.max(cartTotal - (cartTotal > 0 ? 80 : 0), 0))}
              </span>
            </div>
          </div>
          <button
            type="button"
            className="mt-8 w-full rounded-full bg-gradient-to-r from-brand-600 to-orange-400 px-6 py-4 text-base font-semibold text-white shadow-glow"
          >
            去结算
          </button>
          <Link
            to="/orders"
            className="mt-4 block rounded-full border border-slate-200 px-6 py-4 text-center text-base font-semibold text-ink-900"
          >
            查看订单中心
          </Link>
        </aside>
      </div>
    </div>
  );
}
