import { useState } from 'react';

function useFiltroTareas(tareas, completadas) {
  const [filtro, setFiltro] = useState('todas');

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'completadas') {
      return completadas.includes(tarea.id);
    } else if (filtro === 'pendientes') {
      return !completadas.includes(tarea.id);
    }
    return true; // 'todas'
  });

  return {
    filtro,
    setFiltro,
    tareasFiltradas
  };
}

export default useFiltroTareas;
