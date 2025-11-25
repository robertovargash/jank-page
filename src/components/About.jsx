import React from 'react'
import aboutImage from '/images/about.webp'

const About = () => {
  return (
    <section id="nosotros" className="about-section">
      <div className="container">
        <h2>Nosotros</h2>
        <div className="about-container">
          <div className="about-image">
            <img src={aboutImage} alt="Equipo de Agencia JanKa" />
          </div>
          <div className="about-content">
            <p>
              En Agencia JanKa contamos con más de 15 años de experiencia en consultoría empresarial. 
              Nuestro equipo de profesionales altamente capacitados está comprometido con el éxito de nuestros clientes.
            </p>
            <p>
              Creemos que cada empresa es única, por lo que desarrollamos estrategias personalizadas que se adaptan 
              a las necesidades específicas de cada negocio, garantizando resultados tangibles y sostenibles.
            </p>
            
            <div className="about-features">
              <div className="about-feature">
                <i className="fas fa-check-circle"></i>
                <span>Experiencia comprobada en múltiples industrias</span>
              </div>
              <div className="about-feature">
                <i className="fas fa-check-circle"></i>
                <span>Enfoque personalizado para cada cliente</span>
              </div>
              <div className="about-feature">
                <i className="fas fa-check-circle"></i>
                <span>Resultados medibles y garantizados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
