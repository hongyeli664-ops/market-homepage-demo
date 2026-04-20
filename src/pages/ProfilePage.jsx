export default function ProfilePage() {
  return (
    <div className="container-wide pt-8">
      <section className="glass-panel overflow-hidden">
        <div className="grid xl:grid-cols-[320px_minmax(0,1fr)]">
          <div className="bg-gradient-to-br from-brand-600 to-orange-400 p-8 text-white">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 text-3xl font-black">
              SG
            </div>
            <div className="mt-6 text-3xl font-black">星购会员中心</div>
            <div className="mt-3 text-sm text-white/85">展示个人权益、地址簿、收藏与账户资产的示意页面。</div>
          </div>
          <div className="grid gap-5 p-8 sm:grid-cols-2 xl:grid-cols-3">
            {[
              ["账户余额", "¥ 2,860"],
              ["优惠券", "12 张"],
              ["收藏商品", "86 件"],
              ["默认收货地址", "上海 · 张江"],
              ["最近浏览", "14 件"],
              ["会员等级", "PLUS 年卡"]
            ].map(([title, value]) => (
              <div key={title} className="rounded-[24px] bg-slate-50 p-6">
                <div className="text-sm text-slate-500">{title}</div>
                <div className="mt-4 text-2xl font-black text-ink-900">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
