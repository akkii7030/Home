import { Hero } from './components/Hero'
import { About } from './components/About'
import { HowWeWork } from './components/HowWeWork'
import { Banner } from './components/Banner'
import { Expertise } from './components/Expertise'
import { Blogs } from './components/Blogs'
import { Footer } from './components/Footer'

function App() {
  return (
    <main className="landing-page selection:bg-primary-light selection:text-primary scroll-smooth">
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
