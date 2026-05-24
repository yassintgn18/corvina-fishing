import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Carte() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-48 animate-pulse"></div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[1,2,3,4].map(i => (
            <div key={i} className="h-24 bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse"></div>
          ))}
        </div>
        <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded-2xl animate-pulse mb-6"></div>
        <div className="space-y-3">
          {[1,2,3].map(i => (
            <div key={i} className="h-16 bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  const weatherStats = [
    { label: 'Vent', value: '12 km/h', icon: '💨', detail: 'Nord-Est' },
    { label: 'Houle', value: '0.5 m', icon: '🌊', detail: 'Direction Ouest' },
    { label: 'Température eau', value: '22°C', icon: '💧', detail: 'Claire' },
    { label: 'Marée', value: '14h30', icon: '🌙', detail: 'Pleine mer' },
  ];

  const fishingSpots = [
    { name: 'Spot Nord', rating: 5, difficulty: 'Intermédiaire', fish: 'Thon, Dorade' },
    { name: 'Spot Plage', rating: 4, difficulty: 'Débutant', fish: 'Sars, Rougets' },
    { name: 'Spot Rocher', rating: 4.5, difficulty: 'Expert', fish: 'Mérou, Loup' },
    { name: 'Spot Ouest', rating: 5, difficulty: 'Avancé', fish: 'Espadon' },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link to="/" className="text-[var(--primary)] text-2xl hover:translate-x-[-4px] transition-transform">←</Link>
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">Carte & Météo</h1>
      </div>

      {/* Weather Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {weatherStats.map((stat, idx) => (
          <div key={idx} className="bg-[var(--surface)] rounded-2xl p-4 border border-[var(--border)] shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{stat.icon}</span>
              <span className="text-sm text-[var(--text-secondary)] uppercase tracking-wide">{stat.label}</span>
            </div>
            <div className="text-2xl font-bold text-[var(--text-primary)]">{stat.value}</div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">{stat.detail}</div>
          </div>
        ))}
      </div>

      {/* Fishability Score Card */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-5 mb-8 border border-green-200 dark:border-green-800">
        <div className="flex items-center gap-3 flex-wrap justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl animate-pulse">
              🐟
            </div>
            <div>
              <div className="text-lg font-bold text-green-700 dark:text-green-400">Pêche favorable</div>
              <div className="text-sm text-green-600 dark:text-green-500">Conditions idéales pour la pêche</div>
            </div>
          </div>
          <div className="px-4 py-2 bg-green-600 rounded-full text-white text-sm font-semibold">
            Score: 92/100
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm mb-8">
        <div className="p-4 border-b border-[var(--border)] bg-[var(--background)]">
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">🗺️ Carte interactive des spots</h2>
          <p className="text-xs text-[var(--text-secondary)]">Cliquez sur un spot pour voir les détails</p>
        </div>
        <div className="relative h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30">
          {/* Map placeholder - Replace with actual map integration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-3">🗺️</div>
              <p className="text-[var(--text-secondary)]">Carte interactive</p>
              <p className="text-xs text-[var(--text-secondary)] mt-1">(Intégration Google Maps)</p>
            </div>
          </div>
          {/* Fake pins */}
          <div className="absolute top-[20%] left-[15%] text-red-500 text-2xl drop-shadow-lg animate-bounce cursor-pointer hover:scale-125 transition">📍</div>
          <div className="absolute top-[45%] left-[55%] text-red-500 text-2xl drop-shadow-lg animate-bounce delay-75 cursor-pointer hover:scale-125 transition">📍</div>
          <div className="absolute top-[65%] left-[30%] text-red-500 text-2xl drop-shadow-lg animate-bounce delay-150 cursor-pointer hover:scale-125 transition">📍</div>
          <div className="absolute top-[30%] left-[75%] text-red-500 text-2xl drop-shadow-lg animate-bounce delay-300 cursor-pointer hover:scale-125 transition">📍</div>
        </div>
      </div>

      {/* Fishing Spots Section */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-7 bg-gradient-to-b from-[var(--secondary)] to-[var(--accent)] rounded-full"></div>
        <div>
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Spots recommandés</h2>
          <p className="text-sm text-[var(--text-secondary)]">Les meilleurs endroits pour pêcher</p>
        </div>
      </div>

      <div className="space-y-3">
        {fishingSpots.map((spot, idx) => (
          <div key={idx} className="bg-[var(--surface)] rounded-2xl p-5 border border-[var(--border)] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition">
                    {spot.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <span className="text-[var(--secondary)]">{"★".repeat(Math.floor(spot.rating))}</span>
                    <span className="text-xs text-[var(--text-secondary)]">({spot.rating})</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    spot.difficulty === 'Débutant' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                    spot.difficulty === 'Intermédiaire' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {spot.difficulty}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mt-1">🐟 {spot.fish}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-sm text-[var(--primary)] font-medium hover:underline flex items-center gap-1">
                  Voir les détails
                  <span className="group-hover:translate-x-1 transition">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Safety Tips */}
      <div className="mt-8 bg-[var(--surface)] rounded-2xl p-5 border border-[var(--border)]">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">🛡️</span>
          <h3 className="font-semibold text-[var(--text-primary)]">Conseils de sécurité</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <div className="flex items-center gap-2 text-[var(--text-secondary)]">
            <span>✅</span> Vérifiez la météo avant de partir
          </div>
          <div className="flex items-center gap-2 text-[var(--text-secondary)]">
            <span>✅</span> Portez un gilet de sauvetage
          </div>
          <div className="flex items-center gap-2 text-[var(--text-secondary)]">
            <span>✅</span> Informez quelqu'un de votre sortie
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carte;