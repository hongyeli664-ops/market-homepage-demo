import { Link } from "react-router-dom";

export default function CategoryMenu({ categories }) {
  return (
    <aside className="glass-panel h-full p-4">
      <div className="rounded-[22px] bg-gradient-to-r from-brand-600 to-orange-400 px-4 py-3 text-sm font-semibold text-white">
        全部商品分类
      </div>
      <div className="mt-4 space-y-2">
        {categories.map((item) => (
          <Link
            key={item.slug}
            to={`/category/${item.slug}`}
            className="group block rounded-[20px] border border-transparent px-4 py-4 transition hover:border-brand-100 hover:bg-brand-50"
          >
            <div className="text-base font-semibold text-ink-900 group-hover:text-brand-700">
              {item.title}
            </div>
            <div className="mt-1 text-sm text-slate-500">{item.subtitle}</div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
