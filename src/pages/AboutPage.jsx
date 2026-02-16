import { Helmet } from 'react-helmet-async'
import '../assets/styles/AboutPage.css'

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Acerca de - Gestor de Tareas Domésticas</title>
        <meta
          name="description"
          content="Conoce más sobre el Gestor de Tareas Domésticas. Una herramienta moderna para organizar tus tareas del hogar."
        />
        <meta name="keywords" content="tareas, hogar, organización, productividad" />
        <meta property="og:title" content="Acerca de - Gestor de Tareas" />
        <meta property="og:description" content="Información sobre nuestra aplicación de gestión de tareas." />
        <meta property="og:url" content={`${window.location.origin}/acerca-de`} />
        <link rel="canonical" href={`${window.location.origin}/acerca-de`} />
      </Helmet>

      <div className="about-container">
        <h1>Acerca de Tareas Domésticas</h1>

        <section className="about-section">
          <h2>¿Qué somos?</h2>
          <p>
            Somos una herramienta moderna y simple para gestionar tus tareas domésticas.
            Creamos esta aplicación para ayudarte a organizar, seguir y completar tus tareas de forma eficiente.
          </p>
        </section>

        <section className="about-section">
          <h2>Características</h2>
          <ul>
            <li>Crear y gestionar tareas fácilmente</li>
            <li>Filtrar tareas por estado (activas, completadas)</li>
            <li>Ver estadísticas de productividad</li>
            <li>Interfaz simple e intuitiva</li>
            <li>Persistencia de datos local</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Tecnología</h2>
          <p>
            Desarrollado con React, Vite y React Router para proporcionar
            una experiencia rápida y responsiva.
          </p>
          <ul>
            <li><strong>React 19:</strong> Framework UI moderno</li>
            <li><strong>Vite:</strong> Build tool ultrarrápido</li>
            <li><strong>React Router:</strong> Navegación entre páginas</li>
            <li><strong>React Helmet:</strong> Gestión de meta tags para SEO</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default AboutPage
