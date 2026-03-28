import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 w-full z-50 pt-8">
      <div className="page-container flex items-center justify-between">
        <div className="logo shrink-0">
          <span className="text-3xl font-bold text-black leading-none whitespace-nowrap">
            Company Logo
          </span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-[45px]">
          {['Home', 'About us', 'Services', 'Blogs'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(' ', '-')}`} 
              className="font-medium text-base lg:text-[18px] text-[#121212] transition-colors hover:text-primary leading-none"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block nav-cta">
          <button className="flex items-center bg-primary text-[#f2f2f2] shadow-sm transition-all hover:brightness-105 active:scale-95 group rounded-[30px] pr-2 pl-6 py-2 gap-3">
            <span className="text-base font-medium">Contact Us</span>
            <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-primary group-hover:-rotate-45 transition-transform">
              <img src="/arrow-right-up.png" alt="" className="w-3 h-3 object-contain" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden block text-black text-3xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center bg-white/95 backdrop-blur-md absolute top-full left-4 right-4 shadow-lg py-4 gap-4 rounded-xl border border-gray-100 z-50 mt-2">
          {['Home', 'About us', 'Services', 'Blogs'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(' ', '-')}`} 
              className="font-medium text-lg text-[#121212] transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link}
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
  );
};
