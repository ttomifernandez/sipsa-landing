# SIPSA - Landing Page Profesional

Landing page moderna de SIPSA, una prepaga ficticia de Córdoba, construida con Next.js, React, TypeScript y Tailwind CSS v4.

## ✨ Características

- **Diseño Responsivo:** Totalmente adaptado para mobile, tablet y desktop
- **Gradientes Profesionales:** Tema oscuro con gradientes verdes y azules (tema salud/confianza)
- **Secciones Completas:**
  - Header fijo con navegación
  - Hero section con call-to-action
  - Sobre Nosotros con información creíble
  - 3 Planes ficticios pero realistas (Básico, Estándar, Premium)
  - Formulario de contacto con validación
  - Footer informativo

- **Funcionalidades:**
  - Formulario que captura Nombre, Email, Teléfono y Plan Seleccionado
  - Al enviar, redirige automáticamente a WhatsApp (número: +54 9 351 5929043)
  - Mensaje automático preformulado: "Hola, me interesa el plan [PLAN] de SIPSA"
  - Almacenamiento de datos en localStorage
  - Pantalla de confirmación después del envío

## 🛠️ Stack Tecnológico

- **Next.js 14+** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Vercel** - Hosting

## 📁 Estructura del Proyecto

```
sipsa-landing/
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout global
│   └── globals.css       # Estilos globales
├── components/
│   ├── Header.tsx        # Encabezado con navegación
│   ├── Hero.tsx          # Sección hero
│   ├── About.tsx         # Sección sobre nosotros
│   ├── Plans.tsx         # Grid de planes
│   ├── ContactForm.tsx   # Formulario de contacto
│   ├── ContactFormContent.tsx  # Contenido del formulario
│   └── Footer.tsx        # Pie de página
├── public/               # Archivos estáticos
├── tailwind.config.ts    # Configuración de Tailwind
├── next.config.ts        # Configuración de Next.js
└── package.json          # Dependencias

```

## 🚀 Instalación y Desarrollo

### Requisitos Previos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/ttomifernandez/sipsa-landing.git
cd sipsa-landing

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para Producción

```bash
npm run build
npm run start
```

## 📱 Planes Incluidos

### Plan Básico - $1.899/mes
- Cobertura médica general
- 250+ profesionales
- Telemedicina
- Medicamentos con descuento
- Estudios de laboratorio

### Plan Estándar - $3.499/mes ⭐ (Más Popular)
- Todo Plan Básico +
- 400+ profesionales
- Odontología
- Kinesiología
- Oftalmología
- Atención prioritaria

### Plan Premium - $5.299/mes
- Todo Plan Estándar +
- 500+ profesionales
- Psicología/Psiquiatría
- Internación premium
- Cirugías mayores
- Ambulancia 24/7
- Atención VIP

## 🌐 Deploy en Vercel

El proyecto está deployado en Vercel en: **https://sipsa-landing.vercel.app**

Para hacer deploy:

```bash
vercel --prod --yes
```

## 📝 Variables de Entorno

No se requieren variables de entorno especiales. El número de WhatsApp está hardcodeado como `3515929043`.

## 🎨 Personalización

### Cambiar número de WhatsApp
Edita `components/ContactFormContent.tsx` línea ~54:
```typescript
`https://wa.me/5493515929043?text=${message}`
```

### Cambiar colores/tema
Los colores están definidos en Tailwind. Edita las clases de gradiente en los componentes o `tailwind.config.ts`.

### Editar planes
Los planes están en `components/Plans.tsx`. Modifica el array `plans[]` con tus propios planes.

## 📊 Formulario y Datos

El formulario captura:
- ✅ Nombre completo
- ✅ Email
- ✅ Teléfono
- ✅ Plan seleccionado

Los datos se guardan en `localStorage` antes de redirigir a WhatsApp.

## 🔐 Seguridad

- Las redirecciones a WhatsApp son client-side
- Sin backend expuesto
- Sin almacenamiento de datos en servidores
- Validación básica de formulario HTML5

## 📄 Licencia

Este proyecto es de código abierto bajo licencia MIT.

## 👨‍💻 Desarrollo

Para reportar bugs o sugerir mejoras, abre un issue en GitHub.

---

**Hecho con ❤️ para SIPSA - Prepaga Córdoba**
