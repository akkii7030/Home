import { useFetch } from '../hooks/useFetch'
import { loadServices } from '../api'

const fallbackItems = [
  { id: '01', title: 'Integrated Solid Waste Management', desc: 'is a comprehensive approach to managing waste that combines various waste management techniques to minimize environmental impact and promote sustainability.', active: false, image: '/43963 1.png' },
  { id: '02', title: 'Biomass Fuel & Green Energy', desc: 'Biomass fuel is a renewable energy source derived from organic materials such as plants, agricultural and forestry residues, animal waste, and industrial by-products.', active: true, image: '/43963 1.png' },
]

export const HowWeWork = () => {
  const { data, loading, error } = useFetch(loadServices)
  const fallbackServiceImage = '/43963 1.png'

  const workItems = Array.isArray(data) && data.length > 0
    ? data.slice(0, 2).map((s, i) => ({
      id: String(i + 1).padStart(2, '0'),
      title: s.title,
      desc: s.description,
      active: i === 1,
      image: s.image || fallbackServiceImage,
    }))
    : fallbackItems
  const expandedItem = workItems.find((item) => item.active) ?? workItems[0]
  return (
    <section className="py-20 md:py-32 bg-white" id="services">
      <div className="page-container">
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {loading && <p className="text-[#0C9458] text-sm mb-4">Loading services...</p>}
        <p className="text-[#A17339] text-lg font-semibold mb-4">How We Work</p>
        <h2 className="text-4xl md:text-[64px] font-normal leading-[1.1] mb-16 md:mb-24 text-[#101010] max-w-3xl">
          Powering a{' '}
          <span className="relative inline-block font-medium">
            Sustainable
            <svg
              className="absolute -bottom-3 left-0 w-full text-[#0C9458]"
              height="12"
              viewBox="0 0 300 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path d="M2 6C74 2 226 2 298 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          <br />
          Future for India
        </h2>

        <div className="flex flex-col">
          {workItems.map((item) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-t ${item.active ? 'border-[#0C9458]' : 'border-[#d0d0d0]'} items-start md:items-center`}
            >
              <div className="md:col-span-1">
                <span className="text-2xl md:text-[32px] text-[#101010] ${item.active ? 'font-medium' : 'font-normal'}">{item.id}</span>
              </div>
              <div className="md:col-span-4 lg:col-span-5">
                <h3 className="text-xl md:text-[28px] font-bold text-[#101010] leading-snug pr-4">{item.title}</h3>
              </div>
              <div className="md:col-span-6 lg:col-span-5">
                <p className="text-base md:text-[18px] text-[#555] leading-relaxed max-w-xl">{item.desc}</p>
              </div>
              <div className="md:col-span-1 lg:col-span-1 flex md:justify-end">
                <button
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg border transition-colors shrink-0 ${
                    item.active
                      ? 'bg-[#0C9458] text-white border-[#0C9458] shadow-lg'
                      : 'bg-white text-[#101010] border-[#ccc] hover:bg-gray-50'
                  }`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={item.active ? 'rotate-180 transition-transform' : 'transition-transform'}>
                    <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}

          {/* Expanded Content for 02 */}
          <div className="mt-8 mb-16 h-[300px] md:h-[500px] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl relative">
            <img
              src={expandedItem?.image || fallbackServiceImage}
              alt={expandedItem?.title ?? 'Biomass Fuel Image'}
              className="w-full h-full object-cover"
              onError={(event) => {
                event.currentTarget.onerror = null
                event.currentTarget.src = fallbackServiceImage
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-t border-[#d0d0d0] items-start md:items-center">
            <div className="md:col-span-1">
              <span className="text-2xl md:text-[32px] text-[#101010] font-normal">03</span>
            </div>
            <div className="md:col-span-4 lg:col-span-5">
              <h3 className="text-xl md:text-[28px] font-bold text-[#101010] leading-snug pr-4">Bio Gas – CBG Fuel</h3>
            </div>
            <div className="md:col-span-6 lg:col-span-5">
              <p className="text-base md:text-[18px] text-[#555] leading-relaxed max-w-xl">
                Bio gas is a renewable fuel produced from the anaerobic digestion of organic materials such as agricultural waste, animal manure, food waste, and sewage sludge.
              </p>
            </div>
            <div className="md:col-span-1 lg:col-span-1 flex md:justify-end">
              <button className="w-12 h-12 rounded-full flex items-center justify-center text-lg border bg-white text-[#101010] border-[#ccc] hover:bg-gray-50 shrink-0 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
