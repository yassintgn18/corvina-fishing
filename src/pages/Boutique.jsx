import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { useEffect } from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';

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

if (isLoading) {
  return <LoadingSpinner />;
}

  // Get unique categories
  const categories = ['Tous', ...new Set(products.map(p => p.category))];

  // Filter products by search term AND category
  const filteredProducts = products.filter(product => {
    // Filter by search term (product name)
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link to="/" className="text-[#0F2B3D] text-xl">←</Link>
        <h1 className="text-2xl font-bold text-[#0F2B3D]">Boutique</h1>
      </div>
      
      {/* Search bar - NOW WORKING */}
      <input 
        type="text" 
        placeholder="Rechercher un produit..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border border-gray-200 rounded-full px-5 py-3 mb-6 focus:outline-none focus:border-[#0F2B3D]"
      />
      
      {/* Category filters */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${
              selectedCategory === cat
                ? 'bg-[#0F2B3D] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {/* Results count */}
      <p className="text-sm text-gray-500 mb-4">
        {filteredProducts.length} produit(s) trouvé(s)
      </p>
      
      {/* Products grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            <div className="h-32 bg-gray-100 overflow-hidden">
            <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
            />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-[#0F2B3D]">{product.name}</h3>
                  <span className="text-xs text-gray-400">{product.category}</span>
                </div>
                <span className="text-lg font-bold text-[#D4AF37]">{product.price} DH</span>
              </div>
              <button 
                onClick={() => addToCart(product)}
                className="w-full mt-3 bg-[#0F2B3D] text-white rounded-full py-2 text-sm font-medium hover:bg-[#1a4a6e] transition"
              >
                + Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          <div className="text-4xl mb-2">🔍</div>
          <p>Aucun produit trouvé pour "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
}

export default Boutique;