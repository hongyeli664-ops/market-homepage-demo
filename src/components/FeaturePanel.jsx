import { Link } from "react-router-dom";

export default function FeaturePanel(props) {
  var items = Array.isArray(props.items) ? props.items : [];

  return (
    <section className="surface-card p-4">
      <div className="section-title">快捷服务</div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {items.map(function (item) {
          return (
            <Link
              key={item.id}
              to={item.target || "/"}
              className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4"
            >
              <div className="text-sm font-semibold text-slate-900">{item.label}</div>
              <div className="mt-1 text-xs leading-5 text-slate-500">{item.note}</div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
