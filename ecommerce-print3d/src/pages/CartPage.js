import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, adjustQuantity } from "../redux/slices/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import "./CartPage.css";
import { FaOpencart } from "react-icons/fa6";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
    toast.info("Item removed from cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleQuantityChange = (itemId, quantity) => {
    if (quantity > 0) {
      dispatch(adjustQuantity({ id: itemId, quantity }));
      toast.success("Quantity updated", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="cart-container mt-4">
      <h2 className="text-center">Your Cart</h2>
      <div className="row">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div className="cartCard col-md-4 mb-4" key={item.id}>
              <div className="cart-card h-100">
                <div className="cart-card-body">
                  <h5 className="cart-card-title">{item.name}</h5>
                  <p className="cart-card-text">
                    ${item.price} x {item.quantity}
                  </p>
                  <div className="cart-btn-container">
                    <button
                      className="btn cart-btn-secondary"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="btn cart-btn-secondary"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="btn cart-btn-danger"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">
            <FaOpencart size={"10rem"} />
            <br />
            Your cart is empty.
          </p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default CartPage;
