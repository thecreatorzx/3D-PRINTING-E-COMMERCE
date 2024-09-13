// src/pages/ProductPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === id)
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mt-4">
      {product ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.imageUrl}
              className="img-fluid"
              alt={product.name}
            />
          </div>
          <div className="col-md-6">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>
              <strong>${product.price}</strong>
            </p>
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <h2>Product not found!</h2>
      )}
    </div>
  );
};

export default ProductPage;
