import { Link } from "react-router-dom";
import { brandCards, promoNotices } from "../data/mockData";

export default function InfoPanel() {
  return (
    <aside className="glass-panel h-full p-5">
      <div className="rounded-[24px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-5 text-white">
        <div className="text-sm text-white/70">星购 PLUS 会员</div>
        <div className="mt-2 text-2xl font-bold">享专属折扣与极速配送</div>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl bg-white/10 p-3">运费券 6 张</div>
          <div className="rounded-2xl bg-white/10 p-3">专享补贴</div>
        </div>
        <button className="mt-5 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900">
          立即开通
        </button>
      </div>

      <div className="mt-5 rounded-[24px] bg-[#fff7ef] p-5">
        <div className="text-lg font-semibold text-ink-900">活动快报</div>
        <div className="mt-4 space-y-3 text-sm text-ink-700">
          {promoNotices.map((notice) => (
            <div key={notice} className="rounded-2xl bg-white px-4 py-3 shadow-card">
              {notice}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-[24px] border border-slate-100 bg-white p-5">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-ink-900">品牌关注</div>
          <Link to="/category/brands" className="text-sm text-brand-600">
            全部品牌
          </Link>
        </div>
        <div className="mt-4 space-y-3">
          {brandCards.map((brand) => (
            <div key={brand.name} className="rounded-2xl bg-slate-50 px-4 py-3">
              <div className="font-semibold text-ink-900">{brand.name}</div>
              <div className="mt-1 text-sm text-slate-500">{brand.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
