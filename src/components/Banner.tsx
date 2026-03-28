export const Banner = () => {
  return (
    <section className="page-container mb-20" id="banner">
      <div className="bg-[#0C9458] text-white rounded-[40px] md:rounded-[60px] overflow-hidden pt-16 md:pt-24 pb-0 px-6 md:px-12 lg:px-16 w-full">
        <div className="w-full">
          {/* Top two columns */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-16 md:mb-24">
            <p className="w-full lg:w-[540px] font-medium text-3xl md:text-[36px] xl:text-[40px] leading-[1.3] text-white">
              At BioEnergy Solutions, we are dedicated to advancing the development.
            </p>
            <p className="w-full lg:w-[490px] text-base md:text-[18px] leading-[1.6] text-white/90">
              We manage waste, labor, and produce biomass fuel. Our torrefied pellets and animal stock come from agriculture waste. We also produce Bio Gas Fuel (CBG) from all biomass. We see biofuel as key for India's energy future.
            </p>
          </div>

          {/* Heading overlapping image */}
          <div className="relative pb-8 md:pb-12 xl:pb-16 mt-8 flex flex-col items-center w-full">
            <h2 className="text-5xl md:text-7xl lg:text-[100px] xl:text-[110px] font-light leading-[0.9] text-white/90 tracking-tight text-center relative z-20 w-full flex justify-center translate-y-8 md:translate-y-12">
              <span>Turning Waste</span>
            </h2>

            <div className="relative rounded-[28px] md:rounded-[40px] overflow-hidden h-[300px] md:h-[450px] xl:h-[550px] w-full shadow-2xl mt-4">
              {/* "into Gold" overlays top of image */}
              <h2 className="absolute top-4 md:top-8 w-full text-center text-5xl md:text-7xl lg:text-[100px] xl:text-[110px] font-serif italic font-bold leading-none z-10 text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex justify-center">
                into Gold
              </h2>
            <img
              src="/48697 1.png"
              alt="Plant Operations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:scale-110 active:scale-95 transition-all shadow-2xl group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="w-8 h-8 md:w-12 md:h-12 ml-1 md:ml-2 group-hover:scale-110 transition-all">
                <path d="M5 3l14 9-14 9V3z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
