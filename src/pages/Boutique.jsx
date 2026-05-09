import { products } from '../data/products';

function Boutique() {
  // Get unique categories
  const categories = [...new Set(products.map(p => p.category))];
  
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <a href="/" className="text-[#0F2B3D] text-xl">←</a>
        <h1 className="text-2xl font-bold text-[#0F2B3D]">Boutique</h1>
      </div>
      
      {/* Search bar */}
      <input 
        type="text" 
        placeholder="Rechercher un produit..." 
        className="w-full border border-gray-200 rounded-full px-5 py-3 mb-6 focus:outline-none focus:border-[#0F2B3D]"
      />
      
      {/* Categories */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-6 bg-[#D4AF37] rounded-full"></div>
        <h2 className="text-xl font-bold text-[#0F2B3D]">Catégories</h2>
      </div>
      
      <div className="grid grid-cols-4 gap-3 mb-8">
        {categories.map(cat => (
          <div key={cat} className="bg-white rounded-xl p-3 text-center border border-gray-100">
            <div className="text-2xl mb-1">
              {cat === "Cannes" && "🎣"}
              {cat === "Moulinets" && "🎯"}
              {cat === "Appâts" && "🐟"}
              {cat === "Vêtements" && "🧥"}
            </div>
            <span className="text-xs text-gray-600">{cat}</span>
          </div>
        ))}
      </div>
      
      {/* Products grid */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-6 bg-[#D4AF37] rounded-full"></div>
        <h2 className="text-xl font-bold text-[#0F2B3D]">Produits</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-5xl">
              {product.image}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-[#0F2B3D]">{product.name}</h3>
                <span className="text-lg font-bold text-[#D4AF37]">{product.price} DH</span>
              </div>
              <button className="w-full mt-3 bg-[#0F2B3D] text-white rounded-full py-2 text-sm font-medium hover:bg-[#1a4a6e] transition">
                + Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Boutique;