function Carte() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <a href="/" className="text-[#0F2B3D] text-xl">←</a>
        <h1 className="text-2xl font-bold text-[#0F2B3D]">Carte & Météo</h1>
      </div>
      
      {/* Weather stats grid */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-3 bg-blue-50 rounded-xl">
            <div className="text-2xl mb-1">💨</div>
            <div className="text-xs text-gray-500">Vent</div>
            <div className="text-xl font-bold text-[#0F2B3D]">12 km/h</div>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl">
            <div className="text-2xl mb-1">🌊</div>
            <div className="text-xs text-gray-500">Houle</div>
            <div className="text-xl font-bold text-[#0F2B3D]">0.5 m</div>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl">
            <div className="text-2xl mb-1">💧</div>
            <div className="text-xs text-gray-500">Température eau</div>
            <div className="text-xl font-bold text-[#0F2B3D]">22°C</div>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl">
            <div className="text-2xl mb-1">🌙</div>
            <div className="text-xs text-gray-500">Marée</div>
            <div className="text-xl font-bold text-[#0F2B3D]">14h30</div>
          </div>
        </div>
      </div>
      
      {/* Map placeholder */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 mb-6">
        <div className="h-64 bg-gradient-to-b from-blue-200 to-blue-300 flex items-center justify-center relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-4xl mb-2">🗺️</div>
            <p className="text-[#0F2B3D] font-medium">Carte interactive</p>
            <p className="text-xs text-gray-600 mt-1">(Intégration Google Maps)</p>
          </div>
          {/* Fake map pins */}
          <div className="absolute top-1/4 left-1/4 text-red-500 text-xl">📍</div>
          <div className="absolute top-1/2 right-1/4 text-red-500 text-xl">📍</div>
          <div className="absolute bottom-1/4 left-1/3 text-red-500 text-xl">📍</div>
        </div>
      </div>
      
      {/* Fishing spots */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-6 bg-[#D4AF37] rounded-full"></div>
        <h2 className="text-xl font-bold text-[#0F2B3D]">Spots recommandés</h2>
      </div>
      
      <div className="space-y-3">
        <div className="bg-white rounded-xl p-4 border border-gray-100 flex justify-between items-center">
          <span className="font-medium text-[#0F2B3D]">Spot Nord</span>
          <div className="flex items-center gap-1">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-500 ml-1">(5.0)</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 flex justify-between items-center">
          <span className="font-medium text-[#0F2B3D]">Spot Plage</span>
          <div className="flex items-center gap-1">
            <span>⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-500 ml-1">(4.0)</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 flex justify-between items-center">
          <span className="font-medium text-[#0F2B3D]">Spot Rocher</span>
          <div className="flex items-center gap-1">
            <span>⭐⭐⭐⭐½</span>
            <span className="text-sm text-gray-500 ml-1">(4.5)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carte;