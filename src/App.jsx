import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-neutral-900 text-black min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="bg-neutral-900 text-white border-t-4 border-black">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-semibold">© {new Date().getFullYear()} Flames Blue — Neo Brutalist Starter</p>
          <div className="flex items-center gap-3">
            <a href="#" className="px-3 py-1 bg-white text-black border-2 border-black font-bold">Twitter</a>
            <a href="#" className="px-3 py-1 bg-white text-black border-2 border-black font-bold">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
