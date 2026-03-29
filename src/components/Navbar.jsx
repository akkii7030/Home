import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blogs', href: '#blogs' },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 w-full z-50 pt-4 sm:pt-6 lg:pt-8">
      <div className="page-container flex items-center justify-between gap-4">
        <div className="logo shrink-0">
          <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-black leading-none whitespace-nowrap">
            Company Logo
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-medium text-sm lg:text-[18px] text-[#121212] transition-colors hover:text-primary leading-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block nav-cta">
          <button className="flex items-center bg-primary text-[#f2f2f2] shadow-sm transition-all hover:brightness-105 active:scale-95 group rounded-[30px] pr-2 pl-5 lg:pl-6 py-2 gap-3">
            <span className="text-sm lg:text-base font-medium">Contact Us</span>
            <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-primary group-hover:-rotate-45 transition-transform">
              <img src="/arrow-right-up.png" alt="" className="w-3 h-3 object-contain" />
            </span>
          </button>
        </div>

        <button className="md:hidden block text-black text-3xl leading-none" onClick={() => setIsOpen(!isOpen)}>
          &#9776;
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col items-center bg-white/95 backdrop-blur-md absolute top-full left-4 right-4 shadow-lg py-4 gap-4 rounded-xl border border-gray-100 z-50 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-medium text-lg text-[#121212] transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="flex items-center bg-primary text-[#f2f2f2] shadow-sm rounded-[30px] pr-2 pl-6 py-2 gap-3 mt-2">
            <span className="text-base font-medium">Contact Us</span>
            <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-primary">
              <img src="/arrow-right-up.png" alt="" className="w-3 h-3 object-contain" />
            </span>
          </button>
        </nav>
      )}
    </header>
  )
}
