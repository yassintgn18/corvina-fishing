import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import EmptyState from '../components/ui/EmptyState';
import SkeletonCard from '../components/common/SkeletonCard';

function Panier() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-48 animate-pulse"></div>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-[var(--surface)] rounded-2xl p-4 border border-[var(--border)] flex gap-4">
              <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse"></div>
              <div className="flex-1">
                <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-32 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div>
        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="text-[var(--primary)] text-xl">←</Link>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Mon Panier</h1>
        </div>
        <EmptyState
          icon="🛒"
          title="Votre panier est vide"
          message="Ajoutez des produits depuis notre boutique"
          buttonText="Découvrir nos produits"
          buttonLink="/boutique"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link to="/" className="text-[var(--primary)] text-xl">←</Link>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Mon Panier</h1>
        <button
          onClick={clearCart}
          className="ml-auto text-sm text-[var(--error)] hover:underline"
        >
          Vider le panier
        </button>
      </div>

      <div className="space-y-4 mb-6">
        {cart.map(item => (
          <div key={item.id} className="bg-[var(--surface)] rounded-2xl p-4 border border-[var(--border)] flex gap-4">
            {/* Product image - FIXED */}
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
              {item.image && item.image.startsWith('http') ? (
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/512/2964/2964847.png'; }}
                />
              ) : (
                <span className="text-3xl">{item.image || '🎣'}</span>
              )}
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-[var(--text-primary)]">{item.name}</h3>
              <p className="text-[var(--secondary)] font-semibold">{item.price} DH</p>

              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-[var(--border)] text-lg hover:bg-[var(--primary)]/10 transition"
                >
                  -
                </button>
                <span className="font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-[var(--border)] text-lg hover:bg-[var(--primary)]/10 transition"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-auto text-[var(--error)] text-sm hover:underline"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[var(--surface)] rounded-2xl p-4 border border-[var(--border)] sticky bottom-20">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-[var(--text-primary)]">Total</span>
          <span className="text-2xl font-bold text-[var(--secondary)]">{totalPrice} DH</span>
        </div>
        <button 
  onClick={() => {
    if (cart.length > 0) {
      alert(`✅ Commande confirmée !\n\nTotal: ${totalPrice} DH\n\nUn email de confirmation vous sera envoyé.`);
      clearCart();
    }
  }}
  className="w-full bg-[var(--primary)] text-white rounded-full py-3 font-bold hover:bg-[var(--primary-dark)] transition"
>
  Passer à la caisse
</button>
      </div>
    </div>
  );
}

export default Panier;