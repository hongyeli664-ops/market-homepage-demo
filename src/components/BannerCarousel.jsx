import { useEffect, useState } from "react";

export default function BannerCarousel({ banners }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % banners.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [banners.length]);

  const current = banners[activeIndex];

  return (
    <div className={`relative h-full overflow-hidden rounded-[32px] bg-gradient-to-br ${current.bg} p-8 text-white shadow-soft`}>
      <div className="absolute -right-14 top-10 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
      <div className="absolute bottom-0 right-12 h-40 w-40 rounded-full bg-black/10 blur-2xl" />
      <div className="relative flex h-full flex-col justify-between">
        <div>
          <div className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm">
            平台主会场
          </div>
          <h2 className="mt-6 max-w-[420px] text-4xl font-black leading-tight">{current.title}</h2>
          <p className="mt-4 max-w-[420px] text-lg text-white/90">{current.subtitle}</p>
        </div>
        <div className="flex items-end justify-between">
          <button className="rounded-full bg-white px-6 py-3 text-base font-semibold text-ink-900 shadow-card">
            {current.cta}
          </button>
          <div className="flex gap-2">
            {banners.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition ${
                  index === activeIndex ? "w-10 bg-white" : "w-3 bg-white/50"
                }`}
                aria-label={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
