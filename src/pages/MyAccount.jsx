import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function MyAccount() {
  const { user, logout, isAuthenticated } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [success, setSuccess] = useState('');

  if (!isAuthenticated) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🔒</div>
        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Non connecté</h2>
        <p className="text-[var(--text-secondary)] mb-6">Connectez-vous pour accéder à votre compte</p>
        <Link to="/connexion" className="bg-[var(--primary)] text-white px-6 py-2 rounded-full hover:bg-[var(--primary-dark)] transition">
          Se connecter
        </Link>
      </div>
    );
  }

  const handleSave = () => {
    // Update user in localStorage
    const users = JSON.parse(localStorage.getItem('corvina_users') || '[]');
    const updatedUsers = users.map(u => {
      if (u.email === user.email) {
        return { ...u, name, email, phone };
      }
      return u;
    });
    localStorage.setItem('corvina_users', JSON.stringify(updatedUsers));
    
    // Update current user
    const updatedUser = { ...user, name, email, phone };
    localStorage.setItem('corvina_user', JSON.stringify(updatedUser));
    
    // Force page reload to update header
    window.location.reload();
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">Mon Compte</h1>
        <button
          onClick={logout}
          className="text-sm text-[var(--error)] hover:underline"
        >
          Se déconnecter
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-[var(--surface)] rounded-2xl shadow-md border border-[var(--border)] overflow-hidden mb-6">
        <div className="p-6 border-b border-[var(--border)] bg-gradient-to-r from-[var(--primary)]/5 to-transparent">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">{user?.name}</h2>
              <p className="text-sm text-[var(--text-secondary)]">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-[var(--text-primary)]">Informations personnelles</h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-sm text-[var(--primary)] hover:underline"
            >
              {isEditing ? 'Annuler' : 'Modifier'}
            </button>
          </div>

          {success && (
            <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl p-3 mb-4 text-sm">
              {success}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Nom complet</label>
              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-[var(--border)] rounded-xl px-4 py-2 bg-[var(--surface)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              ) : (
                <p className="text-[var(--text-primary)]">{user?.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-[var(--border)] rounded-xl px-4 py-2 bg-[var(--surface)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              ) : (
                <p className="text-[var(--text-primary)]">{user?.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Téléphone</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+212 XXX XXX XXX"
                  className="w-full border border-[var(--border)] rounded-xl px-4 py-2 bg-[var(--surface)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              ) : (
                <p className="text-[var(--text-secondary)]">{user?.phone || 'Non renseigné'}</p>
              )}
            </div>

            {isEditing && (
              <button
                onClick={() => {
                  handleSave();
                  setIsEditing(false);
                  setSuccess('Profil mis à jour avec succès !');
                  setTimeout(() => setSuccess(''), 3000);
                }}
                className="w-full bg-[var(--primary)] text-white rounded-full py-2 font-semibold hover:bg-[var(--primary-dark)] transition mt-4"
              >
                Enregistrer les modifications
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/mes-reservations"
          className="bg-[var(--surface)] rounded-2xl p-5 border border-[var(--border)] text-center hover:shadow-md transition"
        >
          <div className="text-3xl mb-2">🎣</div>
          <h3 className="font-bold text-[var(--text-primary)]">Mes réservations</h3>
          <p className="text-xs text-[var(--text-secondary)] mt-1">Voir vos sorties réservées</p>
        </Link>

        <Link
          to="/panier"
          className="bg-[var(--surface)] rounded-2xl p-5 border border-[var(--border)] text-center hover:shadow-md transition"
        >
          <div className="text-3xl mb-2">🛒</div>
          <h3 className="font-bold text-[var(--text-primary)]">Mon panier</h3>
          <p className="text-xs text-[var(--text-secondary)] mt-1">Voir vos articles</p>
        </Link>
      </div>
    </div>
  );
}

export default MyAccount;