export const About = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden" id="about">
      {/* Side images */}
      <img
        src="/2151239320 1.png"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[320px] h-[420px] object-cover rounded-3xl"
        alt="Resources"
      />
      <img
        src="/142346 1.png"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] object-cover rounded-full"
        alt="Environment"
      />

      {/* Center content */}
      <div className="max-w-[700px] mx-auto text-center relative z-10 px-4">
        <p className="text-[#A17339] font-medium text-lg mb-4">About Us</p>

        <h2 className="text-[52px] font-normal leading-tight text-black mb-2">
          We see a growing business where the world see&rsquo;s waste
        </h2>

        <svg
          className="mx-auto mb-10 block"
          width="429"
          height="10"
          viewBox="0 0 429 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 8C94 2 335 2 427 8" stroke="#0C9458" strokeWidth="4" strokeLinecap="round" />
        </svg>

        <p className="text-xl font-bold text-[#101010] mb-8 leading-snug">
          We are committed to environmental conservation and climate-resilient economic development.
        </p>

        <p className="text-base text-[#555] leading-relaxed mb-12">
          Explores building an ecosystem for sustainable operations Ours is a leading waste management and labor conglomerate, offering sustainable solutions with innovative technologies and a comprehensive approach to waste treatment.
        </p>

        <button className="flex items-center gap-4 bg-[#0C9458] text-white py-3 px-10 rounded-full font-semibold text-lg mx-auto group transition-all hover:brightness-105">
          About Us
          <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0C9458]">
            ↗
          </span>
        </button>
      </div>
    </section>
  );
};
