import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./Icons";

export default function SectionHeader({ title, subtitle, to, accent }) {
  return (
    <div className={`rounded-[28px] bg-gradient-to-r ${accent} p-[1px]`}>
      <div className="flex items-center justify-between rounded-[27px] bg-white/95 px-7 py-5">
        <div>
          <div className="text-[28px] font-black text-ink-900">{title}</div>
          <div className="mt-2 text-sm text-slate-500">{subtitle}</div>
        </div>
        <Link
          to={to}
          className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          进入分类
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
