import React from 'react'

const WhatsAppButton = () => {
  const phoneNumber = '+34623379778'
  const message = encodeURIComponent('Hola, me interesan sus servicios de asesoría')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  )
}

export default WhatsAppButton
