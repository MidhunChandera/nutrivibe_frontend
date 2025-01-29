import React, { useContext, useEffect, useState } from "react";
import Navbar from "../componets/Navbar";
import Toptext from "../componets/Toptext";
import { storecontext } from "../context/Storecontext";
import axios from "axios";

function Myorders() {
  const [orders, setOrders] = useState([]);
  const { token, cartitems } = useContext(storecontext);

  const fetchUserOrders = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4004/api/order/userorder",
        {},
        { headers: { token } }
      );
      setOrders(response.data); // Assuming response.data is an array of orders
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserOrders();
    }
  }, [token]);

  return (
    <>
      <Toptext />
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
        
          padding: "20px",
        }}
      >
        <div className="container" style={{ marginTop: "100px" }}>
          <h2 className="text-center mb-5 font-weight-bold">
            MY ORDERS
          </h2>

          {orders.length > 0 ? (
            orders.map((order) => (
              <div
                key={order._id}
                className="row border rounded p-4 align-items-center mb-4 shadow"
              >
                {/* Items */}
                <div className="col-md-6">
                  <h5 className="fw-bold mb-3">Items Ordered:</h5>
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="d-flex align-items-center mb-3"
                    >
                      <img
                        width="70px"
                        className="rounded me-3"
                        src={item.image}
                        alt={item.name}
                      />
                      <div>
                        <h6 className="mb-1">{item.name}</h6>
                        <p className="mb-0 text-muted">Price: ₹{item.price}</p>
                        <p className="mb-0 text-muted">
                          Qty: {cartitems[item.name] || item.qty || 1}
                        </p>
                        <p className="mb-0 text-muted">
                          Total: ₹
                          {item.total || item.price * (item.qty || 1)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery Address */}
                <div className="col-md-4">
                  <h6 className="fw-bold">Delivery Address:</h6>
                  <p className="mb-1">
                    {order.address.firstname} {order.address.lastname}
                  </p>
                  <p className="mb-1">{order.address.house}</p>
                  <p className="mb-1">{order.address.street}</p>
                  <p className="mb-1">
                    {order.address.city}, {order.address.state}
                  </p>
                  <p className="mb-0">Phone: {order.address.phone}</p>
                </div>

                {/* Status and Actions */}
                <div className="col-md-2 text-center">
                  <span
                    className={`btn w-100 mb-3 mt-3 ${
                      order.status === "Delivered"
                        ? "btn-success"
                        : "btn-warning"
                    }`}
                  >
                    {order.status}
                  </span>
                  <button className="btn btn-danger w-100">Cancel Order</button>
               
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No orders found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Myorders;
