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
      <div className="page-container">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 xl:gap-12 w-full">
          {blogCards.map((blog, i) => (
            <div className="group flex flex-col cursor-pointer" key={i}>
              <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden mb-6 md:mb-8 bg-gray-100 shadow-lg aspect-[433/361]">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                {/* Precise Cutout Box for Bottom Right Corner */}
                <div className="absolute bottom-0 right-0 w-[84px] h-[84px] md:w-[102px] md:h-[102px] bg-white rounded-tl-[32px] md:rounded-tl-[40px] z-10 flex items-end justify-end">
                  
                  {/* Outer smooth corners matching the inverse border radius using SVGs */}
                  <svg className="absolute bottom-0 right-full w-5 h-5 md:w-8 md:h-8 text-white z-20" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 32V0C32 17.6731 17.6731 32 0 32H32Z" />
                  </svg>
                  <svg className="absolute bottom-full right-0 w-5 h-5 md:w-8 md:h-8 text-white z-20" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 32V0C32 17.6731 17.6731 32 0 32H32Z" />
                  </svg>
                  
                  {/* The Green Button */}
                  <button className="w-[64px] h-[64px] md:w-[76px] md:h-[76px] bg-[#0C9458] text-white text-xl rounded-tl-[24px] md:rounded-tl-[32px] rounded-br-[32px] md:rounded-br-[40px] rounded-tr-[50%] rounded-bl-[50%] flex items-center justify-center transition-transform group-hover:-rotate-12 shadow-md relative z-20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="-rotate-45">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              <h3 className="text-2xl md:text-[26px] font-bold mb-4 leading-[1.2] text-[#111] group-hover:text-[#0C9458] transition-colors">{blog.title}</h3>
              <p className="text-[14px] md:text-[15px] font-medium text-[#888] leading-[1.6] line-clamp-3">{blog.desc}</p>
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
