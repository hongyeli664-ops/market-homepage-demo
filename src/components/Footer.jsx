export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="page-shell">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900">购物帮助</h3>
            <p className="mt-3 text-xs leading-6 text-slate-500">新手指南、支付方式、售后服务、配送说明。</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">平台服务</h3>
            <p className="mt-3 text-xs leading-6 text-slate-500">品牌合作、会员权益、企业采购、优惠活动。</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">联系方式</h3>
            <p className="mt-3 text-xs leading-6 text-slate-500">客服热线 400-800-2026，服务时间 09:00 - 22:00。</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">版权信息</h3>
            <p className="mt-3 text-xs leading-6 text-slate-500">Copyright © 2026 星购商城. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
