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
import HeroSection from './components/home/HeroSection';
import Login from './pages/Login';
import Register from './pages/Register';
import MyAccount from './pages/MyAccount';
import MyBookings from './pages/MyBookings';



function HomePage() {
  const featuredTrips = trips.slice(0, 2);
  
  return (
    <>
       <HeroSection />
      
      {/* Weather card */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="font-semibold text-green-700">Conditions favorables</span>
          <span className="text-sm text-gray-500 ml-auto">Mise à jour il y a 5 min</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-center">
          <div><span className="text-gray-500 text-sm">Vent</span><br />12 km/h</div>
          <div><span className="text-gray-500 text-sm">Houle</span><br />0.5 m</div>
          <div><span className="text-gray-500 text-sm">Eau</span><br />22°C</div>
          <div><span className="text-gray-500 text-sm">Marée</span><br />14h30</div>
        </div>
      </div>
      
      {/* Nos Sorties section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-[#D4AF37] rounded-full"></div>
          <h2 className="text-xl font-bold text-[#0F2B3D]">Nos Sorties</h2>
        </div>
        <a href="/sorties" className="text-sm text-[#0F2B3D] hover:underline">Voir tout →</a>
      </div>
      
      {/* Trip cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredTrips.map(trip => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#F8F6F0] flex flex-col">
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
          
        </Routes>
      </main>
      
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;