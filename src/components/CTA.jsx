function CTA() {
  return (
    <section id="contact" className="bg-white border-b-4 border-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-3xl md:text-5xl font-black leading-tight">Make something unapologetically bold</h3>
            <p className="mt-4 text-neutral-700 font-semibold">
              Tell us what you want to build. We’ll turn it into a running product with a punchy, neo‑brutalist vibe.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="bg-neutral-100 border-4 border-black p-4 md:p-6 shadow-[8px_8px_0_0_#000]">
            <div className="grid gap-3">
              <input className="w-full border-4 border-black p-3 font-semibold placeholder-neutral-500" placeholder="Your name" />
              <input className="w-full border-4 border-black p-3 font-semibold placeholder-neutral-500" placeholder="Email" type="email" />
              <textarea className="w-full border-4 border-black p-3 font-semibold placeholder-neutral-500 h-28" placeholder="What are we building?" />
              <button className="px-6 py-3 bg-lime-300 text-black border-4 border-black font-extrabold hover:-translate-y-0.5 active:translate-y-0 transition-transform">
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTA
