export const Navbar = () => {
  return (
    <header className="absolute top-[31px] left-0 w-full z-50">
      <div className="mx-auto px-[100px] flex items-center justify-between">
        <div className="logo">
          <span className="text-[30px] font-bold text-black leading-none" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Company Logo
          </span>
        </div>
        <nav className="hidden md:flex gap-[45px]">
          {['Home', 'About us', 'Services', 'Blogs'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="font-normal text-[18px] text-[#121212] transition-colors hover:text-primary leading-none"
              style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <button className="hidden sm:flex items-center bg-primary text-[#f2f2f2] shadow-sm transition-all hover:brightness-105 active:scale-95 overflow-hidden" 
            style={{ 
              height: '52px',
              padding: '8px 8px 8px 32px',
              borderRadius: '30px',
              gap: '12px',
              fontSize: '18px', 
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' 
            }}
          >
            Contact Us
            <span className="w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center text-primary">
              <img src="/arrow-right-up.png" alt="" className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
