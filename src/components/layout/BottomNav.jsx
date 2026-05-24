import { Link, useLocation } from 'react-router-dom';

function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: '🏠', label: 'Accueil' },
    { path: '/sorties', icon: '🎣', label: 'Sorties' },
    { path: '/bateaux', icon: '⛵', label: 'Bateaux' },
    { path: '/boutique', icon: '🛒', label: 'Boutique' },
    { path: '/carte', icon: '🗺️', label: 'Carte' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[var(--surface)]/95 backdrop-blur-md border-t border-[var(--border)] py-2 px-4 md:hidden z-50 safe-bottom">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 py-1.5 px-2 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'text-[var(--primary)]' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--primary)]'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className={`text-[11px] font-medium ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;