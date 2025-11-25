// Archivo de ejemplo de configuración
// Copia este archivo y modifícalo según tus necesidades

export const appConfig = {
  // Información de la empresa
  company: {
    name: 'Agencia JanKa',
    description: 'Tu socio estratégico para el crecimiento empresarial.',
    logo: '/images/logo.png' // Ruta a tu logo
  },

  // Información de contacto
  contact: {
    phone: '+1 234 567 890',
    email: 'agenciajanka@gmail.com',
    address: 'Av. Principal 123, Ciudad',
    whatsapp: '1234567890', // Número sin + ni espacios
    schedule: 'Lun - Vie: 9:00 - 18:00'
  },

  // Redes sociales
  socialMedia: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    instagram: '#'
  },

  // Colores del tema (puedes modificar estos en estilo.css también)
  theme: {
    primary: '#517257',
    secondary: '#415d48',
    accent: '#2d3d31'
  }
}

// Ejemplo de cómo usar la configuración en un componente:
// import { appConfig } from '../config/example'
// 
// function MyComponent() {
//   return <h1>{appConfig.company.name}</h1>
// }
