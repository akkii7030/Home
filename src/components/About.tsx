export const About = () => {
  return (
    <section className="py-24 md:py-32 bg-white" id="about">
      <div className="page-container w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 h-full">
        
        {/* Left Side Image (Wood Pellets) */}
        <div className="hidden lg:block w-[280px] xl:w-[320px] shrink-0">
          <img
            src="/2151239320 1.png"
            className="w-full h-[400px] xl:h-[450px] object-cover rounded-[32px] shadow-xl"
            alt="Resources"
          />
        </div>

        {/* Center content */}
        <div className="max-w-[700px] mx-auto text-center flex flex-col items-center">
          <p className="text-[#A17339] font-medium text-lg md:text-xl mb-6">About Us</p>

          <h2 className="text-4xl md:text-[56px] font-normal leading-[1.15] text-[#101010] mb-12 flex flex-col items-center">
            <span>We see a growing business</span>
            <span className="relative inline-block mt-2">
              where the world see&rsquo;s waste
              <svg
                width="318"
                height="10"
                viewBox="0 0 318 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[85%] text-[#0C9458]"
              >
                <path d="M2 8C70 2 248 2 316 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="text-xl md:text-[22px] font-bold text-[#101010] mb-8 leading-[1.4] max-w-[600px] mx-auto">
            We are committed to environmental conservation and climate-resilient economic development.
          </p>

          <p className="text-base md:text-[17px] text-[#555] leading-[1.6] mb-12 max-w-[600px] mx-auto">
            Explores building an ecosystem for sustainable operations Ours is a leading waste management and labor conglomerate , offering sustainable solutions with innovative technologies and a comprehensive approach to waste treatment .
          </p>

          <button className="flex items-center gap-4 bg-[#0C9458] text-white py-3 pl-8 pr-3 w-fit rounded-full font-medium text-lg mx-auto group transition-all hover:scale-105 active:scale-95 shadow-[0_8px_20px_rgba(12,148,88,0.3)]">
            <span>About Us</span>
            <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0C9458] group-hover:-rotate-45 transition-transform">
                <img src="/arrow-right-up.png" alt="" className="w-3 h-3 object-contain" />
            </span>
          </button>
        </div>

        {/* Right Side Image (Green Silo) */}
        <div className="hidden lg:block w-[300px] xl:w-[350px] shrink-0">
          <img
            src="/142346 1.png"
            className="w-full aspect-square object-cover rounded-full shadow-xl"
            alt="Environment"
          />
        </div>
        
      </div>
    </section>
  );
};
