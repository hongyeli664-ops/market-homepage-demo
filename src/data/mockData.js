const sectionMeta = {
  "flash-sale": {
    title: "限时秒杀",
    subtitle: "爆款整点直降，抢到就是赚到",
    accent: "from-rose-500 via-orange-500 to-amber-400"
  },
  "today-picks": {
    title: "今日推荐",
    subtitle: "平台热度高、复购率高的人气好物",
    accent: "from-orange-500 via-amber-400 to-yellow-300"
  },
  digital: {
    title: "热门数码",
    subtitle: "新款数码装备、办公娱乐一站配齐",
    accent: "from-sky-500 via-cyan-400 to-blue-300"
  },
  "home-living": {
    title: "家居生活",
    subtitle: "把理想生活感铺进每一个角落",
    accent: "from-emerald-500 via-lime-400 to-teal-300"
  },
  fashion: {
    title: "服饰穿搭",
    subtitle: "通勤、出游、换季搭配一键入手",
    accent: "from-fuchsia-500 via-pink-400 to-rose-300"
  },
  "fresh-food": {
    title: "美食生鲜",
    subtitle: "新鲜直采，冷链到家，餐桌更安心",
    accent: "from-red-500 via-orange-400 to-yellow-300"
  },
  brands: {
    title: "品牌专区",
    subtitle: "精选大牌馆，官方好价放心买",
    accent: "from-slate-800 via-slate-700 to-slate-500"
  }
};

export const categories = Object.entries(sectionMeta).map(([slug, item], index) => ({
  id: index + 1,
  slug,
  title: item.title,
  subtitle: item.subtitle
}));

export const sectionOrder = categories.map((category) => category.slug);

const createProduct = (id, data) => ({
  id,
  rating: 4.8,
  stock: 28,
  sales: "1.2万+",
  services: ["极速发货", "7天无忧退换", "正品保障"],
  ...data
});

export const banners = [
  {
    id: 1,
    title: "超级品牌周",
    subtitle: "大牌新品直降，爆款低至 5 折",
    cta: "进入会场",
    bg: "from-[#ff6a3d] via-[#ff9248] to-[#ffd04d]"
  },
  {
    id: 2,
    title: "数码焕新季",
    subtitle: "手机、耳机、电脑整机，平台补贴叠加券",
    cta: "马上抢购",
    bg: "from-[#0f4c81] via-[#0d78c8] to-[#4cc9f0]"
  },
  {
    id: 3,
    title: "城市生活馆",
    subtitle: "家居、厨具、香氛、床品搭出高级感",
    cta: "逛生活专区",
    bg: "from-[#14532d] via-[#22c55e] to-[#bef264]"
  }
];

export const promoNotices = [
  "新人专享 188 元礼包",
  "PLUS 会员家电享额外补贴",
  "今晚 20:00 秒杀场即将开抢",
  "数码品类支持 12 期免息"
];

export const brandCards = [
  { name: "NovaTech", desc: "高性能办公数码" },
  { name: "Nord Home", desc: "现代感家居设计" },
  { name: "UrbanWeave", desc: "都市通勤穿搭" },
  { name: "Fresh Origin", desc: "产地直采生鲜" }
];

export const products = [
  createProduct("flash-01", {
    name: "闪焰 Air 降噪真无线耳机",
    category: "flash-sale",
    brand: "NovaTech",
    price: 399,
    originalPrice: 699,
    sales: "3.6万+",
    badge: "限时直降",
    coverLabel: "40dB 主动降噪",
    colors: ["#1f2937", "#f97316"],
    description: "轻盈机身配合深度降噪算法，通勤与运动都稳定舒适。",
    highlights: ["双设备连接", "28 小时续航", "高清通话降噪"],
    tags: ["耳机", "蓝牙", "降噪"]
  }),
  createProduct("flash-02", {
    name: "云栖恒温养生壶 1.5L",
    category: "flash-sale",
    brand: "Nord Home",
    price: 169,
    originalPrice: 259,
    badge: "整点抢",
    coverLabel: "12 种炖煮程序",
    colors: ["#f5d0a9", "#f97316"],
    description: "支持恒温保温与预约炖煮，一壶解决办公室和居家轻养生。",
    highlights: ["玻璃内胆", "防干烧保护", "静音运行"],
    tags: ["小家电", "厨房", "养生"]
  }),
  createProduct("flash-03", {
    name: "沐光柔云四件套",
    category: "flash-sale",
    brand: "Nord Home",
    price: 259,
    originalPrice: 399,
    badge: "爆款返场",
    coverLabel: "A 类亲肤面料",
    colors: ["#d1fae5", "#34d399"],
    description: "高密磨毛工艺，手感柔软细腻，卧室氛围感一步到位。",
    highlights: ["60 支长绒棉", "可机洗", "高支高密"],
    tags: ["床品", "家纺", "卧室"]
  }),
  createProduct("flash-04", {
    name: "果屿即食蓝莓礼盒 12 盒",
    category: "flash-sale",
    brand: "Fresh Origin",
    price: 89,
    originalPrice: 129,
    badge: "限量秒杀",
    coverLabel: "冷链直达",
    colors: ["#312e81", "#60a5fa"],
    description: "甜酸平衡、颗粒饱满，单盒分装更方便随手带走。",
    highlights: ["当季鲜采", "冷链配送", "净重 1.2kg"],
    tags: ["水果", "生鲜", "蓝莓"]
  }),
  createProduct("pick-01", {
    name: "曜石 Pro 14 轻薄笔记本",
    category: "today-picks",
    brand: "NovaTech",
    price: 6499,
    originalPrice: 7299,
    sales: "2.3万+",
    badge: "今日主推",
    coverLabel: "2.8K OLED 屏",
    colors: ["#0f172a", "#2563eb"],
    description: "高分高刷屏与轻薄金属机身结合，适合移动办公与内容创作。",
    highlights: ["14.2 英寸 OLED", "32GB 内存", "1.28kg 轻薄机身"],
    tags: ["笔记本", "办公", "轻薄"]
  }),
  createProduct("pick-02", {
    name: "星云智能空气炸锅",
    category: "today-picks",
    brand: "Nord Home",
    price: 459,
    originalPrice: 599,
    badge: "厨房新宠",
    coverLabel: "6.5L 可视仓",
    colors: ["#111827", "#6b7280"],
    description: "顶部智能触控面板，支持一键复热和少油烘烤模式。",
    highlights: ["双层烤盘", "可拆洗不粘涂层", "12 菜单预设"],
    tags: ["空气炸锅", "厨房", "家电"]
  }),
  createProduct("pick-03", {
    name: "极简通勤风衣外套",
    category: "today-picks",
    brand: "UrbanWeave",
    price: 399,
    originalPrice: 569,
    badge: "高回购",
    coverLabel: "抗皱速干面料",
    colors: ["#f5f5f4", "#9a3412"],
    description: "利落版型适合通勤和旅行场景，叠穿后层次感更出色。",
    highlights: ["防泼水工艺", "宽松落肩", "四季可搭"],
    tags: ["外套", "通勤", "女装"]
  }),
  createProduct("pick-04", {
    name: "牧场优选原切牛排组合",
    category: "today-picks",
    brand: "Fresh Origin",
    price: 189,
    originalPrice: 249,
    badge: "鲜选推荐",
    coverLabel: "谷饲 180 天",
    colors: ["#7f1d1d", "#f97316"],
    description: "多部位组合装，适合煎烤与家庭聚餐，肉香浓郁。",
    highlights: ["原切无拼接", "冷链保鲜", "4 份独立包装"],
    tags: ["牛排", "生鲜", "家庭"]
  }),
  createProduct("digital-01", {
    name: "光域 65W 氮化镓快充套装",
    category: "digital",
    brand: "NovaTech",
    price: 169,
    originalPrice: 229,
    badge: "热卖数码",
    coverLabel: "三口快充",
    colors: ["#111827", "#38bdf8"],
    description: "一颗充电头兼顾手机、平板、电脑，出行桌搭都整洁。",
    highlights: ["65W PD 快充", "折叠插脚", "支持多协议"],
    tags: ["充电器", "桌搭", "快充"]
  }),
  createProduct("digital-02", {
    name: "曜影 27 英寸 4K 显示器",
    category: "digital",
    brand: "NovaTech",
    price: 1999,
    originalPrice: 2499,
    badge: "设计师屏",
    coverLabel: "99% DCI-P3",
    colors: ["#0f172a", "#22d3ee"],
    description: "高色准高亮度，支持 Type-C 一线连接，桌面效率直线提升。",
    highlights: ["4K IPS 面板", "HDR 400", "Type-C 反向供电"],
    tags: ["显示器", "办公", "设计"]
  }),
  createProduct("digital-03", {
    name: "星链智能运动手表 X2",
    category: "digital",
    brand: "NovaTech",
    price: 899,
    originalPrice: 1099,
    badge: "新品上架",
    coverLabel: "双频定位",
    colors: ["#1e293b", "#f97316"],
    description: "全天候健康监测与专业训练数据兼备，日常佩戴也足够轻巧。",
    highlights: ["14 天续航", "双频 GPS", "100+ 运动模式"],
    tags: ["手表", "运动", "穿戴"]
  }),
  createProduct("digital-04", {
    name: "灵动机械键盘 84 键",
    category: "digital",
    brand: "NovaTech",
    price: 549,
    originalPrice: 699,
    badge: "办公好物",
    coverLabel: "三模连接",
    colors: ["#e0e7ff", "#6366f1"],
    description: "热插拔与静音轴体兼顾，适合办公、码字和轻度游戏。",
    highlights: ["热插拔轴座", "RGB 灯效", "蓝牙/2.4G/有线"],
    tags: ["键盘", "外设", "桌搭"]
  }),
  createProduct("home-01", {
    name: "浮岛香氛无火扩香套装",
    category: "home-living",
    brand: "Nord Home",
    price: 129,
    originalPrice: 169,
    badge: "生活美学",
    coverLabel: "木质柑橘调",
    colors: ["#fef3c7", "#fb7185"],
    description: "温和扩香不刺鼻，为玄关、客厅和卧室增加柔和层次。",
    highlights: ["高颜值瓶身", "120 天持香", "适合多场景"],
    tags: ["香氛", "家居", "氛围"]
  }),
  createProduct("home-02", {
    name: "北屿实木餐椅两件套",
    category: "home-living",
    brand: "Nord Home",
    price: 899,
    originalPrice: 1199,
    badge: "家居热销",
    coverLabel: "胡桃木色",
    colors: ["#7c2d12", "#fdba74"],
    description: "线条利落，靠背弧度贴合，适合现代简约和原木空间。",
    highlights: ["榫卯加固结构", "高承重", "免复杂安装"],
    tags: ["家具", "餐厅", "木质"]
  }),
  createProduct("home-03", {
    name: "云感记忆棉靠垫组合",
    category: "home-living",
    brand: "Nord Home",
    price: 199,
    originalPrice: 269,
    badge: "家居必备",
    coverLabel: "慢回弹支撑",
    colors: ["#dcfce7", "#10b981"],
    description: "沙发、飘窗、办公椅都适用，让久坐更舒适也更好看。",
    highlights: ["高回弹内芯", "可拆洗外套", "两只装"],
    tags: ["靠垫", "沙发", "家纺"]
  }),
  createProduct("home-04", {
    name: "净白恒温淋浴花洒套装",
    category: "home-living",
    brand: "Nord Home",
    price: 1299,
    originalPrice: 1499,
    badge: "焕新卫浴",
    coverLabel: "钢琴烤漆面板",
    colors: ["#dbeafe", "#60a5fa"],
    description: "雨淋加手持双模式设计，恒温控水体验更稳定舒适。",
    highlights: ["恒温阀芯", "钢琴烤漆", "一键切换出水"],
    tags: ["卫浴", "花洒", "装修"]
  }),
  createProduct("fashion-01", {
    name: "轻奢羊毛混纺西装",
    category: "fashion",
    brand: "UrbanWeave",
    price: 699,
    originalPrice: 899,
    badge: "气质单品",
    coverLabel: "利落修身版",
    colors: ["#111827", "#be123c"],
    description: "挺括版型和细腻面料兼顾正式感与时髦度，适合多场合穿着。",
    highlights: ["羊毛混纺", "挺括肩线", "内里亲肤顺滑"],
    tags: ["西装", "男装", "通勤"]
  }),
  createProduct("fashion-02", {
    name: "织影针织连衣裙",
    category: "fashion",
    brand: "UrbanWeave",
    price: 329,
    originalPrice: 469,
    badge: "换季新品",
    coverLabel: "修饰身形",
    colors: ["#f5d0fe", "#ec4899"],
    description: "面料亲肤有弹性，适合通勤、约会与周末出行切换。",
    highlights: ["高弹针织", "高腰比例", "易打理不易皱"],
    tags: ["连衣裙", "女装", "通勤"]
  }),
  createProduct("fashion-03", {
    name: "城市慢跑休闲鞋",
    category: "fashion",
    brand: "UrbanWeave",
    price: 459,
    originalPrice: 569,
    badge: "舒适步感",
    coverLabel: "云感中底",
    colors: ["#f3f4f6", "#2563eb"],
    description: "包裹感和透气性兼顾，长时间步行依旧轻松稳定。",
    highlights: ["EVA 缓震", "透气网布", "轻量鞋身"],
    tags: ["鞋履", "运动", "百搭"]
  }),
  createProduct("fashion-04", {
    name: "真皮锁扣托特包",
    category: "fashion",
    brand: "UrbanWeave",
    price: 599,
    originalPrice: 799,
    badge: "都市通勤",
    coverLabel: "大容量分区",
    colors: ["#7c2d12", "#f59e0b"],
    description: "通勤文件和日常随身物都能整齐收纳，风格利落大方。",
    highlights: ["头层牛皮", "磁吸锁扣", "内部分区设计"],
    tags: ["箱包", "通勤", "皮具"]
  }),
  createProduct("fresh-01", {
    name: "海湾即食熟冻黑虎虾",
    category: "fresh-food",
    brand: "Fresh Origin",
    price: 139,
    originalPrice: 179,
    badge: "冷链直达",
    coverLabel: "净重 1kg",
    colors: ["#1d4ed8", "#22d3ee"],
    description: "鲜甜弹牙，解冻即食或简单加热都方便，家庭聚餐常备。",
    highlights: ["产地直采", "真空锁鲜", "规格均匀"],
    tags: ["海鲜", "虾", "生鲜"]
  }),
  createProduct("fresh-02", {
    name: "山谷有机蔬菜周配箱",
    category: "fresh-food",
    brand: "Fresh Origin",
    price: 99,
    originalPrice: 129,
    badge: "每日鲜配",
    coverLabel: "9 种时令蔬菜",
    colors: ["#166534", "#84cc16"],
    description: "从叶菜到根茎搭配均衡，适合一周日常烹饪和轻食准备。",
    highlights: ["农残检测", "冷链周配", "净菜分装"],
    tags: ["蔬菜", "有机", "家庭"]
  }),
  createProduct("fresh-03", {
    name: "金乳酪流心可颂 8 枚",
    category: "fresh-food",
    brand: "Fresh Origin",
    price: 59,
    originalPrice: 79,
    badge: "人气甜点",
    coverLabel: "空气烘焙",
    colors: ["#fef3c7", "#f59e0b"],
    description: "外层酥脆、内里柔软，早餐搭配咖啡就很满足。",
    highlights: ["黄油酥层", "独立包装", "加热即享"],
    tags: ["烘焙", "早餐", "甜点"]
  }),
  createProduct("fresh-04", {
    name: "原产地阳光橙 8 斤装",
    category: "fresh-food",
    brand: "Fresh Origin",
    price: 69,
    originalPrice: 89,
    badge: "果园现摘",
    coverLabel: "多汁清甜",
    colors: ["#ea580c", "#fdba74"],
    description: "皮薄易剥、果香浓郁，适合家庭日常囤货和下午茶。",
    highlights: ["当季鲜果", "坏果包赔", "礼盒装发货"],
    tags: ["水果", "橙子", "囤货"]
  }),
  createProduct("brand-01", {
    name: "NovaTech 旗舰手机 Neo X",
    category: "brands",
    brand: "NovaTech",
    price: 4999,
    originalPrice: 5599,
    badge: "品牌旗舰",
    coverLabel: "1 英寸影像",
    colors: ["#111827", "#3b82f6"],
    description: "旗舰级影像系统配合流畅性能，日常使用与内容创作都出色。",
    highlights: ["1 英寸主摄", "120W 快充", "2K 高刷曲屏"],
    tags: ["手机", "旗舰", "影像"]
  }),
  createProduct("brand-02", {
    name: "Nord Home 设计师落地灯",
    category: "brands",
    brand: "Nord Home",
    price: 799,
    originalPrice: 999,
    badge: "品牌馆臻选",
    coverLabel: "无极调光",
    colors: ["#fef3c7", "#92400e"],
    description: "纤细灯身和柔和灯光适合客厅与阅读角，提升空间质感。",
    highlights: ["三段色温", "氛围光照", "极简金属底座"],
    tags: ["灯具", "家居", "设计感"]
  }),
  createProduct("brand-03", {
    name: "UrbanWeave 经典风衣系列",
    category: "brands",
    brand: "UrbanWeave",
    price: 629,
    originalPrice: 799,
    badge: "品牌王牌",
    coverLabel: "都市剪裁",
    colors: ["#e5e7eb", "#374151"],
    description: "品牌经典款风衣，版型挺阔耐穿，是换季搭配的核心单品。",
    highlights: ["双排扣版型", "可拆卸腰带", "抗皱耐穿"],
    tags: ["风衣", "品牌", "穿搭"]
  }),
  createProduct("brand-04", {
    name: "Fresh Origin 黑金鲜牛乳礼盒",
    category: "brands",
    brand: "Fresh Origin",
    price: 119,
    originalPrice: 149,
    badge: "品牌优选",
    coverLabel: "72 小时冷链",
    colors: ["#450a0a", "#fbbf24"],
    description: "限定牧场鲜奶礼盒，口感醇厚顺滑，早餐与送礼都体面。",
    highlights: ["巴氏鲜奶", "限定礼盒", "全程冷链"],
    tags: ["乳品", "礼盒", "品牌"]
  })
];

export const getProductsByCategory = (slug) =>
  products.filter((product) => product.category === slug);

export const getCategoryMeta = (slug) =>
  categories.find((item) => item.slug === slug) || categories[0];

export const getSectionMeta = (slug) => sectionMeta[slug];
