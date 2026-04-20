import { Link, NavLink, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { CartIcon, OrderIcon, SearchIcon, UserIcon } from "./Icons";

const quickLinks = [
  { label: "购物车", to: "/cart", icon: CartIcon },
  { label: "个人中心", to: "/profile", icon: UserIcon },
  { label: "我的订单", to: "/orders", icon: OrderIcon }
];

export default function Header() {
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery, cartCount } = useShop();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <header className="relative overflow-hidden border-b border-white/60 bg-gradient-to-r from-[#fff5ef] via-[#fffaf4] to-[#fffdf8]">
      <div className="absolute inset-0 bg-hero-grid bg-[size:42px_42px] opacity-30" />
      <div className="container-wide relative">
        <div className="flex flex-col gap-3 py-3 text-sm text-ink-700 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            <span>欢迎来到星购商城</span>
            <span>每日爆款 10:00 / 20:00 准时开抢</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:gap-5">
            <a href="#help">帮助中心</a>
            <a href="#contact">联系客服</a>
            <a href="#copyright">网站信息</a>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-7 xl:flex-row xl:items-center xl:justify-between xl:gap-8">
          <Link to="/" className="flex min-w-[220px] items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-brand-500 to-orange-300 text-2xl font-bold text-white shadow-glow">
              SG
            </div>
            <div>
              <div className="text-3xl font-black tracking-[0.12em] text-ink-900">星购商城</div>
              <div className="mt-1 text-sm text-ink-700">大牌精选 好价更快到手</div>
            </div>
          </Link>

          <div className="w-full flex-1">
            <form onSubmit={handleSubmit} className="mx-auto max-w-[760px] xl:max-w-[820px]">
              <div className="rounded-[34px] border-2 border-brand-500 bg-white p-2 shadow-glow">
                <div className="flex flex-col gap-3 rounded-[28px] bg-[#fff9f5] px-4 py-4 sm:flex-row sm:items-center sm:px-5">
                  <SearchIcon className="h-6 w-6 text-brand-500" />
                  <input
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    className="h-10 flex-1 border-none bg-transparent text-lg outline-none placeholder:text-slate-400"
                    placeholder="搜索商品名称，例如：耳机、笔记本、牛排、风衣"
                  />
                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="rounded-full bg-white px-4 py-2 text-sm text-slate-500"
                    >
                      清空
                    </button>
                  ) : null}
                  <button
                    type="submit"
                    className="rounded-full bg-gradient-to-r from-brand-600 to-orange-400 px-8 py-3 text-base font-semibold text-white sm:min-w-[120px]"
                  >
                    搜索
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-ink-700">
              <span>热搜：</span>
              {["手机", "笔记本", "空气炸锅", "风衣", "蓝莓"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setSearchQuery(item);
                    navigate("/");
                  }}
                  className="rounded-full bg-white/90 px-4 py-2 shadow-card transition hover:-translate-y-0.5 hover:text-brand-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 xl:w-auto">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative flex min-w-[104px] flex-col items-center gap-2 rounded-[24px] border px-4 py-4 text-sm transition ${
                      isActive
                        ? "border-brand-500 bg-brand-50 text-brand-700 shadow-card"
                        : "border-white/80 bg-white/85 text-ink-800 shadow-card hover:-translate-y-0.5"
                    }`
                  }
                >
                  <Icon className="h-6 w-6" />
                  <span>{item.label}</span>
                  {item.to === "/cart" && cartCount > 0 ? (
                    <span className="absolute right-4 top-3 rounded-full bg-brand-600 px-2 py-0.5 text-xs text-white">
                      {cartCount}
                    </span>
                  ) : null}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
