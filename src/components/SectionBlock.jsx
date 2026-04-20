import { Link } from "react-router-dom";

export default function SectionBlock(props) {
  var title = props.title || "商品专区";
  var description = props.description || "";
  var to = props.to || "/";
  var rightLabel = props.rightLabel || "查看更多";

  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <div>
        <h2 className="section-title">{title}</h2>
        {description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}
      </div>
      <Link to={to} className="text-sm font-semibold text-orange-500">
        {rightLabel}
      </Link>
    </div>
  );
}
