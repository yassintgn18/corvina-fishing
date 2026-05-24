import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center py-20">
      <div className="text-8xl mb-4">🎣</div>
      <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-2">404</h1>
      <p className="text-[var(--text-secondary)] mb-6">Page non trouvée</p>
      <Link to="/" className="bg-[var(--primary)] text-white px-6 py-2 rounded-full hover:bg-[var(--primary-dark)] transition">
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default NotFound;