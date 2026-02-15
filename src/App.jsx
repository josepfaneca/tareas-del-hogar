import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import StatsPage from './pages/StatsPage'
import AboutPage from './pages/AboutPage'
import './App.css'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/estadisticas" element={<StatsPage />} />
        <Route path="/acerca-de" element={<AboutPage />} />
      </Routes>
    </MainLayout>
  )
}

export default App
