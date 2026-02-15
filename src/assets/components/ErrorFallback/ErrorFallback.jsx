import '../../styles/ErrorFallback.css'

function ErrorFallback() {
  return (
    <div className="error-container">
      <h2>⚠️ Error al cargar la página</h2>
      <p>Lo sentimos, ocurrió un problema al cargar el contenido.</p>
      <a href="/" className="retry-button">
        Volver al inicio
      </a>
    </div>
  )
}

export default ErrorFallback
