import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TripCard from '../components/common/TripCard';
import SkeletonCard from '../components/common/SkeletonCard';
import { trips } from '../data/trips';

function Sorties() {
  const [activeFilter, setActiveFilter] = useState('Toutes');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const getFilteredTrips = () => {
    if (activeFilter === 'Toutes') {
      return trips;
    }
    return trips.filter(trip =>
      trip.name.toLowerCase().includes(activeFilter.toLowerCase())
    );
  };

  const filteredTrips = getFilteredTrips();
  const filters = ['Toutes', 'Initiation', 'Sportive', 'Groupe', 'Privée'];

  // Show skeletons while loading
  if (isLoading) {
    return (
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-48 animate-pulse"></div>
        </div>
        <div className="flex gap-2 mb-6">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="h-10 w-20 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1,2,3,4].map(i => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link to="/" className="text-[var(--primary)] text-xl">←</Link>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Toutes les sorties</h1>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${
              activeFilter === filter
                ? 'bg-[var(--primary)] text-white'
                : 'bg-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--primary)]/10'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <p className="text-sm text-[var(--text-secondary)] mb-4">
        {filteredTrips.length} sortie(s) trouvée(s)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTrips.map(trip => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>

      {filteredTrips.length === 0 && (
        <div className="text-center py-10 text-[var(--text-secondary)]">
          Aucune sortie trouvée pour "{activeFilter}"
        </div>
      )}
    </div>
  );
}

export default Sorties;