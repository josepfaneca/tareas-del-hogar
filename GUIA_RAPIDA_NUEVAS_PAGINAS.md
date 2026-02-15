# 🚀 Guía Rápida: Agregar Nueva Página

## ⚡ Pasos Rápidos (5 minutos)

### 1️⃣ Crear componente de página

```bash
# Crear archivo src/pages/NuevaPage.jsx
```

```jsx
// src/pages/NuevaPage.jsx
import { Helmet } from 'react-helmet-async'

function NuevaPage() {
  return (
    <>
      <Helmet>
        <title>Mi Nueva Página - Gestor de Tareas</title>
        <meta name="description" content="Descripción breve de la página..." />
        <meta name="keywords" content="palabra-clave-1, palabra-clave-2" />
        <meta property="og:title" content="Mi Nueva Página" />
        <meta property="og:description" content="Descripción para redes sociales..." />
        <meta property="og:url" content={`${window.location.origin}/nueva-pagina`} />
        <canonical href={`${window.location.origin}/nueva-pagina`} />
      </Helmet>

      <div>
        <h1>Mi Nueva Página</h1>
        <p>Contenido aquí...</p>
      </div>
    </>
  )
}

export default NuevaPage
```

### 2️⃣ Agregar ruta en App.jsx

```jsx
// src/App.jsx - Agregar en las rutas
import NuevaPage from './pages/NuevaPage'

// ... en el return:
<Route path="/nueva-pagina" element={<NuevaPage />} />
```

### 3️⃣ Agregar link en navegación

```jsx
// src/layouts/MainLayout.jsx - Agregar en nav-links
<li>
  <Link
    to="/nueva-pagina"
    className={location.pathname === '/nueva-pagina' ? 'active' : ''}
  >
    Nueva Página
  </Link>
</li>
```

---

## 📋 Template de Meta Tags (Copia y Pega)

```jsx
<Helmet>
  <title>Título Único - Gestor de Tareas (60 chars máx)</title>
  <meta name="description" content="Descripción único de 155-160 caracteres. Incluye la palabra clave principal. Describe brevemente el contenido de la página." />
  <meta name="keywords" content="palabra-clave-1, palabra-clave-2, palabra-clave-3" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Título para redes sociales" />
  <meta property="og:description" content="Descripción para redes (120 chars aprox)" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${window.location.origin}/ruta-pagina`} />
  <canonical href={`${window.location.origin}/ruta-pagina`} />
</Helmet>
```

---

## 🎯 Best Practices de SEO

### Títulos
- ✅ Único para cada página
- ✅ Incluir palabra clave principal
- ✅ Máximo 60 caracteres
- ✅ Descriptivo y atractivo

**Ejemplo BUENO:**
```
"Estadísticas de Tareas - Productividad en Tiempo Real"
```

**Ejemplo MALO:**
```
"Página de Estadísticas"
```

### Meta Descripciones
- ✅ Único para cada página
- ✅ 155-160 caracteres
- ✅ Incluir 1-2 palabras clave
- ✅ Call-to-action opcional

**Ejemplo BUENO:**
```
"Visualiza tus estadísticas de tareas domésticas en tiempo real.
Sigue tu progreso, productivity y completa más tareas eficientemente."
```

**Ejemplo MALO:**
```
"Esta es la página de estadísticas"
```

### URLs Amigables
- ✅ Descriptivas y legibles
- ✅ Minúsculas
- ✅ Guiones para separar palabras
- ✅ Evitar números aleatorios

**Ejemplo BUENO:**
```
/estadisticas
/acerca-de
/tareas-completadas
```

**Ejemplo MALO:**
```
/page/123
/s?id=456
/página-de-estadísticas
```

---

## 📁 Estructura de Carpetas Recomendada

```
src/
├── pages/                    # Componentes de página
│   ├── HomePage.jsx
│   ├── StatsPage.jsx
│   ├── AboutPage.jsx
│   └── ErrorPage.jsx        # 404
├── layouts/                 # Layouts reutilizables
│   ├── MainLayout.jsx
│   └── AdminLayout.jsx      # Futuro
├── assets/
│   ├── components/          # Componentes reutilizables
│   │   ├── TaskForm/
│   │   ├── TaskList/
│   │   └── ...
│   ├── hooks/              # Custom hooks
│   │   ├── useTareas.js
│   │   └── ...
│   └── styles/             # CSS por página
│       ├── Layout.css
│       ├── HomePage.css
│       └── ...
├── App.jsx                 # Rutas
└── main.jsx               # Entry point
```

---

## 🔗 Links Útiles de Referencia

### Documentación Oficial
- React Helmet: https://github.com/nfl/react-helmet-async
- React Router: https://reactrouter.com/
- Guía SEO de Google: https://developers.google.com/search

### SEO Tools
- Google Search Console: https://search.google.com/search-console
- Lighthouse: Chrome DevTools
- PageSpeed Insights: https://pagespeed.web.dev/

---

## 🧪 Pruebas de SEO

### Verificar de Meta Tags
```javascript
// En la consola del navegador:
document.querySelectorAll('meta')
document.querySelector('title').textContent
document.querySelector('meta[name="description"]').content
```

### Auditar con DevTools
1. F12 → Lighthouse
2. Click "Analyze page"
3. Revisar score de SEO

### Probar Open Graph
1. https://metatags.io/
2. Pega tu URL
3. Verifica los tags

---

## ✅ Checklist Antes de Publicar

Por cada página nueva:
- [ ] Título único (60 chars aprox)
- [ ] Meta descripción (155-160 chars)
- [ ] Meta keywords (3-5 palabras)
- [ ] Open Graph tags
- [ ] URL canónica
- [ ] Link en navegación
- [ ] Ruta en App.jsx
- [ ] Componente creado
- [ ] Probado en navegador

---

## 💡 Ejemplos Reales

### Página de Contacto
```jsx
<Helmet>
  <title>Contacto - Gestor de Tareas Domésticas</title>
  <meta name="description" content="Contacta con nuestro equipo. Resolvemos tus dudas sobre el Gestor de Tareas Domésticas." />
</Helmet>
```

### Página de FAQ
```jsx
<Helmet>
  <title>FAQ - Preguntas Frecuentes | Gestor de Tareas</title>
  <meta name="description" content="Respuestas a preguntas frecuentes sobre cómo usar el Gestor de Tareas Domésticas." />
</Helmet>
```

### Página de Blog
```jsx
<Helmet>
  <title>5 Tips para Organizar Tus Tareas - Blog Gestor</title>
  <meta name="description" content="Descubre 5 tips prácticos para organizar y completar tus tareas domésticas más rápido." />
</Helmet>
```

---

## 🎓 Resumen

Con este template puedes:
✅ Crear páginas con SEO optimizado
✅ Mantener una estructura consistente
✅ Escalar fácilmente
✅ Mejorar el posicionamiento
✅ Brindar mejor UX

**¡Ahora estás listo para crear páginas SEO-friendly! 🚀**
