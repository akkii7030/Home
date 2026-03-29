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
    <section
      className="bg-white py-20"
      style={{ borderRadius: '45px 45px 0 0', marginTop: '-45px', position: 'relative', zIndex: 10 }}
      id="expertise"
    >
      <div className="flex gap-16 w-full px-16">

        {/* Left */}
        <div className="w-[38%] flex flex-col justify-center items-start">
          <h2 style={{ fontSize: '56px', fontWeight: 400, lineHeight: '100%', color: '#101010', marginBottom: '12px' }}>
            Proven Expertise
          </h2>
          <p style={{ fontSize: '24px', fontWeight: 400, color: '#555', marginBottom: '40px' }}>
            A Legacy of Success
          </p>
          <button className="flex items-center gap-3 bg-[#0C9458] text-white rounded-full font-medium group transition-all hover:brightness-105"
            style={{ padding: '10px 12px 10px 28px', fontSize: '16px' }}>
            <span>Contact Us</span>
            <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0C9458]">
              <img src="/arrow-right-up.png" alt="" className="w-3 h-3 object-contain" />
            </span>
          </button>
        </div>

        {/* Right metrics */}
        <div className="flex-1 grid grid-cols-3 gap-0">
          {metrics.map((m, i) => (
            <div className="flex flex-col border-l border-[#d0d0d0] pl-8" key={i}>
              <h3 style={{ fontSize: '56px', fontWeight: 400, color: '#101010', marginBottom: '12px', lineHeight: 1 }}>
                {m.value}
              </h3>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#101010', marginBottom: '12px', lineHeight: 1.2 }}>
                {m.label}
              </h4>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
