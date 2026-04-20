import { Link } from "react-router-dom";

export default function BannerCard(props) {
  var title = props.title || "商城会场";
  var subtitle = props.subtitle || "精选好物";
  var ctaLabel = props.ctaLabel || "查看";
  var to = props.to || "/";

  return (
    <section className="surface-card overflow-hidden bg-orange-500 text-white">
      <div className="px-5 py-6 sm:px-6 sm:py-7">
        <div className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white w-fit">
          平台活动
        </div>
        <h1 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">{title}</h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-orange-50 sm:text-base">{subtitle}</p>
        <Link
          to={to}
          className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-white px-4 text-sm font-semibold text-orange-600"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
