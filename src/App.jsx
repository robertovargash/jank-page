import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
//import Benefits from './components/Benefits'
//import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <About />      
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
