import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskForm from './assets/components/TaskForm'
import TaskList from './assets/components/TaskList'
import FiltroTareas from './assets/components/FiltroTareas'
import { useTareas, useFiltroTareas } from './assets/hooks'

function App() {

  const { tareas, setTareas, completadas, onMarkComplete } = useTareas()
  const { filtro, setFiltro, tareasFiltradas } = useFiltroTareas(tareas, completadas)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Tareas Domésticas</h1>
      <h3>Iniciación al desarrollo FrontEnd con React</h3>
      <TaskForm setTareas={setTareas} />
      <FiltroTareas filtroActivo={filtro} onCambiarFiltro={setFiltro} />
      <TaskList tareas={tareasFiltradas} completadas={completadas} onMarkComplete={onMarkComplete} />
    </>
  )
}

export default App
