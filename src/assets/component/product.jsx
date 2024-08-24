import React, { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(result => setProducts(result));
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div className="bg-white rounded overflow-hidden shadow-lg p-4" key={product.id}>
            <img className="w-full h-48 object-cover mb-4" src={product.image} alt={product.title} />
            <div className="px-4 py-2">
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <p className="text-gray-700 text-base">${product.price}</p>
              <button
                className="bg-yellow-200 hover:bg-yellow-300 text-gray-800 font-bold py-2 px-4 rounded mt-4 w-full"
                onClick={() => openModal(product)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
            <img className="w-full h-64 object-cover mb-4" src={selectedProduct.image} alt={selectedProduct.title} />
            <p className="text-gray-700 text-base mb-4">${selectedProduct.price}</p>
            <p className="text-gray-700 text-base mb-4">{selectedProduct.description}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
