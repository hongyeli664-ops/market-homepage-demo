import { Link } from "react-router-dom";
import BannerCard from "../components/BannerCard";
import CategoryTabs from "../components/CategoryTabs";
import EmptyState from "../components/EmptyState";
import FeaturePanel from "../components/FeaturePanel";
import ProductGrid from "../components/ProductGrid";
import SectionBlock from "../components/SectionBlock";
import {
  banners,
  categories,
  featureLinks,
  getProductsByCategory,
  getRecommendedProducts,
  products
} from "../data/mockData";
import { useShop } from "../context/ShopContext";

function matchesSearch(product, searchQuery) {
  if (!product) {
    return false;
  }

  var keyword = (searchQuery || "").trim().toLowerCase();

  if (!keyword) {
    return true;
  }

  var searchSource = [
    product.name || "",
    product.brand || "",
    Array.isArray(product.tags) ? product.tags.join(" ") : ""
  ]
    .join(" ")
    .toLowerCase();

  return searchSource.indexOf(keyword) > -1;
}

export default function HomePage() {
  var shop = useShop();
  var mainBanner = Array.isArray(banners) && banners[0] ? banners[0] : null;
  var recommendedProducts = getRecommendedProducts(6);
  var hotProducts = getProductsByCategory("digital").slice(0, 4).concat(getProductsByCategory("fashion").slice(0, 2));
  var searchResults = Array.isArray(products)
    ? products.filter(function (item) {
        return matchesSearch(item, shop.searchQuery);
      })
    : [];

  return (
    <div className="page-shell py-4 sm:py-6">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <BannerCard
          title={mainBanner ? mainBanner.title : "星购商城"}
          subtitle={
            mainBanner
              ? mainBanner.subtitle
              : "首页、分类、详情页和购物车都已调整为移动端稳定优先。"
          }
          ctaLabel={mainBanner ? mainBanner.ctaLabel : "开始逛"}
          to={mainBanner ? "/category/" + mainBanner.targetSlug : "/category/today-picks"}
        />
        <FeaturePanel items={featureLinks} />
      </div>

      <div className="mt-4">
        <CategoryTabs categories={categories} />
      </div>

      {shop.searchQuery ? (
        <section className="mt-6">
          <SectionBlock
            title={"搜索结果：" + shop.searchQuery}
            description={"共找到 " + searchResults.length + " 件相关商品"}
            to="/category/today-picks"
            rightLabel="返回推荐"
          />
          {searchResults.length > 0 ? (
            <ProductGrid products={searchResults.slice(0, 8)} />
          ) : (
            <EmptyState
              title="没有找到相关商品"
              description="可以尝试更换关键词，或者直接浏览下方推荐商品。"
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
      ) : null}

      <section className="mt-6">
        <SectionBlock
          title="推荐商品"
          description="首页优先展示适合手机浏览的精选卡片列表。"
          to="/category/today-picks"
        />
        <ProductGrid products={recommendedProducts} />
      </section>

      <section className="mt-6">
        <SectionBlock
          title="热门商品"
          description="精选数码与穿搭热卖，保留电商首页频道感。"
          to="/category/digital"
        />
        <ProductGrid products={hotProducts} />
      </section>

      <section className="mt-6">
        <div className="surface-card p-4">
          <SectionBlock
            title="频道直达"
            description="保留电商首页分区结构，但交互尽量简化，优先保证真机稳定。"
            to="/category/flash-sale"
            rightLabel="查看全部"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Array.isArray(categories)
              ? categories.map(function (item) {
                  var previewProducts = getProductsByCategory(item.slug).slice(0, 2);
                  return (
                    <Link
                      key={item.slug}
                      to={"/category/" + item.slug}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-base font-semibold text-slate-900">{item.title}</div>
                      <div className="mt-1 text-sm text-slate-500">{item.description}</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {previewProducts.map(function (product) {
                          return (
                            <span
                              key={product.id}
                              className="rounded-full bg-white px-3 py-1 text-xs text-slate-600"
                            >
                              {product.name}
                            </span>
                          );
                        })}
                      </div>
                    </Link>
                  );
                })
              : null}
          </div>
        </div>
      </section>
    </div>
  );
}
