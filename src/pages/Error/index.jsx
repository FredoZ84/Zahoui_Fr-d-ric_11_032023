import { Link } from 'react-router-dom'
import '../../styles/Error.css'

function Error() {
  return (
    <main id="error">
      <p className="code">404</p>
      <p className="message">
        Oups! La page que
        <br className="mobile-break" /> vous demandez n'existe pas.
      </p>
      <Link to="/" className="link underline">
        Retourner sur la page d’accueil
      </Link>
    </main>
  )
}

export default Error
