import { Link as RouterLink, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Button, Box, Container, Typography, Paper } from '@mui/material'
import '../assets/styles/MainLayout.css'

function MainLayout({ children }) {
  const location = useLocation()

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Estadísticas', path: '/estadisticas' },
    { label: 'Acerca de', path: '/acerca-de' },
  ]

  return (
    <Box className="layout">
      {/* Navbar */}
      <AppBar position="sticky" className="navbar">
        <Toolbar className="navbar-toolbar">
          {/* Logo/Brand */}
          <Button
            component={RouterLink}
            to="/"
            className="navbar-brand"
            disableRipple
          >
            📋 Tareas del Hogar
          </Button>

          {/* Navigation Links */}
          <Box className="nav-links-container">
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                disableRipple
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" component="main" className="main-content">
        {children}
      </Container>

      {/* Footer */}
      <Paper component="footer" className="footer" elevation={0}>
        <Typography className="footer-text">
          &copy; 2026 Tareas del Hogar - Curso Iniciación al desarrollo FrontEnd con React.
          <br />
          Developed by Josep Faneca Trilla.
        </Typography>

        <Typography className="footer-text">
          <a href="https://github.com/josepfaneca/tareas-del-hogar" target="_blank" rel="noopener noreferrer">GitHub</a>
        </Typography>
      </Paper>
    </Box>
  )
}

export default MainLayout
