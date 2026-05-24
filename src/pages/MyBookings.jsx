import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import EmptyState from '../components/ui/EmptyState';
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
      <EmptyState 
        icon="🔒"
        title="Non connecté"
        message="Connectez-vous pour voir vos réservations"
        buttonText="Se connecter"
        buttonLink="/connexion"
      />
    );
  }

  if (bookings.length === 0) {
    return (
      <EmptyState 
        icon="📅"
        title="Aucune réservation"
        message="Vous n'avez pas encore réservé de sortie"
        buttonText="Découvrir nos sorties"
        buttonLink="/sorties"
      />
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6">Mes réservations</h1>

      <div className="space-y-4">
        {bookings.map((booking) => {
          const trip = trips.find(t => t.id === booking.tripId);
          return (
            <div key={booking.id} className="bg-[var(--surface)] rounded-2xl shadow-md p-5 border border-[var(--border)]">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{trip?.name || 'Sortie'}</h3>
                  <p className="text-[var(--text-secondary)] text-sm mt-1">
                    {booking.date} • {booking.timeSlot}
                  </p>
                  <p className="text-[var(--text-secondary)] text-sm">
                    {booking.persons} personne(s)
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[var(--secondary)]">{booking.totalPrice} DH</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
                    Confirmée
                  </span>
                </div>
              </div>

              <div className="border-t border-[var(--border)] mt-4 pt-4 flex justify-between">
                <Link
                  to={`/trip/${booking.tripId}`}
                  className="text-[var(--primary)] font-medium text-sm hover:underline"
                >
                  Voir le détail →
                </Link>
                <button
                  onClick={() => cancelBooking(booking.id)}
                  className="text-[var(--error)] text-sm hover:underline"
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