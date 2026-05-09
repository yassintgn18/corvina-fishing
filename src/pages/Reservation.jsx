import { useState } from 'react';

function Reservation() {
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Réservation confirmée pour ${formData.name} ! Total: ${calculateTotal()} DH`);
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
            <option>Initiation - 150 DH</option>
            <option>Sportive - 300 DH</option>
            <option>Matin - 150 DH</option>
            <option>Après-midi - 200 DH</option>
            <option>Journée Complète - 400 DH</option>
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