import PropTypes from 'prop-types';
import './TaskList.css';
import TaskItem from '../TaskItem';

function TaskList({ tareas, completadas, onMarkComplete }) {
  return (
    <div className="task-list">
      <h3>Lista de tareas:</h3>
      {tareas.length === 0 ? (
        <p>No hay tareas aún. ¡Añade una!</p>
      ) : (
        <ul>
          {tareas.map((tarea) => (
            <TaskItem
              key={tarea.id}
              id={tarea.id}
              texto={tarea.text}
              completada={completadas.includes(tarea.id)}
              onToggle={onMarkComplete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

TaskList.propTypes = {
  tareas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  completadas: PropTypes.arrayOf(PropTypes.number).isRequired,
  onMarkComplete: PropTypes.func.isRequired,
};

export default TaskList;
