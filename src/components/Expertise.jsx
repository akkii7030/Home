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
    desc: 'We have 3 Bio Mass Fuel plants where we do Maize - Kernels trading, making torrefied pellets, corn cob super fine powder for animal feed, and biodegradable hookah charcoal.'
  }
]

export const Expertise = () => {
  return (
    <section
      className="-mt-6 md:-mt-10 relative z-10 reveal-on-scroll"
      id="expertise"
    >
      <div className="page-container">
        <div className="bg-white rounded-t-[32px] md:rounded-t-[45px] pt-10 md:pt-12 lg:pt-14 pb-14 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-4 flex flex-col justify-center items-start reveal-on-scroll reveal-delay-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal leading-[1.05] text-[#101010] mb-3">
                Proven Expertise
              </h2>
              <p className="text-lg md:text-2xl font-normal text-[#555] mb-8 lg:mb-10">
                A Legacy of Success
              </p>
              <button className="flex items-center gap-3 bg-[#0C9458] text-white rounded-full font-medium group transition-all hover:brightness-105 px-5 py-2.5 text-[15px] md:text-base interactive-button">
                <span>Contact Us</span>
                <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0C9458]">
                  <img src="/arrow-right-up.png" alt="" className="w-3 h-3 object-contain" />
                </span>
              </button>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-0">
              {metrics.map((m, i) => (
                <div className={`flex flex-col lg:border-l border-[#d0d0d0] lg:pl-8 reveal-on-scroll ${i === 0 ? 'reveal-delay-1' : i === 1 ? 'reveal-delay-2' : 'reveal-delay-3'}`} key={i}>
                  <h3 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-[#101010] mb-3 leading-none">
                    {m.value}
                  </h3>
                  <h4 className="text-[17px] md:text-lg font-bold text-[#101010] mb-3 leading-[1.2]">
                    {m.label}
                  </h4>
                  <p className="text-sm text-[#666] leading-[1.6]">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
