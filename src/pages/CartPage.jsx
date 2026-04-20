import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import { useShop } from "../context/ShopContext";
import { formatPrice } from "../utils/format";

var toneMap = {
  orange: "bg-orange-100",
  amber: "bg-amber-100",
  slate: "bg-slate-200",
  gray: "bg-gray-200",
  blue: "bg-blue-100",
  indigo: "bg-indigo-100",
  rose: "bg-rose-100",
  green: "bg-green-100",
  stone: "bg-stone-200",
  brown: "bg-yellow-100",
  red: "bg-red-100",
  yellow: "bg-yellow-100",
  purple: "bg-purple-100",
  teal: "bg-teal-100"
};

export default function CartPage() {
  var shop = useShop();
  var discount = shop.cartTotal > 0 ? 30 : 0;
  var payable = shop.cartTotal - discount > 0 ? shop.cartTotal - discount : 0;

  return (
    <div className="page-shell py-4 sm:py-6">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <section className="surface-card p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">购物车</h1>
              <p className="mt-1 text-sm text-slate-500">已选 {shop.cartItems.length} 款商品</p>
            </div>
            {shop.cartItems.length > 0 ? (
              <button
                type="button"
                onClick={shop.clearCart}
                className="min-h-10 rounded-xl border border-slate-200 px-3 text-sm text-slate-600"
              >
                清空
              </button>
            ) : null}
          </div>

          {shop.cartItems.length > 0 ? (
            <div className="mt-4 space-y-3">
              {shop.cartItems.map(function (item) {
                var toneClass = toneMap[item.imageTone] || toneMap.orange;
                return (
                  <article key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <div className="flex gap-3">
                      <div className={"h-20 w-20 rounded-2xl " + toneClass} />
                      <div className="min-w-0 flex-1">
                        <Link to={"/product/" + item.id} className="text-sm font-semibold leading-6 text-slate-900">
                          {item.name}
                        </Link>
                        <div className="mt-1 text-xs text-slate-500">{item.coverLabel}</div>
                        <div className="mt-2 text-sm font-bold text-orange-500">{formatPrice(item.price)}</div>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={function () {
                            shop.updateQuantity(item.id, (item.quantity || 1) - 1);
                          }}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700"
                        >
                          -
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold text-slate-900">
                          {item.quantity || 1}
                        </span>
                        <button
                          type="button"
                          onClick={function () {
                            shop.updateQuantity(item.id, (item.quantity || 1) + 1);
                          }}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={function () {
                          shop.removeFromCart(item.id);
                        }}
                        className="min-h-10 rounded-xl px-3 text-sm text-orange-500"
                      >
                        删除
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mt-4">
              <EmptyState
                title="购物车还是空的"
                description="先去首页看看推荐商品吧。"
                action={
                  <Link to="/" className="inline-flex min-h-11 items-center rounded-xl bg-orange-500 px-4 text-sm font-semibold text-white">
                    去首页
                  </Link>
                }
              />
            </div>
          )}
        </section>

        <aside className="surface-card h-fit p-4 sm:p-5">
          <h2 className="text-lg font-bold text-slate-900">结算清单</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>商品金额</span>
              <span>{formatPrice(shop.cartTotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>平台优惠</span>
              <span>- {formatPrice(discount)}</span>
            </div>
            <div className="flex justify-between">
              <span>运费</span>
              <span>{shop.cartItems.length > 0 ? "包邮" : formatPrice(0)}</span>
            </div>
          </div>
          <div className="mt-5 border-t border-slate-200 pt-4">
            <div className="flex items-end justify-between">
              <span className="text-sm text-slate-500">应付总额</span>
              <span className="text-2xl font-bold text-orange-500">{formatPrice(payable)}</span>
            </div>
          </div>
          <button type="button" className="mt-5 min-h-12 w-full rounded-xl bg-orange-500 text-sm font-semibold text-white">
            去结算
          </button>
        </aside>
      </div>
    </div>
  );
}
