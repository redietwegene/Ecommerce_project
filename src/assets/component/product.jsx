// Product.js
import React, { useEffect, useState } from "react";
// import "./Product.css";

function Product() {
  const [product, getProductdata] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(result => getProductdata(result));
  }, []);

  return (
    <div className="product-container">
      {product.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <p className="title">{item.title}</p>
          <p className="price">${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Product;
