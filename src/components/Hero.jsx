import { Play, Info } from "lucide-react";

function Hero() {
  return (
    <section className="relative h-[65vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] w-full">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=2069&auto=format&fit=crop"
          alt="Featured"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>
      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              The Grand Heist
            </h1>
            <p className="mt-4 text-white/80 text-sm md:text-base">
              A band of unlikely masterminds plan the most daring museum robbery
              of the century. Betrayals, chases, and a twist you won't see coming.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button className="inline-flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded md:px-6 md:py-3 hover:bg-white/90">
                <Play size={18} fill="currentColor" />
                Play
              </button>
              <button className="inline-flex items-center gap-2 bg-white/20 text-white font-semibold px-4 py-2 rounded md:px-6 md:py-3 hover:bg-white/30">
                <Info size={18} /> More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
