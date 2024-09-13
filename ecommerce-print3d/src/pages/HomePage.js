import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice"; // Import addToCart action
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import "./HomePage.css";
const phrases = [
  "The best way to predict the future is to invent it. - Alan Kay",
  "3D printing is a game changer for design and manufacturing.",
  "Innovation is the ability to see change as an opportunity, not a threat.",
  "With 3D printing, you can create almost anything you can imagine.",
];

// Example products
const exampleProducts = [
  {
    id: 1,
    name: "Custom Gear",
    price: 29.99,
    imageUrl: "https://via.placeholder.com/300x200?text=Custom+Gear",
  },
  {
    id: 2,
    name: "3D Printed Vase",
    price: 19.99,
    imageUrl: "https://via.placeholder.com/300x200?text=3D+Printed+Vase",
  },
  {
    id: 3,
    name: "Model Airplane",
    price: 49.99,
    imageUrl: "https://via.placeholder.com/300x200?text=Model+Airplane",
  },
];

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // For testing purposes, use example products if API fails or isn't available
        dispatch(setProducts(exampleProducts));
      } catch (error) {
        console.error("Failed to fetch products", error);
        dispatch(setProducts(exampleProducts)); // Use example data in case of error
      }
    };
    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhrase((prevPhrase) => {
        const currentIndex = phrases.indexOf(prevPhrase);
        const nextIndex = (currentIndex + 1) % phrases.length;
        return phrases[nextIndex];
      });
    }, 5000); // Change phrase every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`Added ${product.name} to cart!`, {
      position: "top-right", // Corrected usage of position
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="container mt-4">
      <header className="home-header text-center mb-4">
        <h1>Welcome to 3D Parts Shop</h1>
        <p className="lead">
          Explore our collection of custom 3D printed parts and components.
        </p>
        <img
          src="https://via.placeholder.com/1200x400?text=Innovative+3D+Printing"
          alt="3D Printing Showcase"
          className="img-fluid mb-4"
        />
        <blockquote className="blockquote text-center">
          <p className="mb-0">{currentPhrase}</p>
        </blockquote>
      </header>
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="Card col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={
                    product.imageUrl ||
                    "https://via.placeholder.com/300x200?text=Product+Image"
                  } // Placeholder image
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                  <button
                    className="btn btn-secondary mt-2"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products available at the moment.</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomePage;
