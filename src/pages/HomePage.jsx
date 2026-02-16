import { Helmet } from 'react-helmet-async'
import TaskForm from '../assets/components/TaskForm'
import TaskList from '../assets/components/TaskList'
import FiltroTareas from '../assets/components/FiltroTareas'
import { useTareas, useFiltroTareas } from '../assets/hooks'

function HomePage() {
  const { tareas, setTareas, completadas, onMarkComplete } = useTareas()
  const { filtro, setFiltro, tareasFiltradas } = useFiltroTareas(tareas, completadas)

  return (
    <>
      <Helmet>
        <title>Tareas Domésticas - Gestor de Tareas del Hogar</title>
        <meta
          name="description"
          content="Gestor de tareas domésticas interactivo. Organiza, filtra y completa tus tareas del hogar de forma sencilla y eficiente."
        />
        <meta name="keywords" content="tareas, hogar, organizador, gestor de tareas" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tareas Domésticas - Gestor de Tareas" />
        <meta
          property="og:description"
          content="Herramienta en línea para gestionar tus tareas domésticas de forma sencilla."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={`${window.location.origin}/`} />
      </Helmet>

      <div>
        <h1>Tareas Domésticas</h1>
        <h3>Iniciación al desarrollo FrontEnd con React</h3>
        <TaskForm setTareas={setTareas} />
        <FiltroTareas filtroActivo={filtro} onCambiarFiltro={setFiltro} />
        <TaskList tareas={tareasFiltradas} completadas={completadas} onMarkComplete={onMarkComplete} />
      </div>
    </>
  )
}

export default HomePage
