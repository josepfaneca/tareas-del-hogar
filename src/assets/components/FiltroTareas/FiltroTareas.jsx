import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

function FiltroTareas({ filtroActivo, onCambiarFiltro }) {
  const filtros = [
    { valor: 'todas', etiqueta: 'Todas' },
    { valor: 'completadas', etiqueta: 'Completadas' },
    { valor: 'pendientes', etiqueta: 'Pendientes' }
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
      <ButtonGroup variant="outlined" aria-label="filtrar tareas">
        {filtros.map((filtro) => (
          <Button
            key={filtro.valor}
            variant={filtroActivo === filtro.valor ? 'contained' : 'outlined'}
            onClick={() => onCambiarFiltro(filtro.valor)}
          >
            {filtro.etiqueta}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}

FiltroTareas.propTypes = {
  filtroActivo: PropTypes.string.isRequired,
  onCambiarFiltro: PropTypes.func.isRequired,
};

export default FiltroTareas;
