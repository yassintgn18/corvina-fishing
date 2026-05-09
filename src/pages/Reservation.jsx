import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { trips } from '../data/trips';
import { useAuth } from '../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';

function Reservation() {
    const [searchParams] = useSearchParams();
    const tripId = searchParams.get('trip');
    const preselectedTrip = tripId ? trips.find(t => t.id === parseInt(tripId)) : null;
  const [formData, setFormData] = useState({
    tripType: 'Initiation',
    date: '',
    timeSlot: 'Matin',
    persons: 2,
    name: '',
    phone: ''
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
const { user } = useAuth(); // Add at top inside component

// Replace the alert in handleSubmit with:
const handleSubmit = (e) => {
  e.preventDefault();
  
  if (!user) {
    alert('Veuillez vous connecter pour réserver');
    navigate('/connexion');
    return;
  }

  const newBooking = {
    id: Date.now(),
    userId: user.id,
    tripId: selectedTrip?.id || 1,
    tripName: selectedTrip?.name || formData.tripType,
    date: formData.date,
    timeSlot: formData.timeSlot,
    persons: formData.persons,
    totalPrice: calculateTotal(),
    createdAt: new Date().toISOString()
  };

  const existingBookings = JSON.parse(localStorage.getItem('corvina_bookings') || '[]');
  existingBookings.push(newBooking);
  localStorage.setItem('corvina_bookings', JSON.stringify(existingBookings));

  alert(`Réservation confirmée !`);
  navigate('/mes-reservations');
};
  
  const calculateTotal = () => {
    const prices = { Initiation: 150, Sportive: 300, Matin: 150, 'Après-midi': 200, 'Journée Complète': 400 };
    return (prices[formData.tripType] || 150) * formData.persons;
  };
  
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <a href="/" className="text-[#0F2B3D] text-xl">←</a>
        <h1 className="text-2xl font-bold text-[#0F2B3D]">Réservation</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Type de sortie */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Type de sortie</label>
         <select 
            name="tripType"
            value={formData.tripType}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0F2B3D]"
            >
            {trips.map(t => (
                <option key={t.id} selected={preselectedTrip?.id === t.id}>
                {t.name} - {t.price} DH
                </option>
            ))}
            </select>
        </div>
        
        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input 
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0F2B3D]"
          />
        </div>
        
        {/* Créneau */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Créneau</label>
          <div className="flex gap-3">
            {['Matin', 'Après-midi', 'Journée'].map(slot => (
              <label key={slot} className="flex items-center gap-2">
                <input 
                  type="radio"
                  name="timeSlot"
                  value={slot}
                  checked={formData.timeSlot === slot}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#0F2B3D]"
                />
                <span className="text-sm">{slot}</span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Nombre de personnes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de personnes</label>
          <div className="flex items-center gap-4">
            <button 
              type="button"
              onClick={() => setFormData({...formData, persons: Math.max(1, formData.persons - 1)})}
              className="w-10 h-10 rounded-full bg-gray-100 text-xl font-bold"
            >-</button>
            <span className="text-xl font-medium w-8 text-center">{formData.persons}</span>
            <button 
              type="button"
              onClick={() => setFormData({...formData, persons: formData.persons + 1})}
              className="w-10 h-10 rounded-full bg-gray-100 text-xl font-bold"
            >+</button>
          </div>
        </div>
        
        {/* Nom complet */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
          <input 
            type="text"
            name="name"
            placeholder="Votre nom et prénom"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0F2B3D]"
          />
        </div>
        
        {/* Téléphone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
          <input 
            type="tel"
            name="phone"
            placeholder="+212 XXX XXX XXX"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0F2B3D]"
          />
        </div>
        
        {/* Total */}
        <div className="bg-blue-50 rounded-xl p-4 flex justify-between items-center">
          <span className="font-bold text-[#0F2B3D]">Total</span>
          <span className="text-2xl font-bold text-[#0F2B3D]">{calculateTotal()} DH</span>
        </div>
        
        {/* Submit button */}
        <button 
          type="submit"
          className="w-full bg-[#0F2B3D] text-white rounded-full py-3 font-bold text-lg hover:bg-[#1a4a6e] transition"
        >
          CONFIRMER
        </button>
      </form>
    </div>
  );
}

export default Reservation;