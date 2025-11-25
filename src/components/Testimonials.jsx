import React, { useState, useEffect } from 'react'
import { testimonialsData } from '../data/testimonials'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonios" className="testimonials-section">
      <div className="container">
        <h2>Testimonios</h2>
        <div className="testimonials-container">
          <div className="testimonial-slider">
            <div 
              className="testimonial-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-slide">
                  <div className="testimonial-content">
                    <p>{testimonial.comentario}</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      <img src={testimonial.avatar} alt={testimonial.nombre} />
                    </div>
                    <div className="testimonial-info">
                      <h4>{testimonial.nombre}</h4>
                      <p>{testimonial.cargo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="testimonial-nav">
            {testimonialsData.map((_, index) => (
              <div
                key={index}
                className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
