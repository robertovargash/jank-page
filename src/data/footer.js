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
    { name: 'Consultoría Empresarial', url: '#' },
    { name: 'Análisis Financiero', url: '#' },
    { name: 'Estrategias Personalizadas', url: '#' }
  ],
  contact: [
    { icon: 'fas fa-map-marker-alt', text: 'Av. Principal 123, Ciudad' },
    { icon: 'fas fa-phone', text: '+1 234 567 890' },
    { icon: 'fas fa-envelope', text: 'agenciajanka@gmail.com' },
    { icon: 'fas fa-clock', text: 'Lun - Vie: 9:00 - 18:00' }
  ],
  get copyright() {
    return `© ${new Date().getFullYear()} Agencia JanKa. Todos los derechos reservados.`
  }
}
