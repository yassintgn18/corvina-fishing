import { useState, useEffect } from 'react';
import TripCard from '../components/common/TripCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
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

  if (isLoading) {
    return <LoadingSpinner />;
  }

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

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <a href="/" className="text-[#0F2B3D] text-xl">←</a>
        <h1 className="text-2xl font-bold text-[#0F2B3D]">Toutes les sorties</h1>
      </div>
      
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${
              activeFilter === filter
                ? 'bg-[#0F2B3D] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      
      <p className="text-sm text-gray-500 mb-4">
        {filteredTrips.length} sortie(s) trouvée(s)
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTrips.map(trip => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>

      {filteredTrips.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          Aucune sortie trouvée pour "{activeFilter}"
        </div>
      )}
    </div>
  );
}

export default Sorties;