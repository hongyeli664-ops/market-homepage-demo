var profileStats = [
  { title: "优惠券", value: "12 张" },
  { title: "收藏商品", value: "28 件" },
  { title: "默认地址", value: "上海 浦东" },
  { title: "会员等级", value: "PLUS" }
];

export default function ProfilePage() {
  return (
    <div className="page-shell py-4 sm:py-6">
      <section className="surface-card overflow-hidden">
        <div className="bg-orange-500 px-5 py-6 text-white">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-lg font-bold">
            SG
          </div>
          <h1 className="mt-4 text-2xl font-bold">个人中心</h1>
          <p className="mt-2 text-sm text-orange-50">账户信息、收藏商品和会员权益示意页。</p>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          {profileStats.map(function (item) {
            return (
              <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
                <div className="text-sm text-slate-500">{item.title}</div>
                <div className="mt-2 text-xl font-bold text-slate-900">{item.value}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
