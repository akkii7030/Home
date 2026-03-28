export const Banner = () => {
  return (
    <section className="bg-[#0C9458] text-white mx-6 overflow-hidden" style={{width: '1536px', height: '1011px', borderBottomRightRadius: '45px', borderBottomLeftRadius: '45px'}}>
      <div className="px-10">
        {/* Top two columns */}
        <div className="flex justify-between gap-12 mb-6">
          <p className="w-[547px] font-medium text-[30px] leading-[120%] tracking-[0%] text-white" style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}>
            At BioEnergy Solutions, we are dedicated to advancing the development.
          </p>
          <p className="text-[16px] font-normal leading-[100%] tracking-[0%] text-white w-[491px]" style={{fontFamily: '"Inter", sans-serif'}}>
            We manage waste, labor, and produce biomass fuel. Our torrefied pellets and animal stock come from agriculture waste. We also produce Bio Gas Fuel (CBG) from all biomass. We see biofuel as key for India's energy future.
          </p>
        </div>

        {/* Heading overlapping image */}
        <div className="relative">
          <h2 className="text-[64px] font-light leading-none mb-0 relative z-10">
            Turning Waste
          </h2>

          <div className="relative rounded-[28px] overflow-hidden h-[380px]">
            {/* "into Gold" overlays top of image */}
            <h2 className="absolute top-0 left-6 text-[64px] font-serif italic font-bold leading-none z-10 -translate-y-1">
              into Gold
            </h2>
            <img
              src="/48697 1.png"
              alt="Plant Operations"
              className="w-full h-full object-cover"
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/40 rounded-full flex items-center justify-center">
              <img src="/Polygon 3.png" alt="Play" className="w-5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
