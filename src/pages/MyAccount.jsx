import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function MyAccount() {
  const { user, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto py-8 text-center">
        <div className="text-6xl mb-4">🔒</div>
        <h2 className="text-2xl font-bold text-[#0F2B3D] mb-2">Non connecté</h2>
        <p className="text-gray-500 mb-4">Veuillez vous connecter pour accéder à votre compte</p>
        <Link to="/connexion" className="inline-block bg-[#0F2B3D] text-white rounded-full px-6 py-2">
          Se connecter
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#0F2B3D]">Mon Compte</h1>
        <button
          onClick={logout}
          className="text-red-500 hover:underline text-sm"
        >
          Se déconnecter
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-[#0F2B3D] to-[#1a4a6e] rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#0F2B3D]">{user?.name}</h2>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 mt-2">
          <p className="text-sm text-gray-400">
            Membre depuis le {new Date(user?.createdAt).toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Link
          to="/mes-reservations"
          className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
        >
          <div className="text-3xl mb-2">🎣</div>
          <h3 className="font-bold text-[#0F2B3D]">Mes réservations</h3>
          <p className="text-sm text-gray-500 mt-1">Voir vos sorties réservées</p>
        </Link>

        <Link
          to="/"
          className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
        >
          <div className="text-3xl mb-2">🛒</div>
          <h3 className="font-bold text-[#0F2B3D]">Mon panier</h3>
          <p className="text-sm text-gray-500 mt-1">Voir vos articles</p>
        </Link>
      </div>
    </div>
  );
}

export default MyAccount;