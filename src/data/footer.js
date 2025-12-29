export const footerData = {
  company: {
    name: 'Agencia JanKa',
    description: 'Tu agencia de confianza para la realización de trámites personales lejos de casa.',
  },
  socialLinks: [
    { icon: 'fab fa-facebook-f', url: '#' },
    { icon: 'fab fa-twitter', url: '#' },
    { icon: 'fab fa-linkedin-in', url: '#' },
    { icon: 'fab fa-instagram', url: '#' }
  ],
  quickLinks: [
    { text: 'Inicio', url: '#inicio' },
    { text: 'Nosotros', url: '#nosotros' },
    { text: 'Servicios', url: '#servicios' },
    { text: 'Contacto', url: '#contacto' }
  ],
  services: [
    { name: 'Obtención de certificados registrales', url: '#' },
    { name: 'Subsanación de errores', url: '#' },
    { name: 'Legalización de documentos', url: '#' },
    { name: 'Obtención y legalización de antecedentes penales', url: '#' }
  ],
  contact: [
    { icon: 'fas fa-map-marker-alt', text: 'Av. Principal 123, Ciudad' },
    { icon: 'fas fa-phone', text: '+34 623 37 97 78' },
    { icon: 'fas fa-envelope', text: 'agenciajanka@gmail.com' },
  ],
  get copyright() {
    return `© ${new Date().getFullYear()} Agencia JanKa. Todos los derechos reservados.`
  }
}
