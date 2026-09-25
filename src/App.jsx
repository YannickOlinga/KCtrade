import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Products from './components/Products'
import HSE from './components/HSE'
import Careers from './components/Careers'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Products />
        <HSE />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
