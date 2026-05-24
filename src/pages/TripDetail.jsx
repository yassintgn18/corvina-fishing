import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { trips } from '../data/trips';
import SkeletonCard from '../components/common/SkeletonCard';

function TripDetail() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundTrip = trips.find(t => t.id === parseInt(id));
      setTrip(foundTrip);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [id]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = [];
    for (let i = 0; i < fullStars; i++) stars.push("★");
    if (hasHalfStar) stars.push("½");
    return stars.join("");
  };

  if (isLoading) {
    return <SkeletonCard />;
  }

  if (!trip) {
    return (
      <div>
        <div className="flex items-center gap-4 mb-6">
          <Link to="/sorties" className="text-[var(--primary)] text-xl">←</Link>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Sortie non trouvée</h1>
        </div>
        <p className="text-[var(--text-secondary)]">Désolé, cette sortie n'existe pas.</p>
        <Link to="/sorties" className="text-[var(--primary)] underline mt-4 inline-block">
          Retour aux sorties →
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link to="/sorties" className="text-[var(--primary)] text-xl">←</Link>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Détails de la sortie</h1>
      </div>

      {/* Main image - FIXED */}
      <div className="rounded-2xl h-64 md:h-80 overflow-hidden mb-6">
        <img 
          src={trip.image} 
          alt={trip.name}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800'; }}
        />
      </div>

      <div className="flex justify-between items-start mb-4 flex-wrap gap-3">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">{trip.name}</h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[var(--secondary)] text-lg">{renderStars(trip.stars)}</span>
            <span className="text-[var(--text-secondary)]">({trip.stars})</span>
          </div>
        </div>
        <span className="text-3xl md:text-4xl font-bold text-[var(--secondary)]">{trip.price} DH</span>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="bg-[var(--border)] rounded-full px-3 py-1 text-sm text-[var(--text-primary)]">⏱️ {trip.duration}</span>
        <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full px-3 py-1 text-sm">✓ Places disponibles</span>
      </div>

      <div className="bg-[var(--surface)] rounded-2xl p-5 border border-[var(--border)] mb-6">
        <h3 className="font-bold text-[var(--text-primary)] mb-3">Description</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed">{trip.description}</p>
      </div>

      <div className="bg-[var(--surface)] rounded-2xl p-5 border border-[var(--border)] mb-6">
        <h3 className="font-bold text-[var(--text-primary)] mb-3">Ce qui est inclus</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-[var(--text-secondary)]">✓ Matériel de pêche (canne, moulinet, appâts)</li>
          <li className="flex items-center gap-2 text-[var(--text-secondary)]">✓ Skipper expérimenté</li>
          <li className="flex items-center gap-2 text-[var(--text-secondary)]">✓ Gilet de sauvetage</li>
          <li className="flex items-center gap-2 text-[var(--text-secondary)]">✓ Eau et rafraîchissements</li>
        </ul>
      </div>

      <Link to={`/reservation?trip=${trip.id}`} className="block w-full bg-[var(--primary)] text-white text-center rounded-full py-3 font-bold text-lg hover:bg-[var(--primary-dark)] transition mb-6">
        Réserver maintenant
      </Link>
    </div>
  );
}

export default TripDetail;