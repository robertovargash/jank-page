import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      closeMenu()
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/images/Logo Agencia JanK2.png" alt="Logo Agencia JanKa" />
          <span>Agencia JanKa</span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#inicio" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('inicio') }}>Inicio</a></li>
          <li><a href="#servicios" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('servicios') }}>Servicios</a></li>
          <li><a href="#nosotros" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros') }}>Nosotros</a></li>
          <li><a href="#contacto" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contacto') }}>Contacto</a></li>
        </ul>
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
