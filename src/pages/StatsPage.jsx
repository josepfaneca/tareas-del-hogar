import { Helmet } from 'react-helmet-async'
import { useTareas } from '../assets/hooks'
import '../assets/styles/StatsPage.css'

function StatsPage() {
  const { tareas, completadas } = useTareas()

  const totalTareas = tareas.length
  const tareasCompletadas = completadas.size
  const porcentajeCompletado = totalTareas > 0 ? Math.round((tareasCompletadas / totalTareas) * 100) : 0

  return (
    <>
      <Helmet>
        <title>Estadísticas - Gestor de Tareas Domésticas</title>
        <meta
          name="description"
          content="Visualiza las estadísticas de tus tareas domésticas. Sigue tu progreso y productividad en tiempo real."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Estadísticas - Gestor de Tareas" />
        <meta property="og:description" content="Análisis detallado de tu productividad en tareas domésticas." />
        <meta property="og:url" content={`${window.location.origin}/stats`} />
        <canonical href={`${window.location.origin}/stats`} />
      </Helmet>

      <div className="stats-container">
        <h1>Estadísticas de Tareas</h1>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total de Tareas</h3>
            <p className="stat-number">{totalTareas}</p>
          </div>

          <div className="stat-card">
            <h3>Tareas Completadas</h3>
            <p className="stat-number">{tareasCompletadas}</p>
          </div>

          <div className="stat-card">
            <h3>Tareas Pendientes</h3>
            <p className="stat-number">{totalTareas - tareasCompletadas}</p>
          </div>

          <div className="stat-card">
            <h3>Porcentaje Completado</h3>
            <p className="stat-number">{porcentajeCompletado}%</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${porcentajeCompletado}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StatsPage
