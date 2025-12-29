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
              En Agencia JanKa nos enfocamos en alcanzar la total satisfacción de nuestros clientes mediante la gestión eficaz de cada trámite.              
            </p>
            <p>
              Realizamos una valoración específica de cada caso sugiriendo el mejor camino para el exitoso resultado del trámite deseado.
            </p>
            <p>
              Con nosotros puede:
            </p>            
            <div className="about-features">
              <div className="about-feature">
                <i className="fas fa-check-circle"></i>
                <span>Obtener certificaciones del registro del estado civil (nacimiento, defunción, matrimonio, soltería, ciudadanía)</span>
              </div>
              <div className="about-feature">
                <i className="fas fa-check-circle"></i>
                <span>Legalizar documentos registrales y académicos (títulos de bachiller y universitarios, certificaciones de notas, planes temáticos, planes de estudio)</span>
              </div>
              <div className="about-feature">
                <i className="fas fa-check-circle"></i>
                <span>Subsanar errores de certificaciones registrales (nacimiento, defunción, matrimonio, soltería, ciudadanía)</span>
              </div>
              <div className="about-feature">
                <i className="fas fa-check-circle"></i>
                <span>Obtener y legalizar antecedentes penales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
