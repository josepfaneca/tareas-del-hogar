# Documentación: SEO y URLs Amigables

## 🎯 Implementación de React Helmet

Este proyecto utiliza **React Helmet Async** para gestionar dinámicamente los meta tags y títulos en cada página, mejorando el SEO y la experiencia del usuario.

### ¿Qué es React Helmet?

React Helmet permite cambiar el contenido del `<head>` de manera declarativa desde componentes React:
- Títulos únicos por página
- Meta descripciones ✅
- Open Graph tags (para redes sociales)
- URLs canónicas
- Keywords

---

## 📁 Estructura de Páginas y URLs

### URLs Implementadas

| URL | Página | Descripción |
|-----|--------|-------------|
| `/` | **HomePage** | Gestor principal de tareas |
| `/estadisticas` | **StatsPage** | Panel de estadísticas |

### Rutas Amigables

Las URLs están estructuradas de manera semántica:
- ✅ Legibles para humanos: `/estadisticas` en lugar de `/page?id=2`
- ✅ Descriptivas del contenido
- ✅ Favorables para SEO
- ✅ Navegación intuitiva

---

## 🏷️ Meta Tags por Página

### Página Principal (`/`)

```javascript
<title>Tareas Domésticas - Gestor de Tareas del Hogar</title>
<meta name="description" content="Gestor de tareas domésticas interactivo..." />
<meta name="keywords" content="tareas, hogar, organizador, gestor de tareas" />
```

### Página de Estadísticas (`/estadisticas`)

```javascript
<title>Estadísticas - Gestor de Tareas Domésticas</title>
<meta name="description" content="Visualiza las estadísticas de tus tareas..." />
```

---

## 🔗 Open Graph Tags

Cada página incluye tags Open Graph para mejor visualización en redes sociales:

```javascript
<meta property="og:title" content="Tareas Domésticas - Gestor de Tareas" />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" />
<meta property="og:url" content={window.location.href} />
```

---

## 📋 Implementación en Componentes

### Ejemplo: HomePage.jsx

```jsx
import { Helmet } from 'react-helmet-async'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Tareas Domésticas - Gestor de Tareas del Hogar</title>
        <meta
          name="description"
          content="Gestor de tareas domésticas interactivo..."
        />
        <canonical href={`${window.location.origin}/`} />
      </Helmet>

      {/* Contenido de la página */}
    </>
  )
}
```

---

## ✅ Mejores Prácticas Implementadas

### 1. **Títulos Únicos y Descriptivos**
- Cada página tiene su propio título
- Incluyen keywords relevantes
- Límite de 60 caracteres (recomendación)

### 2. **Meta Descripciones**
- Únicas por página
- Describen el contenido claramente
- Límite de 155-160 caracteres

### 3. **URLs Amigables**
- Estructura semántica y lógica
- Sin parámetros innecesarios
- Fáciles de recordar

### 4. **URLs Canónicas**
```javascript
<canonical href={`${window.location.origin}/estadisticas`} />
```
Evita contenido duplicado en SEO.

### 5. **Navegación Clara**
```jsx
<Link to="/">Inicio</Link>
<Link to="/estadisticas">Estadísticas</Link>
```

---

## 🔍 Análisis de SEO

### Auditoría con Lighthouse
```bash
npm run build
npm run preview
# Luego ejecuta Lighthouse en Chrome DevTools
```

### Checklist SEO
- ✅ Títulos únicos por página
- ✅ Meta descripciones presentes
- ✅ URLs semánticas y amigables
- ✅ URLs canónicas
- ✅ Navegación clara
- ✅ Mobile-friendly (responsive)
- ✅ Accesibilidad (alt texts, ARIA)

---

## 🚀 Cómo Agregar Nuevas Páginas

### 1. Crear página con Helmet

```jsx
// src/pages/NovaPage.jsx
import { Helmet } from 'react-helmet-async'

function NovaPage() {
  return (
    <>
      <Helmet>
        <title>Mi Nueva Página - Sitio</title>
        <meta name="description" content="Descripción de la página..." />
        <canonical href={`${window.location.origin}/nueva-pagina`} />
      </Helmet>

      <h1>Contenido</h1>
    </>
  )
}
```

### 2. Agregar ruta en App.jsx

```jsx
<Route path="/nueva-pagina" element={<NovaPage />} />
```

### 3. Agregar link en navegación

```jsx
<Link to="/nueva-pagina">Nueva Página</Link>
```

---

## 📊 Monitoreo y Herramientas

### Herramientas Recomendadas
- **Google PageSpeed Insights** - Rendimiento y SEO
- **Google Search Console** - Indexación
- **Lighthouse** - Auditoría completa
- **Screaming Frog** - Análisis de estructura

### Comandos Disponibles
```bash
npm run dev       # Desarrollo local
npm run build     # Compilar para producción
npm run preview   # Previsualizar build
npm run lint      # Verificar código
```

---

## 🎓 Conclusión

Con React Helmet y React Router implementados:
✅ SEO mejorado con títulos y descripciones únicas
✅ URLs amigables y semánticas
✅ Mejor experiencia de usuario con navegación clara
✅ Fácil de escalar agregando nuevas páginas
✅ Compatible con buscadores
