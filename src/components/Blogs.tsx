const blogCards = [
  {
    image: '/43337 2.png',
    title: 'Sustainability Practices in Bioenergy Production',
    desc: 'We have a rich history of delivering sustainable waste management solutions. We have a deep understanding of the challenges faced by our clients',
  },
  {
    image: '/2148642963 1.png',
    title: 'Natural Solutions for Health and Wellness',
    desc: 'We have a rich history of delivering sustainable waste management solutions. We have a deep understanding of the challenges faced by our clients',
  },
  {
    image: '/Blog-HS-Best-Charcoal-Lead 1.png',
    title: 'Modern Technology for Optimal Health',
    desc: 'We have a rich history of delivering sustainable waste management solutions. We have a deep understanding of the challenges faced by our clients',
  },
]

export const Blogs = () => {
  return (
    <section className="py-20 md:py-32 bg-white" id="blogs">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12">
        <p className="text-[#A17339] text-lg font-semibold mb-4">News and Blogs</p>
        <h2 className="text-4xl md:text-[64px] font-normal leading-[1.1] mb-12 md:mb-20 text-[#101010] max-w-3xl">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 xl:gap-12">
          {blogCards.map((blog, i) => (
            <div className="group cursor-pointer flex flex-col" key={i}>
              <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden mb-8 shadow-xl aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <button className="absolute bottom-6 right-6 w-16 h-16 md:w-20 md:h-20 bg-[#0C9458] text-white text-xl rounded-full flex items-center justify-center transition-transform group-hover:rotate-45 shadow-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="-rotate-45">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <h3 className="text-2xl md:text-[28px] font-bold mb-4 leading-tight group-hover:text-[#0C9458] transition-colors">{blog.title}</h3>
              <p className="text-base md:text-[16px] text-[#555] leading-relaxed line-clamp-3">{blog.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 md:mt-24 h-2 md:h-3 bg-[#e9ecef] rounded-full overflow-hidden w-full lg:w-1/2 mx-auto">
          <div className="h-full bg-[#0C9458] w-1/3 rounded-full shadow-sm"></div>
        </div>
      </div>
    </section>
  );
};
