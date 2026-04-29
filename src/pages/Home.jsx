import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import CTA from '../components/sections/CTA'
import Hero from '../components/sections/Hero'
import Process from '../components/sections/Process'
import Results from '../components/sections/Results'
import Services from '../components/sections/Services'
import Testimonials from '../components/sections/Testimonials'
import WhyChoose from '../components/sections/WhyChoose'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Process />
        <Results />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default Home
