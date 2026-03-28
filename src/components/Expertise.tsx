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
    <section className="py-40 bg-white" id="expertise">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-20 lg:gap-32">
        <div className="w-full md:w-[38%]">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 tracking-tighter text-[#101010]">
            Proven Expertise
          </h2>
          <p className="text-2xl md:text-3xl text-[#6c757d] mb-12 lg:mb-16 font-medium">A Legacy of Success</p>
          <button className="flex items-center gap-4 bg-primary text-white py-4 px-10 rounded-full font-bold text-xl transition-transform hover:scale-105 active:scale-95 shadow-lg">
            Contact Us 
            <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-serif">↗</span>
          </button>
        </div>
        
        <div className="w-full md:w-[62%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-14">
          {metrics.map((m, i) => (
            <div className="border-l-2 border-[#e9ecef] pl-10 md:pl-12" key={i}>
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#101010] mb-4 leading-none tracking-tight">{m.value}</h3>
              <h4 className="text-xl lg:text-3xl font-bold mb-6 leading-tight">{m.label}</h4>
              <p className="text-base lg:text-xl text-[#555] leading-relaxed font-medium">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
