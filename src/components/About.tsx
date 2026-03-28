export const About = () => {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden" id="about">
      {/* Side images */}
      <img
        src="/142346 1.png"
        className="hidden lg:block absolute left-[-5%] xl:left-[-2%] top-1/2 -translate-y-1/2 w-[350px] xl:w-[400px] h-[550px] object-cover rounded-[40px] shadow-xl"
        alt="Resources"
      />
      <img
        src="/2151239320 1.png"
        className="hidden lg:block absolute right-[-5%] xl:right-[-2%] top-1/2 -translate-y-1/2 w-[300px] xl:w-[400px] h-[300px] xl:h-[400px] object-cover rounded-full shadow-xl"
        alt="Environment"
      />

      {/* Center content */}
      <div className="max-w-[800px] mx-auto text-center relative z-10 px-4 md:px-8">
        <p className="text-[#A17339] font-medium text-lg md:text-xl mb-4">About Us</p>

        <h2 className="text-4xl md:text-[56px] font-normal leading-[1.1] text-black mb-4">
          We see a growing business where the world see&rsquo;s waste
        </h2>

        <div className="flex justify-center mb-8 md:mb-12 mt-4">
          <svg
            width="429"
            height="10"
            viewBox="0 0 429 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[200px] md:w-[429px]"
          >
            <path d="M2 8C94 2 335 2 427 8" stroke="#0C9458" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>

        <p className="text-xl md:text-[24px] font-bold text-[#101010] mb-6 md:mb-8 leading-[1.3] max-w-2xl mx-auto">
          We are committed to environmental conservation and climate-resilient economic development.
        </p>

        <p className="text-base md:text-[18px] text-[#555] leading-relaxed mb-10 md:mb-14 max-w-2xl mx-auto">
          Explores building an ecosystem for sustainable operations Ours is a leading waste management and labor conglomerate , offering sustainable solutions with innovative technologies and a comprehensive approach to waste treatment .
        </p>

        <div className="flex justify-center">
          <button className="flex items-center gap-3 bg-[#0C9458] text-white py-3 pl-8 pr-3 w-fit rounded-[30px] font-medium text-lg mx-auto group transition-all hover:brightness-105 active:scale-95 shadow-xl">
            <span>About Us</span>
            <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0C9458] group-hover:-rotate-45 transition-transform overflow-hidden">
                <img src="/arrow-right-up.png" alt="" className="w-3 h-3 object-contain" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
