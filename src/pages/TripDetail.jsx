import { useParams, Link } from 'react-router-dom';
import { trips } from '../data/trips';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';

function TripDetail() {
  // Get the trip ID from the URL
  const { id } = useParams();
  
  // Find the trip with matching ID
  const trip = trips.find(t => t.id === parseInt(id));

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

  // Helper function to render stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push("⭐");
    }
    if (hasHalfStar) {
      stars.push("½⭐");
    }
    return stars.join(" ");
  };

  // If trip not found, show error
  if (!trip) {
    return (
      <div>
        <div className="flex items-center gap-4 mb-6">
          <Link to="/sorties" className="text-[#0F2B3D] text-xl">←</Link>
          <h1 className="text-2xl font-bold text-[#0F2B3D]">Sortie non trouvée</h1>
        </div>
        <p className="text-gray-500">Désolé, cette sortie n'existe pas.</p>
        <Link to="/sorties" className="text-[#0F2B3D] underline mt-4 inline-block">
          Retour aux sorties →
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Back button */}
      <div className="flex items-center gap-4 mb-6">
        <Link to="/sorties" className="text-[#0F2B3D] text-xl">←</Link>
        <h1 className="text-2xl font-bold text-[#0F2B3D]">Détails de la sortie</h1>
      </div>

      {/* Main image/icon */}
      <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl h-48 flex items-center justify-center text-6xl mb-6">
        {trip.image || "🎣"}
      </div>

      {/* Title and price */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-[#0F2B3D]">{trip.name}</h2>
          <div className="flex items-center gap-2 mt-1">
            <span>{renderStars(trip.stars)}</span>
            <span className="text-gray-500">({trip.stars})</span>
          </div>
        </div>
        <span className="text-3xl font-bold text-[#D4AF37]">{trip.price} DH</span>
      </div>

      {/* Duration badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-gray-100 rounded-full px-3 py-1 text-sm">
          ⏱️ {trip.duration}
        </span>
        <span className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm">
          ✓ Places disponibles
        </span>
      </div>

      {/* Description */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 mb-6">
        <h3 className="font-bold text-[#0F2B3D] mb-3">Description</h3>
        <p className="text-gray-600 leading-relaxed">{trip.description}</p>
      </div>

      {/* What's included */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 mb-6">
        <h3 className="font-bold text-[#0F2B3D] mb-3">Ce qui est inclus</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-gray-600">
            <span className="text-green-500">✓</span> Matériel de pêche (canne, moulinet, appâts)
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <span className="text-green-500">✓</span> Skipper expérimenté
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <span className="text-green-500">✓</span> Gilet de sauvetage
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <span className="text-green-500">✓</span> Eau et rafraîchissements
          </li>
        </ul>
      </div>

      {/* Reserve button */}
      <Link 
        to={`/reservation?trip=${trip.id}`}
        className="block w-full bg-[#0F2B3D] text-white text-center rounded-full py-3 font-bold text-lg hover:bg-[#1a4a6e] transition mb-6"
      >
        Réserver maintenant
      </Link>
    </div>
  );
}

export default TripDetail;