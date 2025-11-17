import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="w-full sticky top-0 bg-white text-black border-b-4 border-black z-20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-black text-white grid place-items-center border-2 border-black">
            <span className="text-xs font-bold">FB</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight">Flames Blue</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a href="#features" className="underline-offset-4 hover:underline">Features</a>
          <a href="#work" className="underline-offset-4 hover:underline">Work</a>
          <a href="#contact" className="underline-offset-4 hover:underline">Contact</a>
          <a href="/test" className="px-4 py-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors">
            System Check
          </a>
        </nav>
        <button className="md:hidden p-2 border-2 border-black">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
