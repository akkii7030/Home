import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { HowWeWork } from './components/HowWeWork'
import { Banner } from './components/Banner'
import { Expertise } from './components/Expertise'
import { Blogs } from './components/Blogs'
import { Footer } from './components/Footer'

function App() {
  const progressRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobileViewport = window.matchMedia('(max-width: 767px)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        },
      )

      const elements = gsap.utils.toArray('.reveal-on-scroll')
      elements.forEach((element) => {
        const isFooterElement = Boolean(element.closest('#footer'))
        const revealStart = isMobileViewport
          ? (isFooterElement ? 'top 98%' : 'top 94%')
          : 'top 86%'

        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: revealStart,
              once: true,
            },
          },
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="landing-page selection:bg-primary-light selection:text-primary scroll-smooth bg-white page-enter">
      <div className="scroll-progress-wrap" aria-hidden="true">
        <div ref={progressRef} className="scroll-progress-bar" />
      </div>
      <Hero />
      <About />
      <HowWeWork />
      <Banner />
      <Expertise />
      <Blogs />
      <Footer />
    </main>
  )
}

export default App
