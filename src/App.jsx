import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import LoadingSpinner from './assets/components/LoadingSpinner'
import './App.css'

// Lazy load de páginas no críticas
const HomePage = lazy(() => import('./pages/HomePage'))
const StatsPage = lazy(() => import('./pages/StatsPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

function App() {
  return (
    <MainLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/estadisticas" element={<StatsPage />} />
          <Route path="/acerca-de" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </MainLayout>
  )
}

export default App
