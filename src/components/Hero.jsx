import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Navbar } from './Navbar'
import { useFetch } from '../hooks/useFetch'
import { loadBanners } from '../api'

export const Hero = () => {
  const titleTopWords = ["Unlocking", "Tomorrow's"]
  const titleBottomWords = ['Green', 'Energy']
  const { data: banners, loading, error } = useFetch(loadBanners)
  const banner = banners?.[0]
  const fallbackHeroImage = '/32104_4564 1.png'
  const heroRef = useRef(null)
  const bgRef = useRef(null)
  const titleTopWordRefs = useRef([])
  const titleBottomWordRefs = useRef([])
  const paragraphRef = useRef(null)
  const ctaRef = useRef(null)
  const mainCardRef = useRef(null)
  const counterCardRef = useRef(null)
  const arrowsRef = useRef(null)
  const [customersCount, setCustomersCount] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setCustomersCount(150)
      return
    }

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro
        .from(titleTopWordRefs.current, { yPercent: 120, autoAlpha: 0, duration: 0.75, stagger: 0.07 })
        .from(titleBottomWordRefs.current, { yPercent: 120, autoAlpha: 0, duration: 0.75, stagger: 0.07 }, '-=0.45')
        .from(paragraphRef.current, { y: 28, autoAlpha: 0, duration: 0.6 }, '-=0.45')
        .from(ctaRef.current, { y: 24, autoAlpha: 0, scale: 0.95, duration: 0.5 }, '-=0.3')
        .from([mainCardRef.current, counterCardRef.current], { y: -80, autoAlpha: 0, duration: 0.95, stagger: 0.14, ease: 'back.out(1.4)' }, '-=0.08')
        .from(arrowsRef.current, { y: 24, autoAlpha: 0, duration: 0.5 }, '-=0.45')

      gsap.fromTo(bgRef.current, { xPercent: 18, scale: 1.06, autoAlpha: 0.75 }, { xPercent: 0, scale: 1, autoAlpha: 1, duration: 1.2, ease: 'power2.out' })

      gsap.to(bgRef.current, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      const countState = { value: 0 }
      ScrollTrigger.create({
        trigger: counterCardRef.current,
        start: 'top 82%',
        once: true,
        onEnter: () => {
          gsap.to(countState, {
            value: 150,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: () => setCustomersCount(Math.floor(countState.value)),
          })
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleMagneticMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    event.currentTarget.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px)`
  }

  const handleMagneticLeave = (event) => {
    event.currentTarget.style.transform = 'translate(0px, 0px)'
  }

  const handleTiltMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    const rotateY = (x - 0.5) * 7
    const rotateX = (0.5 - y) * 7
    event.currentTarget.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`
  }

  const handleTiltLeave = (event) => {
    event.currentTarget.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)'
  }

  const setTopWordRef = (element, index) => {
    titleTopWordRefs.current[index] = element
  }

  const setBottomWordRef = (element, index) => {
    titleBottomWordRefs.current[index] = element
  }

  return (
    <section className="relative w-full overflow-hidden bg-white" id="home" ref={heroRef}>
      <Navbar />
      
      {loading && <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/60"><span className="text-[#0C9458] text-lg">Loading...</span></div>}
      {error && <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm">{error}</div>}
      
      <div className="absolute inset-0 z-0" ref={bgRef}>
        <img 
          src={banner?.image || fallbackHeroImage} 
          alt={banner?.title ?? 'Hero Background'} 
          className="w-full h-full object-cover object-top hero-bg-slide"
          style={{ objectPosition: 'center 15%' }}
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = fallbackHeroImage
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
      </div>
      
      <div className="relative z-10 w-full pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 min-h-[760px] md:min-h-[860px] lg:min-h-[980px] flex flex-col justify-between">
        
        {/* Main Context Wrap */}
        <div className="page-container">
          <div className="w-full relative">
            <h1 className="leading-[1] tracking-tight mb-8">
              <span className="block font-normal text-[40px] sm:text-6xl md:text-[80px] lg:text-[100px] text-black w-full">
                {titleTopWords.map((word, index) => (
                  <span key={word} className="hero-word-wrap">
                    <span ref={(element) => setTopWordRef(element, index)} className="hero-word">
                      {word}
                    </span>
                  </span>
                ))}
              </span>
              <span className="block font-medium italic text-[42px] sm:text-6xl md:text-[90px] lg:text-[110px] text-black ml-0 md:ml-20 lg:ml-40 mt-2">
                {titleBottomWords.map((word, index) => (
                  <span key={word} className="hero-word-wrap">
                    <span ref={(element) => setBottomWordRef(element, index)} className="hero-word">
                      {word}
                    </span>
                  </span>
                ))}
              </span>
            </h1>
            
            <p ref={paragraphRef} className="w-full max-w-[360px] text-[16px] text-black/90 font-medium leading-[1.4] mb-8">
              Learn how sustainable energy from organic materials can create a greener future.
            </p>
            
            <button
              ref={ctaRef}
              className="flex items-center text-white shadow-[0_8px_20px_rgba(12,148,88,0.3)] transition-all hover:scale-105 active:scale-95 rounded-full pl-6 pr-2 py-2 gap-4 bg-[#0C9458] group interactive-button"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
            >
              <span className="text-[17px] font-medium tracking-wide">Let's Started</span>
              <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0C9458] group-hover:-rotate-45 transition-transform">
                <img src="/arrow-right-up.png" alt="" className="w-4 h-4 object-contain" />
              </span>
            </button>
          </div>
        </div>

        {/* Floating Bottom Info Layer */}
        <div className="page-container mt-16 sm:mt-24 lg:mt-32 z-20">
          <div className="flex flex-col xl:flex-row items-end xl:items-center justify-between gap-6 w-full">
            
            {/* Left Box Container */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full xl:w-auto">
              <div 
                ref={mainCardRef}
                className="flex items-center gap-6 border border-white/30 p-5 md:p-6 shadow-2xl rounded-[24px] backdrop-blur-[20px] w-full xl:w-[540px] interactive-tilt"
                style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))' }}
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
              >
                <div className="shrink-0 hidden sm:block">
                  <img 
                    src="/intrigrated_solid_waste 1.png" 
                    alt="Integrated Waste" 
                    className="object-cover rounded-2xl w-[120px] h-[120px] md:w-[150px] md:h-[130px]" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium text-[20px] leading-[1.2] mb-3">
                    Integrated Solid Waste<br />Management
                  </h3>
                  <p className="text-white/80 text-[13px] leading-[1.4] mb-3 max-w-[280px]">
                    comprehensive approach to managing waste that combines various waste management
                  </p>
                  <a href="#services" className="text-white underline underline-offset-4 text-[14px] font-medium hover:text-gray-200 transition-colors">
                    Discover Our Services
                  </a>
                </div>
              </div>

              <div 
                ref={counterCardRef}
                className="flex flex-col items-center justify-center border border-white/30 p-6 shadow-2xl rounded-[24px] backdrop-blur-[20px] shrink-0 w-full sm:w-[220px] min-h-[178px] interactive-tilt"
                style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))' }}
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
              >
                <span className="text-white font-medium drop-shadow-lg text-[64px] leading-none mb-1">
                  {customersCount}+
                </span>
                <span className="text-white text-[15px] font-bold uppercase tracking-widest opacity-90">Customers</span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div ref={arrowsRef} className="flex items-center gap-4 shrink-0 mt-8 xl:mt-0">
              <button className="transition-all hover:-translate-x-1 active:scale-95 bg-white/20 backdrop-blur-md rounded-full w-[50px] h-[50px] flex items-center justify-center text-white border border-white/40 shadow-xl group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="transition-all hover:translate-x-1 active:scale-95 bg-[#0C9458] rounded-full w-[50px] h-[50px] flex items-center justify-center text-white border border-transparent shadow-xl group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
