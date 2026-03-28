const workItems = [
  {
    id: '01',
    title: 'Integrated Solid Waste Management',
    desc: 'is a comprehensive approach to managing waste that combines various waste management techniques to minimize environmental impact and promote sustainability.',
    active: false,
  },
  {
    id: '02',
    title: 'Biomass Fuel & Green Energy',
    desc: 'Biomass fuel is a renewable energy source derived from organic materials such as plants, agricultural and forestry residues, animal waste, and industrial by-products.',
    active: true,
  },

]

export const HowWeWork = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-[1300px] mx-auto px-8">
        <p className="text-[#A17339] text-base font-semibold mb-3">How We Work</p>
        <h2 className="text-[64px] font-normal leading-[1.1] mb-16 text-[#101010]">
          Powering a{' '}
          <span className="relative inline-block">
            Sustainable
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 300 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path d="M2 6C74 2 226 2 298 6" stroke="#0C9458" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          <br />
          Future for India
        </h2>

        <div className="flex flex-col">
          {workItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[80px_1fr_1.6fr_64px] gap-8 py-10 border-t border-[#d0d0d0] items-center"
            >
              <span className="text-2xl text-[#101010] opacity-50 font-normal">{item.id}</span>
              <h3 className="text-[22px] font-bold text-[#101010] leading-snug">{item.title}</h3>
              <p className="text-[15px] text-[#555] leading-relaxed">{item.desc}</p>
              <button
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg border transition-colors ${
                  item.active
                    ? 'bg-[#0C9458] text-white border-[#0C9458]'
                    : 'bg-white text-[#101010] border-[#ccc]'
                }`}
              >
                {item.active ? '↑' : '↓'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 mb-8 h-[500px] rounded-[32px] overflow-hidden">
          <img src="/43963 1.png" alt="Biomass" className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-[80px_1fr_1.6fr_64px] gap-8 py-10 border-t border-[#44b197] items-center">
          <span className="text-2xl text-[#101010] opacity-50 font-normal">03</span>
          <h3 className="text-[22px] font-bold text-[#101010] leading-snug">Bio Gas – CBG Fuel</h3>
          <p className="text-[15px] text-[#555] leading-relaxed">
            Bio gas is a renewable fuel produced from the anaerobic digestion of organic materials such as agricultural waste, animal manure, food waste, and sewage sludge.
          </p>
          <button className="w-12 h-12 rounded-full flex items-center justify-center text-lg border bg-white text-[#101010] border-[#ccc]">
            ↓
          </button>
        </div>
      </div>
    </section>
  )
}
