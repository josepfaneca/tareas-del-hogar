import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function TaskForm({ setTareas }) {
  const [tarea, setTarea] = useState('');

  const manejarCambio = (event) => {
    setTarea(event.target.value);
  };

  const onAddTask = (nuevaTarea) => {
    setTareas((tareas) => [...tareas, { id: Date.now(), text: nuevaTarea }]);
  };

  const manejarEnvio = (event) => {
    event.preventDefault();
    if (tarea.trim() === '') {
      alert('Por favor, escribe una tarea');
      return;
    }
    onAddTask(tarea);
    setTarea('');
  };

  return (
    <Box component="form" onSubmit={manejarEnvio} sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <TextField
        label="Nueva tarea"
        value={tarea}
        onChange={manejarCambio}
        placeholder="Escribe una tarea doméstica"
        variant="outlined"
        size="small"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Añadir
      </Button>
    </Box>
  );
}

TaskForm.propTypes = {
  setTareas: PropTypes.func.isRequired,
};

export default TaskForm;
