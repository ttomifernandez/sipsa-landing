# 🎨 Guía de Personalización - SIPSA Landing Page

## Cómo Adaptar el Proyecto a Tu Prepaga

### 1. 📝 Cambiar Nombre de la Empresa

**Archivo: `components/Header.tsx`** (línea ~7)
```tsx
<h1 className="text-xl font-bold text-white">SIPSA</h1>
<p className="text-xs text-green-400">Prepaga Córdoba</p>
```

**Archivo: `components/Hero.tsx`** (línea ~18)
```tsx
<h1 className="text-5xl md:text-6xl font-bold text-white">
  Tu Salud es Nuestra{' '}
  <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
    Prioridad
  </span>
</h1>
```

**Archivo: `components/About.tsx`** (línea ~6)
```tsx
<h2 className="text-4xl font-bold text-white mb-4">Sobre SIPSA</h2>
```

**Archivo: `app/layout.tsx`** (línea ~12)
```tsx
export const metadata: Metadata = {
  title: "SIPSA - Prepaga de Salud Córdoba",
  description: "Planes integrales...",
};
```

---

### 2. 💰 Cambiar Planes y Precios

**Archivo: `components/Plans.tsx`** (línea ~6)

Modifica el array `plans`:

```typescript
const plans: Plan[] = [
  {
    id: 'basico',
    name: 'Tu Plan Básico',      // ← Cambia nombre
    price: 1899,                  // ← Cambia precio
    description: 'Tu descripción',
    features: [
      'Feature 1',
      'Feature 2',
      // ... agregar/quitar features
    ],
  },
  // ... más planes
];
```

Ejemplo:
```typescript
{
  id: 'light',
  name: 'Plan Light',
  price: 1500,
  description: 'Cobertura básica',
  features: [
    'Medicina general',
    '200 profesionales',
    'Farmacia con descuento',
  ],
}
```

---

### 3. 📞 Cambiar Número de WhatsApp

**Archivo: `components/ContactFormContent.tsx`** (línea ~54)

```typescript
const message = encodeURIComponent(
  `Hola, me interesa el plan ${planName} de SIPSA. Mi nombre es ${formData.nombre}, mi email es ${formData.email} y mi teléfono es ${formData.telefono}.`
);

// Busca esta línea y cambia el número:
window.open(
  `https://wa.me/5493515929043?text=${message}`,  // ← Cambia número aquí
  '_blank'
);
```

Formato del número (ejemplo):
- **Argentina**: `5493515929043` (54 + 9 + código área + número)
- **Otros países**: `[código país][número completo sin +]`

---

### 4. 🎨 Cambiar Colores (Tema)

El tema actual usa gradientes **verde → azul**. Para cambiar:

**Opción 1: Cambiar clases Tailwind** (Más simple)

En cualquier componente, cambia:
```tsx
// Actual (verde-azul)
from-green-400 to-blue-500

// Alternativa: púrpura-rosa
from-purple-400 to-pink-500

// Alternativa: naranja-rojo
from-orange-400 to-red-500
```

**Opción 2: Modificar paleta en `tailwind.config.ts`**

```typescript
theme: {
  extend: {
    colors: {
      primary: '#10b981',   // Reemplaza verde
      secondary: '#0ea5e9', // Reemplaza azul
    },
  },
},
```

**Lugares clave donde aparecen colores:**
- `components/Header.tsx` - Logo y nav
- `components/Hero.tsx` - Botones y texto destacado
- `components/Plans.tsx` - Cartas de planes
- `components/ContactFormContent.tsx` - Botón envío
- `app/page.tsx` - Background principal

---

### 5. 📧 Cambiar Email y Teléfono

**Archivo: `components/ContactFormContent.tsx`** (línea ~160-165)
```tsx
<div className="bg-slate-800/30 border border-blue-500/20 rounded-lg p-6 text-center">
  <div className="text-2xl mb-2">📞</div>
  <p className="text-white font-semibold mb-2">Teléfono</p>
  <p className="text-gray-400">+54 9 351 5929043</p>  {/* ← Cambia */}
</div>
<div className="bg-slate-800/30 border border-blue-500/20 rounded-lg p-6 text-center">
  <div className="text-2xl mb-2">📧</div>
  <p className="text-white font-semibold mb-2">Email</p>
  <p className="text-gray-400">info@sipsa.com.ar</p>  {/* ← Cambia */}
</div>
```

**También en `components/Footer.tsx`** (línea ~48-53)

---

### 6. 📖 Cambiar Sección "Sobre Nosotros"

**Archivo: `components/About.tsx`**

Modifica:
```tsx
// Misión
<h3 className="text-2xl font-bold text-green-400 mb-3">Nuestra Misión</h3>
<p className="text-gray-300 leading-relaxed">
  Tu texto aquí...
</p>

// Por qué elegirnos
<h3 className="text-2xl font-bold text-green-400 mb-3">¿Por qué elegirnos?</h3>
<ul className="space-y-3 text-gray-300">
  <li className="flex gap-3">
    <span className="text-green-400 font-bold">✓</span>
    <span>Tu beneficio 1</span>  {/* ← Cambia */}
  </li>
  {/* ... más beneficios */}
</ul>
```

---

### 7. 🏢 Cambiar Información de Empresa

**Archivo: `components/About.tsx`** (sección boxes)

```tsx
<div className="bg-slate-800/50 rounded-lg p-4">
  <h4 className="text-green-400 font-semibold mb-2">Desde 2004</h4>  {/* ← Cambia */}
  <p className="text-gray-400 text-sm">20 años de confianza y experiencia en Córdoba</p>  {/* ← Cambia */}
</div>
```

**Archivo: `components/Hero.tsx`** (indicadores)

```tsx
<div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
  <div className="text-center">
    <div className="text-3xl font-bold text-green-400 mb-2">15K+</div>  {/* ← Cambia número */}
    <p className="text-gray-400 text-sm">Clientes Activos</p>
  </div>
  {/* ... más indicadores */}
</div>
```

---

### 8. 🔗 Cambiar Redes Sociales (Footer)

**Archivo: `components/Footer.tsx`** (línea ~37-41)

```tsx
<div className="flex gap-4 mt-4 md:mt-0">
  <a href="https://facebook.com/tuempresa" className="text-gray-400 hover:text-green-400 transition">
    Facebook
  </a>
  <a href="https://instagram.com/tuempresa" className="text-gray-400 hover:text-green-400 transition">
    Instagram
  </a>
  <a href="https://wa.me/5493515929043" className="text-gray-400 hover:text-green-400 transition">
    WhatsApp
  </a>
</div>
```

---

### 9. 🏷️ Cambiar Ubicación/Dirección

**Archivo: `components/Footer.tsx`** (línea ~48)

```tsx
<li>📍 Tu Dirección Aquí</li>
```

**Archivo: `components/About.tsx`**

---

### 10. 🎯 Cambiar Hero Text y CTA

**Archivo: `components/Hero.tsx`** (línea ~15)

```tsx
<span className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm font-semibold">
  ✓ Tu Propuesta de Valor  {/* ← Cambia */}
</span>
```

Botones:
```tsx
<a 
  href="#planes" 
  className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-green-700 transition transform hover:scale-105"
>
  Tu CTA 1  {/* ← Cambia */}
</a>
```

---

## 🎯 Checklist de Personalización Rápida

- [ ] Cambiar nombre de empresa (Header, Footer, Metadata)
- [ ] Cambiar planes y precios
- [ ] Cambiar número WhatsApp
- [ ] Cambiar email y teléfono de contacto
- [ ] Cambiar colores (tema)
- [ ] Actualizar sección "Sobre Nosotros"
- [ ] Cambiar datos de empresa (fundación, clientes, etc.)
- [ ] Actualizar redes sociales
- [ ] Cambiar dirección
- [ ] Revisar y probar formulario
- [ ] Deploy a Vercel

---

## 🚀 Después de Personalizar

```bash
# 1. Revisar cambios localmente
npm run dev
# Abre http://localhost:3000 y verifica todo

# 2. Build
npm run build

# 3. Commit
git add -A
git commit -m "Personalización de SIPSA"
git push

# 4. Deploy automático
# Vercel se deployará automáticamente al hacer push
```

---

## 📚 Estructura de Componentes

```
app/
├── page.tsx          → Importa componentes
├── layout.tsx        → Metadata y estructura global
└── globals.css       → Estilos globales

components/
├── Header.tsx        → Logo + Nav
├── Hero.tsx          → Sección principal
├── About.tsx         → Sobre nosotros
├── Plans.tsx         → Planes (array de planes)
├── ContactForm.tsx   → Wrapper del formulario
├── ContactFormContent.tsx → Lógica del formulario
└── Footer.tsx        → Pie de página
```

Cada componente es independiente y fácil de editar. ¡Prueba y diviértete personalizar!

---

**Preguntas? Revisa el README.md o DEPLOYMENT.md**
