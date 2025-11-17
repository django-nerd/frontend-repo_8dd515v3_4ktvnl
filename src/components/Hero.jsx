import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[88vh] md:h-[88vh] w-full border-b-4 border-black overflow-hidden bg-neutral-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-20">
        <div className="inline-flex items-center gap-2 bg-white text-black border-2 border-black px-3 py-1 mb-6">
          <div className="w-2 h-2 bg-green-500 border border-black animate-pulse" />
          <span className="text-xs font-extrabold">LIVE • NEO BRUTAL</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] text-white drop-shadow-[0_5px_0_rgba(0,0,0,1)]">
          Bold. Blocky. Beautiful.
        </h1>
        <p className="max-w-2xl mt-6 text-lg md:text-xl font-semibold text-white/90 drop-shadow-[0_3px_0_rgba(0,0,0,1)]">
          A neo‑brutalist starter with sharp edges, thick borders and a cinematic 3D backdrop of shifting metallic cubes.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#features" className="px-6 py-3 bg-white text-black border-4 border-black font-extrabold hover:-translate-y-0.5 active:translate-y-0 transition-transform">
            Explore Features
          </a>
          <a href="#contact" className="px-6 py-3 bg-lime-300 text-black border-4 border-black font-extrabold hover:-translate-y-0.5 active:translate-y-0 transition-transform">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-neutral-900/30" />
    </section>
  )
}

export default Hero
