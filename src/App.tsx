import { useEffect } from 'react'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { HowWeWork } from './components/HowWeWork'
import { Banner } from './components/Banner'
import { Expertise } from './components/Expertise'
import { Blogs } from './components/Blogs'
import { Footer } from './components/Footer'

function App() {
  useEffect(() => {
    const scale = () => {
      const el = document.querySelector('.landing-page') as HTMLElement
      if (!el) return
      const ratio = window.innerWidth / 1536
      el.style.transform = `scale(${ratio})`
      el.style.height = `${el.scrollHeight * ratio}px`
      document.body.style.height = `${el.scrollHeight * ratio}px`
    }
    scale()
    window.addEventListener('resize', scale)
    return () => window.removeEventListener('resize', scale)
  }, [])

  return (
    <main className="landing-page selection:bg-primary-light selection:text-primary scroll-smooth" style={{width: '1536px', minHeight: '6412px', backgroundColor: '#FFFFFF'}}>
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
