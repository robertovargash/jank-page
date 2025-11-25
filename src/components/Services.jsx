import React from 'react'
import { servicesData } from '../data/services'

const Services = () => {
  return (
    <section id="servicios" className="services-section">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
