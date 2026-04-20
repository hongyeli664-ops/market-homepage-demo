export default function OrdersPage() {
  const orders = [
    { id: "SG20260418001", status: "待收货", amount: "¥ 699", items: "轻奢羊毛混纺西装" },
    { id: "SG20260417012", status: "已完成", amount: "¥ 169", items: "光域 65W 氮化镓快充套装" },
    { id: "SG20260415008", status: "配送中", amount: "¥ 189", items: "牧场优选原切牛排组合" }
  ];

  return (
    <div className="container-wide pt-8">
      <section className="glass-panel p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-ink-900">订单中心</h1>
            <div className="mt-2 text-sm text-slate-500">查看订单状态、物流进度与售后服务入口。</div>
          </div>
          <div className="rounded-full bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-700">
            最近 30 天
          </div>
        </div>
        <div className="mt-8 space-y-4">
          {orders.map((order) => (
            <article
              key={order.id}
              className="grid gap-4 rounded-[24px] border border-slate-100 bg-slate-50 p-5 md:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_120px_140px] xl:items-center"
            >
              <div>
                <div className="text-sm text-slate-500">订单号</div>
                <div className="mt-2 font-semibold text-ink-900">{order.id}</div>
              </div>
              <div>
                <div className="text-sm text-slate-500">商品</div>
                <div className="mt-2 font-semibold text-ink-900">{order.items}</div>
              </div>
              <div>
                <div className="text-sm text-slate-500">金额</div>
                <div className="mt-2 font-semibold text-ink-900">{order.amount}</div>
              </div>
              <div className="text-left xl:text-right">
                <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-600 shadow-card">
                  {order.status}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
