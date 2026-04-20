import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { categories } from "../data/mockData";
import { useShop } from "../context/ShopContext";
import { CartIcon, MenuIcon, OrderIcon, SearchIcon, UserIcon } from "./Icons";

var quickLinks = [
  { label: "购物车", to: "/cart", icon: CartIcon },
  { label: "订单", to: "/orders", icon: OrderIcon },
  { label: "我的", to: "/profile", icon: UserIcon }
];

export default function Header() {
  var navigate = useNavigate();
  var shop = useShop();
  var [menuOpen, setMenuOpen] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/");
  }

  function handleKeywordClick(keyword) {
    shop.setSearchQuery(keyword);
    navigate("/");
  }

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95">
      <div className="page-shell">
        <div className="flex items-center justify-between gap-3 py-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-sm font-bold text-white">
              SG
            </div>
            <div>
              <div className="text-base font-bold text-slate-900">星购商城</div>
              <div className="text-xs text-slate-500">移动端稳定版</div>
            </div>
          </Link>

          <button
            type="button"
            onClick={function () {
              setMenuOpen(function (current) {
                return !current;
              });
            }}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 sm:hidden"
            aria-label="打开分类菜单"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="pb-3">
          <div className="flex items-center gap-3 rounded-2xl border border-orange-200 bg-orange-50 px-3 py-3">
            <SearchIcon className="h-5 w-5 text-orange-500" />
            <input
              value={shop.searchQuery}
              onChange={function (event) {
                shop.setSearchQuery(event.target.value || "");
              }}
              className="h-6 flex-1 border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              placeholder="搜索商品，如耳机、笔记本、风衣、牛排"
            />
            <button
              type="submit"
              className="min-h-10 rounded-xl bg-orange-500 px-4 text-sm font-semibold text-white"
            >
              搜索
            </button>
          </div>
        </form>

        <div className="hidden gap-2 pb-3 sm:flex sm:flex-wrap">
          {["手机", "耳机", "笔记本", "风衣", "牛排"].map(function (item) {
            return (
              <button
                key={item}
                type="button"
                onClick={function () {
                  handleKeywordClick(item);
                }}
                className="min-h-9 rounded-full border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700"
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 border-t border-slate-100 py-3 sm:flex">
          {Array.isArray(categories)
            ? categories.map(function (item) {
                return (
                  <Link
                    key={item.slug}
                    to={"/category/" + item.slug}
                    className="rounded-full bg-slate-100 px-3 py-2 text-xs text-slate-700"
                  >
                    {item.shortTitle || item.title}
                  </Link>
                );
              })
            : null}
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-100 py-3 sm:hidden">
            <div className="grid grid-cols-2 gap-2">
              {Array.isArray(categories)
                ? categories.map(function (item) {
                    return (
                      <Link
                        key={item.slug}
                        to={"/category/" + item.slug}
                        onClick={function () {
                          setMenuOpen(false);
                        }}
                        className="rounded-xl bg-slate-100 px-3 py-3 text-sm text-slate-700"
                      >
                        {item.title}
                      </Link>
                    );
                  })
                : null}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {quickLinks.map(function (item) {
                var Icon = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={function () {
                      setMenuOpen(false);
                    }}
                    className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-sm text-slate-700"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
