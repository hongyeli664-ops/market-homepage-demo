export default function EmptyState(props) {
  var title = props.title || "暂无内容";
  var description = props.description || "稍后再来看看";
  var action = props.action || null;

  return (
    <div className="surface-card px-5 py-10 text-center sm:px-8">
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
