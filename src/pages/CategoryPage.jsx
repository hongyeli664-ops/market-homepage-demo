import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import {
  categories,
  getCategoryMeta,
  getProductsByCategory
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

export default function CategoryPage() {
  const { slug } = useParams();
  const { searchQuery } = useShop();
  const currentCategory = getCategoryMeta(slug);
  const products = getProductsByCategory(slug).filter((product) =>
    matchesSearch(product, searchQuery)
  );

  return (
    <div className="container-wide pt-8">
      <section className="glass-panel overflow-hidden">
        <div className="bg-gradient-to-r from-ink-900 via-slate-800 to-slate-700 px-10 py-10 text-white">
          <div className="text-sm text-white/70">分类频道</div>
          <h1 className="mt-3 text-4xl font-black">{currentCategory.title}</h1>
          <p className="mt-3 max-w-3xl text-base text-white/80">{currentCategory.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((item) => (
              <Link
                key={item.slug}
                to={`/category/${item.slug}`}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  item.slug === slug
                    ? "bg-white text-ink-900"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-black text-ink-900">{currentCategory.title}商品</div>
            <div className="mt-2 text-sm text-slate-500">
              {searchQuery
                ? `当前关键词“${searchQuery}”下共 ${products.length} 件商品`
                : `共为你精选 ${products.length} 件高热度商品`}
            </div>
          </div>
          <Link
            to="/"
            className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-ink-900 shadow-card"
          >
            返回首页
          </Link>
        </div>

        {products.length ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-[28px] bg-white px-8 py-16 text-center shadow-card">
            <div className="text-2xl font-bold text-ink-900">这个分类下没有匹配结果</div>
            <div className="mt-3 text-slate-500">可以清空搜索词，或者切换到其他分类继续浏览。</div>
          </div>
        )}
      </section>
    </div>
  );
}
