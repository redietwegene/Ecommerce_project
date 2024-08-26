import React, { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(result => setProducts(result));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
            <div>
              <div className="font-semibold text-lg">{product.title}</div>
              <p className="text-gray-700">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
