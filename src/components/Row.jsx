import { useEffect, useRef } from "react";

function Row({ title, items }) {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const wheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    el.addEventListener("wheel", wheel, { passive: false });
    return () => el.removeEventListener("wheel", wheel);
  }, []);

  return (
    <section className="mt-6">
      <h2 className="px-4 sm:px-6 lg:px-8 text-lg sm:text-xl font-semibold text-white/90">
        {title}
      </h2>
      <div
        ref={scrollerRef}
        className="mt-3 flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent px-4 sm:px-6 lg:px-8"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="relative min-w-[45%] xs:min-w-[40%] sm:min-w-[32%] md:min-w-[24%] lg:min-w-[18%] aspect-video rounded overflow-hidden bg-neutral-800 group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition duration-300 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="absolute bottom-2 left-2 right-2 text-white text-xs">
              <p className="font-medium line-clamp-1">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Row;
