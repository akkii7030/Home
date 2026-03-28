const metrics = [
  {
    value: '25+',
    label: 'A Legacy of Success',
    desc: 'We have a rich history of delivering sustainable waste management solutions. We have a deep understanding of the challenges faced by our clients'
  },
  {
    value: '2+',
    label: 'Biogas fuel Plants',
    desc: 'We have implemented over 2 biogas plants across the state, demonstrating our expertise in biogas technology and its potential to generate renewable energy.'
  },
  {
    value: '3+',
    label: 'Bio Mass Fuel Plants',
    desc: 'We have 3 Bio Mass Fuel plants where we do Maize - Kernels trading , Making of Torrefied Pellets Corn Cob Super Fine powder for Animal feed & Biodegradable Hookah Charcoal'
  }
]

export const Expertise = () => {
  return (
    <section className="py-20 md:py-32 bg-white" id="expertise">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left side Titles */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center items-start">
          <h2 className="text-5xl md:text-[64px] lg:text-[72px] font-normal leading-[1] mb-4 text-[#101010]">
            Proven Expertise
          </h2>
          <p className="text-xl md:text-[24px] text-[#555] mb-10 font-normal">A Legacy of Success</p>
          <button className="flex items-center gap-3 bg-[#0C9458] text-white py-3 pl-8 pr-3 w-fit rounded-[30px] font-medium text-lg group transition-all hover:brightness-105 active:scale-95 shadow-xl">
            <span>Contact Us</span>
            <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0C9458] group-hover:-rotate-45 transition-transform overflow-hidden">
                <img src="/arrow-right-up.png" alt="" className="w-3 h-3 object-contain" />
            </span>
          </button>
        </div>
        
        {/* Right side Metrics Grid */}
        <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-x-12 md:gap-y-16">
          {metrics.map((m, i) => (
            <div className="flex flex-col border-l border-[#d0d0d0] pl-6 md:pl-8" key={i}>
              <h3 className="text-5xl md:text-[56px] font-normal text-[#101010] mb-3 leading-none tracking-tight">{m.value}</h3>
              <h4 className="text-lg md:text-[20px] font-bold mb-4 leading-snug text-[#101010]">{m.label}</h4>
              <p className="text-sm md:text-[15px] text-[#555] leading-relaxed mb-auto pr-4">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
