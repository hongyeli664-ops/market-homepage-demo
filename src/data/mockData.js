export var categories = [
  { id: "flash-sale", slug: "flash-sale", title: "限时秒杀", shortTitle: "秒杀", description: "整点抢购与活动好价" },
  { id: "today-picks", slug: "today-picks", title: "今日推荐", shortTitle: "推荐", description: "热度高、口碑好的精选好物" },
  { id: "digital", slug: "digital", title: "热门数码", shortTitle: "数码", description: "手机电脑与办公外设" },
  { id: "home-living", slug: "home-living", title: "家居生活", shortTitle: "家居", description: "家纺、家具与生活电器" },
  { id: "fashion", slug: "fashion", title: "服饰穿搭", shortTitle: "穿搭", description: "通勤与日常搭配单品" },
  { id: "fresh-food", slug: "fresh-food", title: "美食生鲜", shortTitle: "生鲜", description: "生鲜、零食与早餐烘焙" },
  { id: "brands", slug: "brands", title: "品牌专区", shortTitle: "品牌", description: "品牌官方馆与爆款合集" }
];

export var banners = [
  {
    id: "main-banner",
    title: "夏日焕新会场",
    subtitle: "首页主会场稳定版，手机也能顺畅浏览，数码家居每日更新。",
    ctaLabel: "进入主会场",
    targetSlug: "today-picks"
  },
  {
    id: "sale-banner",
    title: "晚八点限时秒杀",
    subtitle: "热门单品与生活好物低至 5 折，适合移动端快速下单浏览。",
    ctaLabel: "查看秒杀",
    targetSlug: "flash-sale"
  }
];

export var featureLinks = [
  { id: "coupon", label: "领券中心", note: "每日更新好券", target: "/category/today-picks" },
  { id: "brand", label: "品牌馆", note: "官方好价", target: "/category/brands" },
  { id: "newcomer", label: "新人礼", note: "首单补贴", target: "/profile" },
  { id: "orders", label: "订单查询", note: "物流进度", target: "/orders" }
];

function createProduct(data) {
  return {
    id: data.id,
    name: data.name,
    category: data.category,
    brand: data.brand,
    price: data.price,
    originalPrice: data.originalPrice,
    rating: data.rating || 4.8,
    salesText: data.salesText || "1.2万+",
    summary: data.summary || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    highlights: Array.isArray(data.highlights) ? data.highlights : [],
    services: Array.isArray(data.services)
      ? data.services
      : ["正品保障", "快速发货", "售后无忧"],
    stock: typeof data.stock === "number" ? data.stock : 20,
    imageTone: data.imageTone || "orange",
    badge: data.badge || "精选",
    coverLabel: data.coverLabel || "店铺热卖"
  };
}

export var products = [
  createProduct({
    id: "flash-01",
    name: "Air 降噪无线耳机",
    category: "flash-sale",
    brand: "NovaTech",
    price: 399,
    originalPrice: 699,
    salesText: "3.6万+",
    summary: "轻巧舒适，通勤和运动都适合。",
    tags: ["耳机", "蓝牙", "降噪"],
    highlights: ["主动降噪", "28 小时续航", "双设备连接"],
    imageTone: "orange",
    badge: "限时直降",
    coverLabel: "40dB 主动降噪"
  }),
  createProduct({
    id: "flash-02",
    name: "恒温养生壶 1.5L",
    category: "flash-sale",
    brand: "Nord Home",
    price: 169,
    originalPrice: 259,
    summary: "预约炖煮与保温都很方便。",
    tags: ["厨房", "小家电", "养生"],
    highlights: ["12 种程序", "防干烧", "玻璃内胆"],
    imageTone: "amber",
    badge: "整点抢",
    coverLabel: "12 种炖煮程序"
  }),
  createProduct({
    id: "today-01",
    name: "曜石 Pro 14 轻薄笔记本",
    category: "today-picks",
    brand: "NovaTech",
    price: 6499,
    originalPrice: 7299,
    salesText: "2.3万+",
    summary: "移动办公与内容创作都顺手。",
    tags: ["笔记本", "办公", "轻薄"],
    highlights: ["2.8K OLED", "32GB 内存", "1.28kg 机身"],
    imageTone: "slate",
    badge: "今日主推",
    coverLabel: "轻薄高性能"
  }),
  createProduct({
    id: "today-02",
    name: "智能空气炸锅 6.5L",
    category: "today-picks",
    brand: "Nord Home",
    price: 459,
    originalPrice: 599,
    summary: "适合家庭轻食与日常复热。",
    tags: ["空气炸锅", "厨房", "家电"],
    highlights: ["可视炸篮", "12 菜单", "少油烘烤"],
    imageTone: "gray",
    badge: "厨房热卖",
    coverLabel: "6.5L 大容量"
  }),
  createProduct({
    id: "digital-01",
    name: "65W 氮化镓快充套装",
    category: "digital",
    brand: "NovaTech",
    price: 169,
    originalPrice: 229,
    summary: "手机、平板、电脑都能充。",
    tags: ["充电器", "桌搭", "快充"],
    highlights: ["三口快充", "折叠插脚", "支持 PD"],
    imageTone: "blue",
    badge: "热卖数码",
    coverLabel: "办公桌搭必备"
  }),
  createProduct({
    id: "digital-02",
    name: "27 英寸 4K 显示器",
    category: "digital",
    brand: "NovaTech",
    price: 1999,
    originalPrice: 2499,
    summary: "高色准适合办公和设计。",
    tags: ["显示器", "办公", "设计"],
    highlights: ["4K IPS", "Type-C", "99% DCI-P3"],
    imageTone: "indigo",
    badge: "设计师屏",
    coverLabel: "高色准显示"
  }),
  createProduct({
    id: "home-01",
    name: "香氛无火扩香套装",
    category: "home-living",
    brand: "Nord Home",
    price: 129,
    originalPrice: 169,
    summary: "卧室和客厅都适合。",
    tags: ["香氛", "家居", "氛围"],
    highlights: ["木质柑橘调", "持香 120 天", "高颜值瓶身"],
    imageTone: "rose",
    badge: "生活美学",
    coverLabel: "木质柑橘调"
  }),
  createProduct({
    id: "home-02",
    name: "记忆棉靠垫组合",
    category: "home-living",
    brand: "Nord Home",
    price: 199,
    originalPrice: 269,
    summary: "适合沙发、飘窗和办公室。",
    tags: ["靠垫", "家纺", "沙发"],
    highlights: ["慢回弹", "可拆洗", "双只装"],
    imageTone: "green",
    badge: "家居必备",
    coverLabel: "久坐更舒适"
  }),
  createProduct({
    id: "fashion-01",
    name: "极简通勤风衣",
    category: "fashion",
    brand: "UrbanWeave",
    price: 399,
    originalPrice: 569,
    summary: "换季通勤很实穿的外套。",
    tags: ["风衣", "通勤", "外套"],
    highlights: ["抗皱速干", "宽松剪裁", "四季可搭"],
    imageTone: "stone",
    badge: "高回购",
    coverLabel: "通勤百搭"
  }),
  createProduct({
    id: "fashion-02",
    name: "真皮托特包",
    category: "fashion",
    brand: "UrbanWeave",
    price: 599,
    originalPrice: 799,
    summary: "大容量分区适合通勤。",
    tags: ["箱包", "通勤", "皮具"],
    highlights: ["头层牛皮", "大容量", "磁吸锁扣"],
    imageTone: "brown",
    badge: "都市通勤",
    coverLabel: "大容量分区"
  }),
  createProduct({
    id: "fresh-01",
    name: "原切牛排组合装",
    category: "fresh-food",
    brand: "Fresh Origin",
    price: 189,
    originalPrice: 249,
    summary: "家庭聚餐和日常煎烤都方便。",
    tags: ["牛排", "生鲜", "家庭"],
    highlights: ["原切无拼接", "冷链配送", "独立包装"],
    imageTone: "red",
    badge: "鲜选推荐",
    coverLabel: "家庭聚餐常备"
  }),
  createProduct({
    id: "fresh-02",
    name: "阳光橙 8 斤装",
    category: "fresh-food",
    brand: "Fresh Origin",
    price: 69,
    originalPrice: 89,
    summary: "果香浓郁，适合家庭囤货。",
    tags: ["水果", "橙子", "囤货"],
    highlights: ["当季鲜果", "礼盒装发货", "坏果包赔"],
    imageTone: "yellow",
    badge: "果园现摘",
    coverLabel: "多汁清甜"
  }),
  createProduct({
    id: "brand-01",
    name: "旗舰手机 Neo X",
    category: "brands",
    brand: "NovaTech",
    price: 4999,
    originalPrice: 5599,
    summary: "旗舰影像与高刷屏兼备。",
    tags: ["手机", "旗舰", "影像"],
    highlights: ["1 英寸主摄", "120W 快充", "2K 高刷曲屏"],
    imageTone: "purple",
    badge: "品牌旗舰",
    coverLabel: "影像旗舰"
  }),
  createProduct({
    id: "brand-02",
    name: "设计师落地灯",
    category: "brands",
    brand: "Nord Home",
    price: 799,
    originalPrice: 999,
    summary: "营造客厅与阅读角氛围。",
    tags: ["灯具", "家居", "设计"],
    highlights: ["三段色温", "无极调光", "极简底座"],
    imageTone: "teal",
    badge: "品牌馆臻选",
    coverLabel: "客厅氛围灯"
  })
];

export function getCategoryBySlug(slug) {
  var list = Array.isArray(categories) ? categories : [];
  var found = list.find(function (item) {
    return item && item.slug === slug;
  });

  return found || list[0] || null;
}

export function getProductsByCategory(slug) {
  if (!Array.isArray(products)) {
    return [];
  }

  return products.filter(function (item) {
    return item && item.category === slug;
  });
}

export function getProductById(productId) {
  if (!Array.isArray(products)) {
    return null;
  }

  return (
    products.find(function (item) {
      return item && item.id === productId;
    }) || null
  );
}

export function getRecommendedProducts(limit) {
  var safeLimit = typeof limit === "number" ? limit : 6;
  return Array.isArray(products) ? products.slice(0, safeLimit) : [];
}
