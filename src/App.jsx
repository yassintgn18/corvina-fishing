import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import BottomNav from './components/layout/BottomNav';
import Footer from './components/layout/Footer';
import TripCard from './components/common/TripCard';
import Sorties from './pages/Sorties';
import { trips } from './data/trips';
import Bateaux from './pages/Bateaux';
import Boutique from './pages/Boutique';
import Carte from './pages/Carte';
import Reservation from './pages/Reservation';
import Panier from './pages/Panier';
import TripDetail from './pages/TripDetail';
import FeaturesSection from './components/home/FeaturesSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import CTASection from './components/home/CTASection';
import Login from './pages/Login';
import Register from './pages/Register';
import MyAccount from './pages/MyAccount';
import MyBookings from './pages/MyBookings';
import NotFound from './pages/NotFound';


function HomePage() {
  const featuredTrips = trips.slice(0, 3);

  return (
    <>
     {/* Hero Section with Premium Background Image */}
<div className="relative rounded-3xl overflow-hidden mb-16 min-h-[500px] flex items-center">
  {/* Background Image - Replace this URL with any image you want */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ 
      backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600')",
      backgroundPosition: "center 30%"
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50"></div>
  </div>
  
  <div className="relative z-10 py-20 px-6 text-center max-w-4xl mx-auto">
    <div className="inline-block px-4 py-1.5 bg-[var(--secondary)]/20 backdrop-blur-sm rounded-full text-[var(--secondary)] text-sm font-semibold mb-5 border border-[var(--secondary)]/30">
      🌊 Pêche sportive au Maroc
    </div>
    <h1 className="text-4xl md:text-7xl font-bold text-white mb-5 drop-shadow-lg tracking-tight">Pêchez avec les Pros</h1>
    <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">Sorties guidées · Matériel premium · Sécurité garantie</p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/sorties" className="inline-flex items-center justify-center gap-2 bg-[var(--secondary)] text-[var(--text-primary)] px-8 py-3 rounded-full font-bold hover:bg-[var(--secondary-dark)] transition-all hover:gap-3 shadow-lg">
        Réserver maintenant →
      </a>
      <a href="/bateaux" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold border border-white/30 hover:bg-white/20 transition-all">
        Découvrir nos bateaux
      </a>
    </div>
  </div>
</div>

      {/* Stats Bar */}
      <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] p-5 mb-12 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-[var(--primary)]">500+</div>
            <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wide">Sorties organisées</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[var(--primary)]">98%</div>
            <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wide">Clients satisfaits</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[var(--primary)]">15+</div>
            <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wide">Skippers experts</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[var(--primary)]">24/7</div>
            <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wide">Support client</div>
          </div>
        </div>
      </div>

      {/* Weather Card */}
      <div className="bg-gradient-to-r from-[var(--surface)] to-[var(--background)] border border-[var(--border)] rounded-2xl p-5 mb-12 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-semibold text-green-600 dark:text-green-400">Conditions favorables</span>
          <span className="text-xs text-[var(--text-secondary)] ml-auto">Mise à jour en direct</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-center">
          <div className="p-2 rounded-xl bg-[var(--primary)]/5">
            <div className="text-[var(--text-secondary)] text-xs uppercase tracking-wide mb-1">Vent</div>
            <div className="text-xl font-bold text-[var(--text-primary)]">12 km/h</div>
          </div>
          <div className="p-2 rounded-xl bg-[var(--primary)]/5">
            <div className="text-[var(--text-secondary)] text-xs uppercase tracking-wide mb-1">Houle</div>
            <div className="text-xl font-bold text-[var(--text-primary)]">0.5 m</div>
          </div>
          <div className="p-2 rounded-xl bg-[var(--primary)]/5">
            <div className="text-[var(--text-secondary)] text-xs uppercase tracking-wide mb-1">Eau</div>
            <div className="text-xl font-bold text-[var(--text-primary)]">22°C</div>
          </div>
          <div className="p-2 rounded-xl bg-[var(--primary)]/5">
            <div className="text-[var(--text-secondary)] text-xs uppercase tracking-wide mb-1">Marée</div>
            <div className="text-xl font-bold text-[var(--text-primary)]">14h30</div>
          </div>
        </div>
      </div>

      {/* Nos Sorties section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-[var(--secondary)] to-[var(--accent)] rounded-full"></div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Nos Sorties</h2>
            <p className="text-sm text-[var(--text-secondary)]">Les meilleures expériences de pêche</p>
          </div>
        </div>
        <a href="/sorties" className="text-sm text-[var(--primary)] font-medium hover:underline flex items-center gap-1">
          Voir tout
          <span>→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {featuredTrips.map(trip => <TripCard key={trip.id} trip={trip} />)}
      </div>

      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex flex-col transition-colors duration-300">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-5 py-8 w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sorties" element={<Sorties />} />
          <Route path="/bateaux" element={<Bateaux />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/carte" element={<Carte />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/trip/:id" element={<TripDetail />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<Register />} />
          <Route path="/mon-compte" element={<MyAccount />} />
          <Route path="/mes-reservations" element={<MyBookings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;