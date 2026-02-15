import useLocalStorage from './useLocalStorage';

function useTareas() {
  const [tareas, setTareas] = useLocalStorage('tareas', []);
  const [completadas, setCompletadas] = useLocalStorage('completadas', []);

  const onMarkComplete = (id) => {
    if (completadas.includes(id)) {
      setCompletadas(completadas.filter(completadaId => completadaId !== id));
    } else {
      setCompletadas([...completadas, id]);
    }
  };

  return {
    tareas,
    setTareas,
    completadas,
    setCompletadas,
    onMarkComplete
  };
}

export default useTareas;
