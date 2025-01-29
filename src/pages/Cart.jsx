import React, { useContext, useState } from 'react';
import Toptext from '../componets/Toptext';
import Navbar from '../componets/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { storecontext } from '../context/Storecontext';
import { Link } from 'react-router-dom';

function Cart() {
  const { productdata, cartitems, addtocart, removefromcart } = useContext(storecontext);
  console.log(cartitems);

  // Calculate total price
  const totalPrice = productdata.reduce((acc, item) => {
    if (cartitems[item.name] > 0) {
      return acc + item.price * cartitems[item.name];
    }
    return acc;
  }, 0);

  // Calculate total items
  const totalItems = Object.values(cartitems).reduce((acc, quantity) => acc + quantity, 0);

  // Define the fixed delivery fee
  const subtotal = totalPrice;

  return (
    <>
      <Toptext />
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <div className="container" style={{ marginTop: '100px' }}>
          <div className="row">
            {/* Cart Items Section */}
            <div className="col-md-6 mt-5">
              {/* Check if there are any items in the cart */}
              {totalItems > 0 ? (
                productdata.map((item) => {
                  if (cartitems[item.name] > 0) {
                    return (
                      <div key={item.name} className="card d-flex flex-row align-items-center p-3 border">
                        <img
                          style={{ width: '89px', height: '89px', marginRight: '15px' }}
                          src={item.image[0]}
                          alt={item.name}
                        />
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center">
                            <h5 className="mb-1">{item.name}</h5>
                            <button
                              className="btn btn-sm ms-auto"
                              onClick={() => removefromcart(item.name)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                          <div className="d-flex align-items-center mt-2">
                            <button
                              className="btn btn-outline-secondary btn-sm me-2"
                              onClick={() => removefromcart(item.name)}
                            >
                              -
                            </button>
                            <span className="px-2">{cartitems[item.name]}</span>
                            <button
                              className="btn btn-outline-secondary btn-sm ms-2"
                              onClick={() => addtocart(item.name)}
                            >
                              +
                            </button>
                            <h5 className="ms-4 mb-0">₹{item.price * cartitems[item.name]}</h5>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })
              ) : (
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
                <p className="text-center mt-5">Your cart is empty. Start adding items!</p>
             <Link to={'/shop'}>   <button  className="active">SHOP NOW</button></Link>
              </div>
              
              )}
            </div>

            {/* Order Summary Section */}
            <div className="col-md-6 mt-5">
              <div className="col-md-4 p-4 rounded border w-100">
                <h4 className="text-center mb-4">Order Summary</h4>
                <div className="d-flex justify-content-between mb-3">
                  <p className="mb-0">Total Items</p>
                  <p className="mb-0 fw-bold">{totalItems}</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <p className="mb-0">Total Price</p>
                  <p className="mb-0 fw-bold">₹{totalPrice}</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <p className="mb-0">Delivery Fee</p>
                  <p className="mb-0 fw-bold">₹0</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <p className="mb-0">Subtotal</p>
                  <p className="mb-0 fw-bold text-success">₹{subtotal}</p>
                </div>

                {/* Checkout Button */}
                <Link to={'/order'}>
                  <button style={{ backgroundColor: '#262261', color: 'white' }} className="w-100 tocartbtn">
                    CHECKOUT
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer */}
          <h5 className="mt-5">NUTRIVIBE: YOUR ULTIMATE DESTINATION FOR HEALTH AND WELLNESS PRODUCTS</h5>
          <p>
            If you are looking for a one-stop destination for all your health and wellness needs in India, Hyugalife is the right place to be. With a wide range of authentic and reliable products in 8 different categories, including health supplements, sports nutrition, weight management solutions, and much more, Hyugalife is your go-to platform for conscious purchases. Our platform features educational content on wellbeing and nutrition and is supported by a panel of experts to guide you through your shopping journey. You can easily shop at Hyugalife from the comfort of your home and enjoy personalised and assisted shopping that delivers your favourites right to your doorstep. Whether you're looking to improve your overall health or address specific concerns, Hyugalife has everything you need to achieve your wellness goals. So why wait? Start browsing our selection today and discover the perfect products for all your health and wellness needs!
          </p>
        </div>
      </div>
    </>
  );
}

export default Cart;
