# AsesoriaPlus - Plantilla React SaaS

Plantilla React moderna y modular basada en el diseño original de AsesoriaPlus, optimizada para SaaS.

## 🚀 Características

- ✅ Componentes modulares y reutilizables
- ✅ Diseño responsive y moderno
- ✅ Fácil de personalizar y extender
- ✅ Estructura organizada por componentes
- ✅ Datos separados en archivos de configuración
- ✅ Optimizado para producción

## 📁 Estructura del Proyecto

```
react/
├── public/
│   └── images/          # Imágenes estáticas
├── src/
│   ├── components/      # Componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Benefits.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── data/            # Datos de configuración
│   │   ├── services.js
│   │   ├── benefits.js
│   │   ├── testimonials.js
│   │   └── footer.js
│   ├── styles/          # Estilos CSS
│   │   └── estilo.css
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Instalación

1. **Copia las imágenes** (requerido antes de iniciar):
   - Ejecuta el script PowerShell desde el directorio raíz:
   ```powershell
   .\react\copy-images.ps1
   ```
   - O copia manualmente las imágenes desde `AsesoriaPlus - Consultoría Profesional_files/` a `react/public/images/`:
     - about.webp
     - contact.webp
     - maria.png
     - roberto.png
     - laura.png
     - javier.png

2. Instala las dependencias:
```bash
cd react
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Construye para producción:
```bash
npm run build
```

## 📝 Personalización

### Modificar Contenido

Los datos están separados en archivos dentro de `src/data/`:

- **Servicios**: `src/data/services.js`
- **Beneficios**: `src/data/benefits.js`
- **Testimonios**: `src/data/testimonials.js`
- **Footer**: `src/data/footer.js`

### Agregar Nuevos Componentes

1. Crea un nuevo componente en `src/components/`
2. Importa y úsalo en `App.jsx`

Ejemplo:
```jsx
import NuevoComponente from './components/NuevoComponente'

function App() {
  return (
    <div className="App">
      {/* ... otros componentes ... */}
      <NuevoComponente />
    </div>
  )
}
```

### Modificar Estilos

Los estilos están en `src/styles/estilo.css`. Puedes modificar las variables CSS en `:root` para cambiar colores, espaciados, etc.

## 🎨 Componentes Disponibles

- **Navbar**: Barra de navegación con menú responsive
- **Hero**: Sección principal con formulario de suscripción
- **About**: Sección "Nosotros" con imagen y características
- **Services**: Grid de servicios con iconos
- **Benefits**: Tarjetas de beneficios con efectos hover
- **Testimonials**: Slider de testimonios automático
- **Contact**: Formulario de contacto con validación
- **Footer**: Footer con enlaces y redes sociales
- **WhatsAppButton**: Botón flotante de WhatsApp

## 📱 Responsive

La plantilla está completamente optimizada para dispositivos móviles, tablets y desktop.

## 🔧 Tecnologías Utilizadas

- React 18
- Vite
- Font Awesome (CDN)
- CSS3 con Variables CSS

## 📄 Licencia

Este proyecto es una plantilla libre para uso en proyectos SaaS.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de mejorar esta plantilla.

