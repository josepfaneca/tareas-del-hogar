import { Link, useLocation } from 'react-router-dom'
import '../assets/styles/Layout.css'

function MainLayout({ children }) {
  const location = useLocation()

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            📋 Tareas del Hogar
          </Link>
          <ul className="nav-links">
            <li>
              <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/estadisticas"
                className={location.pathname === '/estadisticas' ? 'active' : ''}
              >
                Estadísticas
              </Link>
            </li>
            <li>
              <Link
                to="/acerca-de"
                className={location.pathname === '/acerca-de' ? 'active' : ''}
              >
                Acerca de
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <p>&copy; 2025 Gestor de Tareas Domésticas. Desarrollado con React y Vite.</p>
      </footer>
    </div>
  )
}

export default MainLayout
