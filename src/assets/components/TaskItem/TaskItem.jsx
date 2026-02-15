import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import './TaskItem.css';

function TaskItem({ id, texto, completada, onToggle }) {
  return (
    <li className={completada ? 'completa' : ''}>
      <span>{texto}</span>
      <Button
        onClick={() => onToggle(id)}
        variant={completada ? 'contained' : 'outlined'}
        color={completada ? 'success' : 'primary'}
        size="small"
      >
        {completada ? '✓ Completada' : 'Marcar completada'}
      </Button>
    </li>
  );
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  texto: PropTypes.string.isRequired,
  completada: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TaskItem;
