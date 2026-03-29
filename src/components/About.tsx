export const About = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden" id="about">
      {/* Left image */}
      <img
        src="/2151239320 1.png"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] h-[360px] object-cover rounded-3xl"
        alt="Resources"
      />
      {/* Right image */}
      <img
        src="/142346 1.png"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[260px] h-[260px] object-cover rounded-full"
        alt="Environment"
      />

      {/* Center content */}
      <div className="max-w-[800px] mx-auto text-center relative z-10 px-4">
        <p className="text-[#A17339] font-medium text-[16px] mb-3">About Us</p>

        <h2 className="mx-auto text-center mb-2" style={{width: '767px', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: '56px', lineHeight: '100%', letterSpacing: '0%', color: '#000000'}}>
          We see a growing business where the world see&rsquo;s waste
        </h2>

        <svg
          className="mx-auto mb-8 block"
          width="429"
          height="10"
          viewBox="0 0 429 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 8C94 2 335 2 427 8" stroke="#0C9458" strokeWidth="4" strokeLinecap="round" />
        </svg>

        <p className="text-[18px] font-bold text-[#101010] mb-6 leading-snug">
          We are committed to environmental conservation and climate-resilient economic development.
        </p>

        <p className="text-[15px] text-[#555] leading-relaxed mb-10">
          Explores building an ecosystem for sustainable operations Ours is a leading waste management and labor conglomerate, offering sustainable solutions with innovative technologies and a comprehensive approach to waste treatment.
        </p>

        <button className="flex items-center gap-4 bg-[#0C9458] text-white py-3 px-8 rounded-full font-semibold text-[16px] mx-auto">
          About Us
          <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0C9458]">
            ↗
          </span>
        </button>
      </div>
    </section>
  );
};
