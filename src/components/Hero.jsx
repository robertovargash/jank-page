import React, { useState } from 'react'

const Hero = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      alert(`¡Gracias por suscribirte con ${email}!`)
      setEmail('')
    }
  }

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Consultoría de Gestión de documentos</h1>
          <p>
            Tu agencia de confianza para la realización de trámites personales lejos de casa.
          </p>

          <div className="features">
            <div className="feature">
              <i className="fas fa-file-alt"></i>
              <span>Obtención de certificaciones registrales</span>
            </div>
            <div className="feature">
              <i className="fas fa-thumbs-up"></i>
              <span>Subsanación de errores</span>
            </div>
            <div className="feature">
              <i className="fas fa-graduation-cap"></i>
              <span>Legalización de documentos</span>
            </div>
          </div>

          <form className="subscribe-box" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Suscribirme</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Hero
