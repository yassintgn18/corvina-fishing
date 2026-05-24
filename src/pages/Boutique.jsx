import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SkeletonCard from '../components/common/SkeletonCard';
import { products } from '../data/products';

function Boutique() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['Tous', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Show skeletons while loading
  if (isLoading) {
    return (
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-48 animate-pulse"></div>
        </div>
        <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-full mb-6 animate-pulse"></div>
        <div className="flex gap-2 mb-6">
          {[1,2,3,4].map(i => (
            <div key={i} className="h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link to="/" className="text-[var(--primary)] text-xl">←</Link>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Boutique</h1>
      </div>

      <input
        type="text"
        placeholder="Rechercher un produit..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border border-[var(--border)] rounded-full px-5 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-[var(--surface)] text-[var(--text-primary)]"
      />

      <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${
              selectedCategory === cat
                ? 'bg-[var(--primary)] text-white'
                : 'bg-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--primary)]/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-sm text-[var(--text-secondary)] mb-4">
        {filteredProducts.length} produit(s) trouvé(s)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-[var(--surface)] rounded-2xl shadow-sm overflow-hidden border border-[var(--border)]">
            <div className="h-32 bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">{product.name}</h3>
                  <span className="text-xs text-[var(--text-secondary)]">{product.category}</span>
                </div>
                <span className="text-lg font-bold text-[var(--secondary)]">{product.price} DH</span>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="w-full mt-3 bg-[var(--primary)] text-white rounded-full py-2 text-sm font-medium hover:bg-[var(--primary-dark)] transition"
              >
                + Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-10 text-[var(--text-secondary)]">
          <div className="text-4xl mb-2">🔍</div>
          <p>Aucun produit trouvé pour "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
}

export default Boutique;