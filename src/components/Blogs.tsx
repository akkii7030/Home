const blogCards = [
  {
    image: '/43337%202.png',
    title: 'Sustainability Practices in Bioenergy Production',
    desc: 'We have a rich history of delivering sustainable waste management solutions. We have a deep understanding of the challenges faced by our clients',
  },
  {
    image: '/2148642963%201.png',
    title: 'Natural Solutions for Health and Wellness',
    desc: 'We have a rich history of delivering sustainable waste management solutions. We have a deep understanding of the challenges faced by our clients',
  },
  {
    image: '/Blog-HS-Best-Charcoal-Lead%201.png',
    title: 'Modern Technology for Optimal Health',
    desc: 'We have a rich history of delivering sustainable waste management solutions. We have a deep understanding of the challenges faced by our clients',
  },
]

export const Blogs = () => {
  return (
    <section className="py-40 bg-white" id="blogs">
      <div className="container mx-auto px-6">
        <p className="text-accent text-xl font-semibold uppercase tracking-widest mb-6">News and Blogs</p>
        <h2 className="text-6xl md:text-8xl font-bold leading-[0.98] mb-16 lg:mb-24 tracking-tighter text-[#101010]">
          Powering a <span className="underline-green-wavy">Sustainable</span><br />
          Future for India
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {blogCards.map((blog, i) => (
            <div className="group cursor-pointer" key={i}>
              <div className="relative rounded-[40px] overflow-hidden mb-10 shadow-xl aspect-[4/5] object-cover">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <button className="absolute bottom-10 right-10 w-24 h-24 bg-primary text-white text-3xl rounded-full flex items-center justify-center transition-transform group-hover:rotate-45 shadow-2xl">
                  ↗
                </button>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight group-hover:text-primary transition-colors">{blog.title}</h3>
              <p className="text-xl lg:text-2xl text-[#555] leading-relaxed line-clamp-3">{blog.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 h-3 bg-[#e9ecef] rounded-full overflow-hidden w-full lg:w-3/5 mx-auto">
          <div className="h-full bg-primary w-1/3 rounded-full shadow-sm"></div>
        </div>
      </div>
    </section>
  );
};
