# 🏋️ RepWise Fit

> Tu entrenador personal impulsado por inteligencia artificial

RepWise Fit es una aplicación web moderna que genera rutinas de entrenamiento personalizadas usando IA (Google Gemini). Diseñada para ayudarte a alcanzar tus objetivos fitness con planes adaptados a tu nivel, experiencia y disponibilidad.

## ✨ Características

- 🤖 **Generación de rutinas con IA** - Planes personalizados creados por Gemini AI
- 📊 **Análisis personalizado** - Basado en edad, peso, altura, nivel y objetivos
- 📄 **Exportación a PDF** - Descarga tus rutinas en formato profesional
- 🎨 **Interfaz moderna** - Diseñada con React y TailwindCSS
- 📱 **Totalmente responsive** - Funciona en cualquier dispositivo
- ⚡ **Rendimiento optimizado** - Lazy loading y code splitting implementado

## 🚀 Tecnologías

- **Frontend**: React 19, React Router DOM
- **Estilos**: TailwindCSS 4, CSS personalizado
- **IA**: Google Gemini 2.5 Flash
- **PDF**: React PDF Renderer
- **Markdown**: React Markdown con GFM
- **Email**: EmailJS
- **Build**: Vite 7
- **Iconos**: React Icons


## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── NavigateApp.jsx  # Navegación principal
│   ├── FooterComponent.jsx
│   └── pdf.jsx          # Generador de PDF
├── pages/               # Páginas de la aplicación
│   ├── homePage.jsx     # Página de inicio
│   ├── gymExercises.jsx # Generador de rutinas
│   ├── contact.jsx      # Formulario de contacto
│   ├── nosotros.jsx     # Sobre el proyecto
│   ├── admin.jsx        # Panel admin
│   └── errorPage.jsx    # Página 404
├── routes/              # Rutas protegidas
│   └── ProtectedRoutesAdmin.jsx
├── helpers/             # Utilidades
│   └── configIa.js      # Configuración Gemini AI
└── styles/              # Estilos CSS personalizados
```

## 🎯 Funcionalidades Principales

### Generador de Rutinas IA
- Formulario personalizado con múltiples campos
- Generación de rutinas adaptadas al usuario
- Visualización en Markdown con formato profesional
- Descarga en PDF con estilos personalizados

### Contacto
- Formulario de contacto integrado con EmailJS
- Validación de campos
- Diseño moderno y accesible

### Sobre Nosotros
- Información del proyecto
- Misión y visión
- Desarrollado por [Nomos Solutions](https://nomos-solutions.vercel.app/)

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilar para producción
npm run preview  # Vista previa de producción
npm run lint     # Ejecutar ESLint
```


## 📝 Licencia

Todos los derechos reservados © 2026 RepWise Fit

## 👨‍💻 Desarrollado por

[Nomos Solutions](https://nomos-solutions.vercel.app/)


