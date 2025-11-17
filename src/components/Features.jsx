function FeatureCard({ number, title, children }) {
  return (
    <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_0_#000]">
      <div className="text-xs font-extrabold mb-3">{number}</div>
      <h3 className="text-2xl font-black mb-3">{title}</h3>
      <p className="text-sm md:text-base font-semibold text-neutral-700">{children}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="bg-neutral-100 border-b-4 border-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 md:mb-14">
          <span className="px-3 py-1 bg-black text-white text-xs font-extrabold">FEATURES</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4">Designed to make noise</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard number="01" title="Neo Brutalist UI Kit">
            Heavy borders, loud typography, and tactile hover states that feel physical.
          </FeatureCard>
          <FeatureCard number="02" title="3D Motion Backdrop">
            Full‑bleed Spline scene with metallic cubes and a subtle neon pulse.
          </FeatureCard>
          <FeatureCard number="03" title="Ready to Ship">
            Built with React + Tailwind. Tweak copy and colors, you’re live in minutes.
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}

export default Features
