import { boats } from '../data/boats';
import { skippers } from '../data/skippers';

function Bateaux() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <a href="/" className="text-[#0F2B3D] text-xl">←</a>
        <h1 className="text-2xl font-bold text-[#0F2B3D]">Flotte & Skippers</h1>
      </div>
      
      {/* Boats section */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-6 bg-[#D4AF37] rounded-full"></div>
        <h2 className="text-xl font-bold text-[#0F2B3D]">Nos Bateaux</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {boats.map(boat => (
          <div key={boat.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                    src={boat.image} 
                    alt={boat.name}
                    className="w-full h-full object-cover"
                />
                </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#0F2B3D]">{boat.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{boat.capacity} · {boat.engine}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {boat.features.map((feature, idx) => (
                  <span key={idx} className="text-xs bg-gray-100 rounded-full px-2 py-1">✓ {feature}</span>
                ))}
              </div>
              <button className="w-full mt-4 border border-[#0F2B3D] text-[#0F2B3D] rounded-full py-2 text-sm font-medium hover:bg-[#0F2B3D] hover:text-white transition">
                Voir détails
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Skippers section */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-6 bg-[#D4AF37] rounded-full"></div>
        <h2 className="text-xl font-bold text-[#0F2B3D]">Nos Skippers</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skippers.map(skipper => (
          <div key={skipper.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 p-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                {skipper.image}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-[#0F2B3D]">{skipper.name}</h3>
                  {skipper.certified && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Certifié</span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span>{"⭐".repeat(Math.floor(skipper.stars))}</span>
                  <span className="text-gray-500">({skipper.stars})</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">{skipper.experience} d'expérience</p>
              </div>
            </div>
            <button className="w-full mt-4 text-[#0F2B3D] text-sm font-medium hover:underline">
              Voir avis →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bateaux;