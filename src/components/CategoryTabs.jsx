import { Link } from "react-router-dom";

export default function CategoryTabs(props) {
  var categories = Array.isArray(props.categories) ? props.categories : [];

  return (
    <section className="surface-card p-4">
      <div className="section-title">分类入口</div>
      <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-7">
        {categories.map(function (item) {
          return (
            <Link
              key={item.slug}
              to={"/category/" + item.slug}
              className="flex min-h-20 flex-col items-center justify-center rounded-2xl bg-slate-50 px-2 text-center"
            >
              <span className="text-sm font-semibold text-slate-900">{item.shortTitle || item.title}</span>
              <span className="mt-1 text-[11px] leading-4 text-slate-500">{item.description}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
