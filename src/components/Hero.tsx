import { Navbar } from './Navbar';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[100svh] xl:min-h-[950px] flex flex-col justify-start pb-8" id="home">
      <Navbar />
      
      {/* Background Image */}
      <div className="absolute inset-x-0 top-0 h-full z-[-1] overflow-hidden">
        <img src="/32104_4564 1.png" alt="Hero Background" className="w-full h-full object-cover rounded-b-[40px] md:rounded-b-[80px]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent pointer-events-none rounded-b-[40px] md:rounded-b-[80px]"></div>
        <div className="absolute inset-0 bg-white/10 mix-blend-overlay pointer-events-none rounded-b-[40px] md:rounded-b-[80px]"></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-12 lg:px-24 flex-1 flex flex-col justify-center relative mt-32 md:mt-40 z-10 w-full mb-12">
        <div className="max-w-5xl relative z-10 w-full">
          <h1 className="leading-[1.1] tracking-tight">
            <span className="block font-light text-5xl md:text-7xl lg:text-[100px] text-black w-full mb-2 xl:mb-0 pb-1">
              Unlocking Tomorrow's
            </span>
            <span className="block font-medium italic text-5xl md:text-7xl lg:text-[125px] text-black xl:ml-40 pb-2">
              Green Energy
            </span>
          </h1>
          <p className="mt-6 md:mt-8 w-full max-w-sm md:max-w-md text-base md:text-[18px] text-black/90 font-medium">
            Learn how sustainable energy from organic materials can create a greener future.
          </p>
          <div className="mt-8 flex">
            <button className="flex items-center text-white shadow-xl transition-all hover:brightness-105 active:scale-95 group rounded-[30px] pr-2 pl-6 py-2 gap-3 bg-[#0C9458]">
              <span className="text-base md:text-lg font-medium">Let's Started</span>
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0C9458] group-hover:-rotate-45 transition-transform overflow-hidden">
                <img src="/arrow-right-up.png" alt="" className="w-3 h-3 object-contain" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Bottom Info Layer */}
      <div className="container mx-auto px-4 md:px-12 lg:px-24 flex flex-col xl:flex-row items-end xl:items-center justify-between gap-6 z-20 mt-auto">
        {/* Left Card Container */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full xl:w-auto">
          {/* Integrated Solid Waste Card */}
          <div className="flex items-start md:items-center gap-4 border border-white/20 p-4 md:p-6 shadow-2xl rounded-[24px] bg-white/10 backdrop-blur-xl w-full xl:w-[540px]">
            <div className="shrink-0 hidden sm:block">
              <img 
                src="/intrigrated_solid_waste 1.png" 
                alt="Integrated Waste" 
                className="object-cover rounded-xl w-[100px] h-[100px] md:w-[150px] md:h-[130px] border border-black/20" 
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium text-lg md:text-[20px] leading-snug mb-2">
                Integrated Solid Waste<br className="hidden md:block" /> Management
              </h3>
              <p className="text-white/90 text-sm md:text-[14px] leading-snug mb-3 max-w-[300px]">
                comprehensive approach to managing waste that combines various waste management
              </p>
              <a href="#services" className="text-white underline underline-offset-4 text-sm md:text-[16px] font-medium hover:text-[#0C9458] transition-colors">
                Discover Our Services
              </a>
            </div>
          </div>

          {/* 150+ Card */}
          <div className="flex flex-col items-center justify-center border border-white/20 p-6 shadow-2xl rounded-[24px] bg-white/10 backdrop-blur-xl shrink-0 w-full sm:w-[180px] h-[180px] md:h-auto md:min-h-[180px]">
            <span className="text-white font-medium leading-none drop-shadow-lg text-6xl md:text-[64px]">
              150+
            </span>
            <span className="text-white text-sm font-semibold opacity-90 mt-2 uppercase tracking-wide">Customers</span>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-4 shrink-0 pb-4 xl:pb-0">
          <button className="transition-all hover:scale-110 active:scale-95 bg-white/20 backdrop-blur-sm rounded-[14px] w-12 h-12 flex items-center justify-center border border-white/30 text-white shadow-lg group">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:-translate-x-1 transition-transform">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="transition-all hover:scale-110 active:scale-95 bg-[#0C9458] rounded-[14px] w-12 h-12 flex items-center justify-center border border-transparent text-white shadow-lg group">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
