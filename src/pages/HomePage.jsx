import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel";
import CategoryMenu from "../components/CategoryMenu";
import InfoPanel from "../components/InfoPanel";
import ProductCard from "../components/ProductCard";
import SectionHeader from "../components/SectionHeader";
import {
  banners,
  categories,
  getProductsByCategory,
  getSectionMeta,
  products,
  sectionOrder
} from "../data/mockData";
import { useShop } from "../context/ShopContext";

function matchesSearch(product, searchQuery) {
  const keyword = searchQuery.trim().toLowerCase();
  if (!keyword) return true;
  return [product.name, product.brand, ...(product.tags || [])]
    .join(" ")
    .toLowerCase()
    .includes(keyword);
}

export default function HomePage() {
  const { searchQuery } = useShop();
  const searchResults = products.filter((product) => matchesSearch(product, searchQuery));

  return (
    <div className="container-wide pt-8">
      <section className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)_320px]">
        <CategoryMenu categories={categories} />
        <BannerCarousel banners={banners} />
        <InfoPanel />
      </section>

      <section className="mt-8 rounded-[32px] border border-white/70 bg-white/85 p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-black text-ink-900">热门频道</div>
            <div className="mt-2 text-sm text-slate-500">用接近真实商城首页的频道化方式快速逛全站</div>
          </div>
          <Link to="/category/today-picks" className="rounded-full bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-700">
            今日精选会场
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-7">
          {categories.map((item, index) => (
            <Link
              key={item.slug}
              to={`/category/${item.slug}`}
              className="rounded-[24px] border border-slate-100 bg-gradient-to-br from-white to-slate-50 px-4 py-5 text-center shadow-card transition hover:-translate-y-1"
            >
              <div className="text-sm text-brand-500">0{index + 1}</div>
              <div className="mt-2 text-base font-semibold text-ink-900">{item.title}</div>
            </Link>
          ))}
        </div>
      </section>

      {searchQuery ? (
        <section className="mt-10">
          <SectionHeader
            title={`搜索结果：${searchQuery}`}
            subtitle={`共找到 ${searchResults.length} 件相关商品`}
            to="/category/today-picks"
            accent="from-brand-500 via-orange-400 to-amber-300"
          />
          {searchResults.length ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {searchResults.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
              <div className="mt-6 rounded-[28px] bg-white px-8 py-16 text-center shadow-card">
                <div className="text-2xl font-bold text-ink-900">暂未找到相关商品</div>
                <div className="mt-3 text-slate-500">可以尝试更换关键词，或从下方频道继续浏览。</div>
              </div>
          )}
        </section>
      ) : null}

      <div className="mt-10 space-y-10">
        {sectionOrder.map((slug) => {
          const meta = getSectionMeta(slug);
          const list = getProductsByCategory(slug).filter((product) =>
            matchesSearch(product, searchQuery)
          );

          if (!list.length && searchQuery) {
            return null;
          }

          return (
            <section key={slug}>
              <SectionHeader
                title={meta.title}
                subtitle={meta.subtitle}
                to={`/category/${slug}`}
                accent={meta.accent}
              />
              <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {list.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
