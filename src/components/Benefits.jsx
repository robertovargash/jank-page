import React from 'react'
import { benefitsData } from '../data/benefits'

const Benefits = () => {
  return (
    <section id="beneficios" className="benefits-section">
      <div className="container">
        <h2>Beneficios</h2>
        <div className="benefits-container">
          {benefitsData.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon">
                <i className={benefit.icon}></i>
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
