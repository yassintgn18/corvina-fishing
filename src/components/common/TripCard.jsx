function TripCard({ trip }) {
  // Helper function to render stars based on rating (0-5)
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

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
      {/* Image placeholder */}
      <div className="h-40 bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center text-4xl">
        {trip.image || "🎣"}
      </div>
      
      {/* Card content */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-[#0F2B3D]">{trip.name}</h3>
          <span className="text-xl font-bold text-[#D4AF37]">{trip.price} DH</span>
        </div>
        
        <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
          <span>{renderStars(trip.stars)}</span>
          <span>({trip.stars})</span>
        </div>
        
        <p className="text-sm text-gray-500 mt-2">{trip.description}</p>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs bg-gray-100 rounded-full px-3 py-1 text-gray-600">
            ⏱️ {trip.duration}
          </span>
          <button className="text-[#0F2B3D] font-medium text-sm hover:underline">
            Détails →
          </button>
        </div>
      </div>
    </div>
  );
}

export default TripCard;