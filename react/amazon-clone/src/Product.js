import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
        </div>
      </div>
      <img
        src="data:image/png;base64,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"
        alt=""
      />

      <button>Add to basket</button>
    </div>
  );
}

export default Product;
