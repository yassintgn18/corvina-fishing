import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="relative rounded-3xl overflow-hidden mb-12">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1524704654690-b56c05a2f70c?w=1920')"
        }}
        >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B3D]/90 to-[#0F2B3D]/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 bg-[#D4AF37]/20 backdrop-blur-sm rounded-full text-[#D4AF37] text-sm font-semibold mb-4">
            🌊 Pêche sportive au Maroc
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Playfair_Display']">
            Pêchez avec les Pros
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Sorties guidées · Matériel premium · Sécurité garantie
          </p>
          <Link 
            to="/sorties" 
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0F2B3D] px-8 py-3 rounded-full font-bold hover:bg-[#B8960F] transition-all hover:gap-3"
          >
            Réserver maintenant
            <span>→</span>
          </Link>
        </div>
      </div>
      
      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path fill="#F8F6F0" fillOpacity="0.9" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default HeroSection;