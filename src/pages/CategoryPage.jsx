import { Link, useParams } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import ProductGrid from "../components/ProductGrid";
import SectionBlock from "../components/SectionBlock";
import { categories, getCategoryBySlug, getProductsByCategory } from "../data/mockData";
import { useShop } from "../context/ShopContext";

function matchesSearch(product, searchQuery) {
  if (!product) {
    return false;
  }

  var keyword = (searchQuery || "").trim().toLowerCase();

  if (!keyword) {
    return true;
  }

  var source = [
    product.name || "",
    product.brand || "",
    Array.isArray(product.tags) ? product.tags.join(" ") : ""
  ]
    .join(" ")
    .toLowerCase();

  return source.indexOf(keyword) > -1;
}

export default function CategoryPage() {
  var params = useParams();
  var shop = useShop();
  var currentCategory = getCategoryBySlug(params.slug);
  var categoryProducts = currentCategory ? getProductsByCategory(currentCategory.slug) : [];
  var filteredProducts = categoryProducts.filter(function (item) {
    return matchesSearch(item, shop.searchQuery);
  });

  return (
    <div className="page-shell py-4 sm:py-6">
      <section className="surface-card p-4 sm:p-6">
        <div className="text-xs text-slate-500">分类频道</div>
        <h1 className="mt-2 text-2xl font-bold text-slate-900">
          {currentCategory ? currentCategory.title : "分类商品"}
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          {currentCategory ? currentCategory.description : "浏览精选分类商品"}
        </p>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {Array.isArray(categories)
            ? categories.map(function (item) {
                return (
                  <Link
                    key={item.slug}
                    to={"/category/" + item.slug}
                    className={
                      "whitespace-nowrap rounded-full px-4 py-2 text-sm " +
                      (currentCategory && currentCategory.slug === item.slug
                        ? "bg-orange-500 text-white"
                        : "bg-slate-100 text-slate-700")
                    }
                  >
                    {item.title}
                  </Link>
                );
              })
            : null}
        </div>
      </section>

      <section className="mt-6">
        <SectionBlock
          title={currentCategory ? currentCategory.title + "商品" : "分类商品"}
          description={
            shop.searchQuery
              ? "当前关键词“" + shop.searchQuery + "”下共 " + filteredProducts.length + " 件商品"
              : "共 " + filteredProducts.length + " 件商品"
          }
          to="/"
          rightLabel="返回首页"
        />

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <EmptyState
            title="当前分类暂无匹配结果"
            description="可以清空搜索词，或切换到其他分类继续浏览。"
            action={
              <button
                type="button"
                onClick={function () {
                  shop.setSearchQuery("");
                }}
                className="min-h-11 rounded-xl bg-orange-500 px-4 text-sm font-semibold text-white"
              >
                清空搜索
              </button>
            }
          />
        )}
      </section>
    </div>
  );
}
