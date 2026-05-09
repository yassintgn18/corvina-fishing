import { Link } from 'react-router-dom';

function TripCard({ trip }) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push("★");
    }
    if (hasHalfStar) {
      stars.push("½");
    }
    return stars.join("");
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Image section with overlay gradient */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img 
            src={trip.image} 
            alt={trip.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#0F2B3D] text-xs font-bold px-2 py-1 rounded-full">
            {trip.duration}
        </div>
        </div>
      
      {/* Content section */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-[#0F2B3D] group-hover:text-[#1a4a6e] transition-colors">
            {trip.name}
          </h3>
          <span className="text-2xl font-bold text-[#D4AF37]">{trip.price} DH</span>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#D4AF37] text-lg tracking-wide">
            {renderStars(trip.stars)}
          </span>
          <span className="text-sm text-gray-400">({trip.stars})</span>
        </div>
        
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {trip.description}
        </p>
        
        <Link 
          to={`/trip/${trip.id}`}
          className="inline-flex items-center gap-2 text-[#0F2B3D] font-semibold text-sm group/btn hover:gap-3 transition-all"
        >
          Découvrir
          <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}

export default TripCard;