import { Link } from 'react-router-dom';

function TripCard({ trip }) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = [];
    for (let i = 0; i < fullStars; i++) stars.push("★");
    if (hasHalfStar) stars.push("½");
    return stars.join("");
  };

  return (
    <div className="group relative bg-[var(--surface)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[var(--border)]">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img src={trip.image} alt={trip.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute top-3 right-3 bg-[var(--secondary)] text-[var(--primary)] text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
          {trip.duration}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors line-clamp-1">
            {trip.name}
          </h3>
          <span className="text-xl font-bold text-[var(--secondary)] whitespace-nowrap">{trip.price} DH</span>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[var(--secondary)] text-sm tracking-wide">{renderStars(trip.stars)}</span>
          <span className="text-xs text-[var(--text-secondary)]">({trip.stars})</span>
        </div>
        
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 line-clamp-2">
          {trip.description}
        </p>
        
        <Link to={`/trip/${trip.id}`} className="inline-flex items-center gap-2 text-[var(--primary)] font-medium text-sm group-hover:gap-3 transition-all">
          Découvrir
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}

export default TripCard;