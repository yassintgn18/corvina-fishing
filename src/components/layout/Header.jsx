function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-5 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#0F2B3D]">
          🐟 CORVINA
        </div>
        
        {/* Navigation links (desktop) */}
        <nav className="hidden md:flex gap-6 text-gray-600">
          <a href="/" className="hover:text-[#0F2B3D]">Accueil</a>
          <a href="/sorties" className="hover:text-[#0F2B3D]">Sorties</a>
          <a href="/bateaux" className="hover:text-[#0F2B3D]">Bateaux</a>
          <a href="/boutique" className="hover:text-[#0F2B3D]">Boutique</a>
          <a href="/carte" className="hover:text-[#0F2B3D]">Carte</a>
        </nav>
        
        {/* User icon */}
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          👤
        </div>
      </div>
    </header>
  );
}

export default Header;