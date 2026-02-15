# 📝 Aplicación de Tareas Domésticas

Aplicación web interactiva para gestionar tareas domésticas, construida con **React 19** y **Vite**.

## 🎯 Descripción del Proyecto

Una aplicación moderna que permite a los usuarios:
- ✅ Añadir nuevas tareas domésticas
- ✓ Marcar tareas como completadas
- 🔍 Filtrar tareas por estado (Todas, Completadas, Pendientes)
- 💾 Guardar automáticamente en localStorage
- 🎨 Interfaz moderna con Material-UI

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca UI
- **Vite** - Build tool y dev server
- **Material-UI (MUI)** - Componentes y estilos
- **localStorage** - Persistencia de datos
- **PropTypes** - Validación de props
- **CSS personalizado** - Estilos adicionales

## 📦 Estructura del Proyecto

```
src/
├── App.jsx                    # Componente principal
├── assets/
│   ├── components/
│   │   ├── TaskForm/          # Formulario para añadir tareas
│   │   ├── TaskList/          # Lista de tareas
│   │   ├── TaskItem/          # Elemento individual de tarea
│   │   └── FiltroTareas/      # Filtros de visualización
│   └── hooks/
│       ├── useLocalStorage.js # Hook para localStorage
│       ├── useTareas.js       # Hook para gestionar tareas
│       └── useFiltroTareas.js # Hook para filtrado
```

## 🚀 Características Principales

### Custom Hooks
- **useLocalStorage** - Sincroniza estado con localStorage automáticamente
- **useTareas** - Gestiona todo el estado de tareas y completadas
- **useFiltroTareas** - Maneja el filtrado de tareas

### Componentes Reutilizables
- **TaskForm** - Entrada de nuevas tareas con validación
- **TaskList** - Contenedor de tareas
- **TaskItem** - Elemento individual con botón de marcar completada
- **FiltroTareas** - Botones de filtrado con Material-UI

## 📥 Instalación

```bash
# Clonar o descargar el proyecto
cd tareas-del-hogar

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 💡 Buenas Prácticas Implementadas

✓ Componentes funcionales con hooks
✓ Custom hooks reutilizables
✓ Separación de responsabilidades
✓ Lifting state up (estado en App)
✓ Validación con PropTypes
✓ localStorage para persistencia
✓ Uso de index.js para exportaciones limpias

## 📝 Licencia

Este proyecto es de código abierto para fines educativos.

---

**Desarrollado como proyecto del curso 'Iniciación al desarrollo FrontEnd con React'** 🚀