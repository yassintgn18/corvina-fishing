import { Link } from 'react-router-dom';

function EmptyState({ 
  icon = "🛒", 
  title = "Rien à voir ici", 
  message = "Commencez par explorer nos offres", 
  buttonText = "Explorer", 
  buttonLink = "/",
  showButton = true 
}) {
  return (
    <div className="text-center py-16">
      <div className="text-6xl mb-4">{icon}</div>
      <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{title}</h2>
      <p className="text-[var(--text-secondary)] mb-6">{message}</p>
      {showButton && (
        <Link 
          to={buttonLink} 
          className="inline-block bg-[var(--primary)] text-white rounded-full px-6 py-2 hover:bg-[var(--primary-dark)] transition"
        >
          {buttonText} →
        </Link>
      )}
    </div>
  );
}

export default EmptyState;