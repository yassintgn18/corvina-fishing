import TripCard from '../components/common/TripCard';
import { trips } from '../data/trips';

function Sorties() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <a href="/" className="text-[#0F2B3D] text-xl">←</a>
        <h1 className="text-2xl font-bold text-[#0F2B3D]">Toutes les sorties</h1>
      </div>
      
      {/* Filter chips */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
        <button className="px-4 py-2 bg-[#0F2B3D] text-white rounded-full text-sm whitespace-nowrap">Toutes</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm whitespace-nowrap">Initiation</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm whitespace-nowrap">Sportive</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm whitespace-nowrap">Groupe</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm whitespace-nowrap">Privée</button>
      </div>
      
      {/* Trips grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trips.map(trip => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}

export default Sorties;