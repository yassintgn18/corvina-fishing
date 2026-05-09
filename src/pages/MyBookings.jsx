import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { trips } from '../data/trips';

function MyBookings() {
  const { user, isAuthenticated } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user) {
      const allBookings = JSON.parse(localStorage.getItem('corvina_bookings') || '[]');
      const userBookings = allBookings.filter(b => b.userId === user.id);
      setBookings(userBookings);
    }
  }, [user]);

  const cancelBooking = (bookingId) => {
    const allBookings = JSON.parse(localStorage.getItem('corvina_bookings') || '[]');
    const updatedBookings = allBookings.filter(b => b.id !== bookingId);
    localStorage.setItem('corvina_bookings', JSON.stringify(updatedBookings));
    setBookings(bookings.filter(b => b.id !== bookingId));
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto py-8 text-center">
        <div className="text-6xl mb-4">🔒</div>
        <h2 className="text-2xl font-bold text-[#0F2B3D] mb-2">Non connecté</h2>
        <p className="text-gray-500 mb-4">Connectez-vous pour voir vos réservations</p>
        <Link to="/connexion" className="inline-block bg-[#0F2B3D] text-white rounded-full px-6 py-2">
          Se connecter
        </Link>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-8 text-center">
        <div className="text-6xl mb-4">📅</div>
        <h2 className="text-2xl font-bold text-[#0F2B3D] mb-2">Aucune réservation</h2>
        <p className="text-gray-500 mb-4">Vous n'avez pas encore réservé de sortie</p>
        <Link to="/sorties" className="inline-block bg-[#0F2B3D] text-white rounded-full px-6 py-2">
          Découvrir nos sorties
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-[#0F2B3D] mb-6">Mes réservations</h1>

      <div className="space-y-4">
        {bookings.map((booking) => {
          const trip = trips.find(t => t.id === booking.tripId);
          return (
            <div key={booking.id} className="bg-white rounded-2xl shadow-md p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-[#0F2B3D]">{trip?.name || 'Sortie'}</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {booking.date} • {booking.timeSlot}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {booking.persons} personne(s)
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[#D4AF37]">{booking.totalPrice} DH</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    Confirmée
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between">
                <Link
                  to={`/trip/${booking.tripId}`}
                  className="text-[#0F2B3D] font-medium text-sm hover:underline"
                >
                  Voir le détail →
                </Link>
                <button
                  onClick={() => cancelBooking(booking.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Annuler la réservation
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyBookings;