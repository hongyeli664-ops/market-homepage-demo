export default function Footer() {
  return (
    <footer
      id="help"
      className="mt-20 border-t border-slate-200 bg-[#111827] pb-10 pt-14 text-slate-200"
    >
      <div className="container-wide">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="text-lg font-semibold text-white">新手帮助</div>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div>购物流程</div>
              <div>会员权益</div>
              <div>积分说明</div>
              <div>售后政策</div>
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold text-white">配送与支付</div>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div>配送时效说明</div>
              <div>运费规则</div>
              <div>支付方式</div>
              <div>发票与报销</div>
            </div>
          </div>
          <div id="contact">
            <div className="text-lg font-semibold text-white">联系方式</div>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div>客服热线：400-800-2026</div>
              <div>商务合作：bd@xinggou-demo.com</div>
              <div>服务时间：09:00 - 22:00</div>
              <div>地址：上海市浦东新区示例大道 88 号</div>
            </div>
          </div>
          <div id="copyright">
            <div className="text-lg font-semibold text-white">平台信息</div>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div>关于我们</div>
              <div>隐私政策</div>
              <div>用户协议</div>
              <div>Copyright © 2026 星购商城 All Rights Reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
