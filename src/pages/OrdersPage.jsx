var orders = [
  { id: "SG20260418001", status: "待收货", amount: "¥699", items: "极简通勤风衣" },
  { id: "SG20260417012", status: "已完成", amount: "¥169", items: "65W 氮化镓快充套装" },
  { id: "SG20260415008", status: "配送中", amount: "¥189", items: "原切牛排组合装" }
];

export default function OrdersPage() {
  return (
    <div className="page-shell py-4 sm:py-6">
      <section className="surface-card p-4 sm:p-5">
        <h1 className="text-2xl font-bold text-slate-900">订单中心</h1>
        <p className="mt-2 text-sm text-slate-500">查看最近订单、物流状态和售后入口。</p>

        <div className="mt-5 space-y-3">
          {orders.map(function (order) {
            return (
              <article key={order.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-slate-900">{order.items}</div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs text-orange-500">
                    {order.status}
                  </span>
                </div>
                <div className="mt-3 text-xs leading-6 text-slate-500">
                  <div>订单号：{order.id}</div>
                  <div>金额：{order.amount}</div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
