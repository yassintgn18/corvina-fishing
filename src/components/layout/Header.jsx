import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';

function Header() {
  const { totalItems } = useCart();
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/sorties', label: 'Sorties' },
    { to: '/bateaux', label: 'Bateaux' },
    { to: '/boutique', label: 'Boutique' },
    { to: '/carte', label: 'Carte' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2964/2964847.png" 
              alt="CORVINA Fishing" 
              className="h-8 w-auto group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-bold text-[#0F2B3D] hidden sm:inline">
              CORVINA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-600 hover:text-[#0F2B3D] transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right side: Cart + User */}
          <div className="flex items-center gap-4">
            <Link to="/panier" className="relative group">
              <span className="text-2xl group-hover:scale-110 transition-transform block">🛒</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-[#D4AF37] text-[#0F2B3D] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Auth section */}
            {user ? (
              <Link 
                to="/mon-compte" 
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0F2B3D] to-[#1a4a6e] flex items-center justify-center text-white font-semibold cursor-pointer hover:scale-105 transition-transform"
              >
                {user.name?.charAt(0) || '👤'}
              </Link>
            ) : (
              <Link 
                to="/connexion" 
                className="text-[#0F2B3D] font-medium hover:underline"
              >
                Connexion
              </Link>
            )}

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-gray-600 hover:text-[#0F2B3D] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;