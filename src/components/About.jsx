export const About = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="about">
      <img
        src="/2151239320 1.png"
        className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:block w-[220px] 2xl:w-[280px] h-[280px] 2xl:h-[360px] object-cover rounded-3xl"
        alt="Resources"
      />
      <img
        src="/142346 1.png"
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-[200px] 2xl:w-[260px] h-[200px] 2xl:h-[260px] object-cover rounded-full"
        alt="Environment"
      />

      <div className="page-container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[#A17339] font-medium text-sm md:text-base mb-3">About Us</p>

          <h2 className="mx-auto text-center mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal leading-[1.05] text-black">
            We see a growing business where the world sees waste
          </h2>

          <svg
            className="mx-auto mb-8 block w-[220px] sm:w-[300px] md:w-[429px]"
            height="10"
            viewBox="0 0 429 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M2 8C94 2 335 2 427 8" stroke="#0C9458" strokeWidth="4" strokeLinecap="round" />
          </svg>

          <p className="text-base sm:text-lg font-bold text-[#101010] mb-5 sm:mb-6 leading-snug">
            We are committed to environmental conservation and climate-resilient economic development.
          </p>

          <p className="text-sm sm:text-[15px] text-[#555] leading-relaxed mb-8 sm:mb-10">
            Explores building an ecosystem for sustainable operations Ours is a leading waste management and labor conglomerate, offering sustainable solutions with innovative technologies and a comprehensive approach to waste treatment.
          </p>

          <button className="inline-flex items-center gap-4 bg-[#0C9458] text-white py-3 px-7 sm:px-8 rounded-full font-semibold text-[15px] sm:text-[16px] mx-auto">
            About Us
            <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0C9458]">
              &#8599;
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
