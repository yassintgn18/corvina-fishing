import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Panier() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div>
        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="text-[#0F2B3D] text-xl">←</Link>
          <h1 className="text-2xl font-bold text-[#0F2B3D]">Mon Panier</h1>
        </div>
        <div className="text-center py-10">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-xl text-gray-600 mb-2">Votre panier est vide</h2>
          <Link to="/boutique" className="text-[#0F2B3D] underline">
            Découvrir nos produits →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link to="/" className="text-[#0F2B3D] text-xl">←</Link>
        <h1 className="text-2xl font-bold text-[#0F2B3D]">Mon Panier</h1>
        <button 
          onClick={clearCart}
          className="ml-auto text-sm text-red-500 hover:underline"
        >
          Vider le panier
        </button>
      </div>

      {/* Cart items */}
      <div className="space-y-4 mb-6">
        {cart.map(item => (
          <div key={item.id} className="bg-white rounded-2xl p-4 border border-gray-100 flex gap-4">
            {/* Product image/icon */}
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-3xl">
              {item.image || '🎣'}
            </div>
            
            {/* Product info */}
            <div className="flex-1">
              <h3 className="font-bold text-[#0F2B3D]">{item.name}</h3>
              <p className="text-[#D4AF37] font-semibold">{item.price} DH</p>
              
              {/* Quantity controls */}
              <div className="flex items-center gap-3 mt-2">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-gray-100 text-lg"
                >
                  -
                </button>
                <span className="font-medium">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-gray-100 text-lg"
                >
                  +
                </button>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="ml-auto text-red-500 text-sm hover:underline"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total and checkout */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 sticky bottom-20">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-[#0F2B3D]">Total</span>
          <span className="text-2xl font-bold text-[#D4AF37]">{totalPrice} DH</span>
        </div>
        <button className="w-full bg-[#0F2B3D] text-white rounded-full py-3 font-bold hover:bg-[#1a4a6e] transition">
          Passer à la caisse
        </button>
      </div>
    </div>
  );
}

export default Panier;