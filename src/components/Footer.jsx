import React from 'react'
import { footerData } from '../data/footer'

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-container">
          <div className="footer-col">
            <h3>{footerData.company.name}</h3>
            <p>{footerData.company.description}</p>            
          </div>
          <div className="footer-col">
            <h3>Enlaces Rápidos</h3>
            <ul className="footer-links">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h3>Servicios</h3>
            <ul className="footer-links">
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <a href={service.url}>{service.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contacto</h3>
            <ul className="footer-links">
              {footerData.contact.map((item, index) => (
                <li key={index}>
                  <i className={item.icon}></i> {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
