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
          <h1>Impulsa tu Negocio con Asesoría Profesional</h1>
          <p>
            Ayudamos a emprendedores y empresas a tomar decisiones estratégicas,
            optimizar procesos y mejorar sus resultados con planes claros y efectivos.
          </p>

          <div className="features">
            <div className="feature">
              <i className="fas fa-chart-line"></i>
              <span>Consultoría Empresarial</span>
            </div>
            <div className="feature">
              <i className="fas fa-file-invoice-dollar"></i>
              <span>Análisis Financiero</span>
            </div>
            <div className="feature">
              <i className="fas fa-lightbulb"></i>
              <span>Estrategias Personalizadas</span>
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
