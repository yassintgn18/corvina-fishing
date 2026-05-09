import { Link } from 'react-router-dom';

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 md:hidden z-50">
      <div className="flex justify-around">
        <Link to="/" className="flex flex-col items-center text-[#0F2B3D]">
          <span className="text-xl">🏠</span>
          <span className="text-xs mt-1">Accueil</span>
        </Link>
        <Link to="/sorties" className="flex flex-col items-center text-gray-400">
          <span className="text-xl">🎣</span>
          <span className="text-xs mt-1">Sorties</span>
        </Link>
        <Link to="/bateaux" className="flex flex-col items-center text-gray-400">
          <span className="text-xl">⛵</span>
          <span className="text-xs mt-1">Bateaux</span>
        </Link>
        <Link to="/boutique" className="flex flex-col items-center text-gray-400">
          <span className="text-xl">🛒</span>
          <span className="text-xs mt-1">Boutique</span>
        </Link>
        <Link to="/carte" className="flex flex-col items-center text-gray-400">
          <span className="text-xl">🗺️</span>
          <span className="text-xs mt-1">Carte</span>
        </Link>
      </div>
    </nav>
  );
}

export default BottomNav;