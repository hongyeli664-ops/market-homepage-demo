export function formatPrice(value) {
  var numberValue = typeof value === "number" && !Number.isNaN(value) ? value : 0;

  try {
    return new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "CNY",
      minimumFractionDigits: 0
    }).format(numberValue);
  } catch (error) {
    return "¥" + numberValue;
  }
}

export function safeArray(value) {
  return Array.isArray(value) ? value : [];
}
