import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SkeletonCard from '../components/common/SkeletonCard';
import { boats } from '../data/boats';
import { skippers } from '../data/skippers';

function Bateaux() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
          <div className="h-9 bg-gray-300 dark:bg-gray-700 rounded w-48 animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1,2,3,4].map(i => <SkeletonCard key={i} />)}
        </div>
      </div>
    );
  }

  // Rest of your Bateaux component remains the same
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link to="/" className="text-[var(--primary)] text-2xl hover:translate-x-[-4px] transition-transform">←</Link>
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">Flotte & Skippers</h1>
      </div>

      {/* Boats section */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-7 bg-gradient-to-b from-[var(--secondary)] to-[var(--accent)] rounded-full"></div>
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Nos Bateaux</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {boats.map(boat => (
          <div key={boat.id} className="bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="h-52 overflow-hidden">
              <img src={boat.image} alt={boat.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-[var(--text-primary)]">{boat.name}</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1">{boat.capacity} · {boat.engine}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {boat.features.map((feature, idx) => (
                  <span key={idx} className="text-xs bg-[var(--primary)]/10 text-[var(--primary)] rounded-full px-2.5 py-1">✓ {feature}</span>
                ))}
              </div>
              <button className="w-full mt-5 border-2 border-[var(--primary)] text-[var(--primary)] rounded-full py-2.5 text-sm font-medium hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
                Voir détails
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Skippers section */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-7 bg-gradient-to-b from-[var(--secondary)] to-[var(--accent)] rounded-full"></div>
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Nos Skippers</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skippers.map(skipper => (
          <div key={skipper.id} className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] p-5 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/5 rounded-full flex items-center justify-center overflow-hidden">
  <img 
    src={skipper.image} 
    alt={skipper.name}
    className="w-full h-full object-cover"
    onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'; }}
  />
</div>
              <div className="flex-1">
                <div className="flex items-center flex-wrap gap-2">
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{skipper.name}</h3>
                  {skipper.certified && (
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full">Certifié</span>
                  )}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[var(--secondary)]">{"★".repeat(Math.floor(skipper.stars))}</span>
                  <span className="text-sm text-[var(--text-secondary)]">({skipper.stars})</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-1">{skipper.experience} d'expérience</p>
              </div>
            </div>
            <button className="w-full mt-4 text-[var(--primary)] text-sm font-medium hover:underline flex items-center justify-center gap-1">
              Voir avis <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bateaux;