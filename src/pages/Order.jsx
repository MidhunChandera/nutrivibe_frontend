import React, { useContext, useState } from 'react';
import { storecontext } from '../context/Storecontext';
import Toptext from '../componets/Toptext';
import Navbar from '../componets/Navbar';
import axios from 'axios';

function Order() {
    const { productdata, token, cartitems } = useContext(storecontext);

    // Calculate total price
    const totalPrice = productdata.reduce((acc, item) => {
        if (cartitems[item.name] > 0) {
            return acc + item.price * cartitems[item.name];
        }
        return acc;
    }, 0);

    // Calculate total items
    const totalItems = Object.values(cartitems).reduce((acc, quantity) => acc + quantity, 0);

    // Subtotal
    const subtotal = totalPrice;

    const [addressdata, setaddressdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        house: "",
        street: "",
        city: "",
        state: "",
        pin: "",
    });

    // Place order
    const placeorder = async (event) => {
        event.preventDefault();

        if (totalItems === 0) {
            alert("Your cart is empty. Add some items to proceed.");
            return;
        }

        if (Object.values(addressdata).some((field) => field === "")) {
            alert("Please fill in all the address fields.");
            return;
        }

        const ordereditem = productdata
            .filter((item) => cartitems[item.name] > 0)
            .map((item) => ({
                name: item.name,
                image: item.image,
                price: item.price,
                total: item.price * cartitems[item.name], // Calculate the total price for this item
            }));

        const orderDetails = {
            items: ordereditem,
            address: addressdata,
            subtotal,
        };

        try {
            const response = await axios.post(
                "http://localhost:4004/api/order/place",
                orderDetails,
                { headers: { token } }
            );

            if (response.data.url) {
                window.location.href = response.data.url; // Redirect to the Stripe checkout page
            } else {
                console.error("Stripe URL not returned");
            }
        } catch (error) {
            console.error("Error initiating payment:", error);
        }
    };

    return (
        <>
            <Toptext />
            <Navbar />
            <div style={{ minHeight: '100vh' }}>
                <div className="container" style={{ marginTop: '150px' }}>
                    <div className="row">
                    <div className="col-md-6">
                                <h2
                                    style={{ fontSize: '30px' }}
                                    className="text-center mb-5 font-weight-bold"
                                >
                                    DELIVERY <span className="greentxt">INFORMATION</span>
                                </h2>
                                <form onSubmit={placeorder}>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="First Name"
                                                required
                                                value={addressdata.firstname}
                                                onChange={(e) =>
                                                    setaddressdata({
                                                        ...addressdata,
                                                        firstname: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Last Name"
                                                required
                                                value={addressdata.lastname}
                                                onChange={(e) =>
                                                    setaddressdata({
                                                        ...addressdata,
                                                        lastname: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            className="form-control"
                                            type="email"
                                            placeholder="Email Address"
                                            required
                                            value={addressdata.email}
                                            onChange={(e) =>
                                                setaddressdata({
                                                    ...addressdata,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Flat, House no, Building"
                                            required
                                            value={addressdata.house}
                                            onChange={(e) =>
                                                setaddressdata({
                                                    ...addressdata,
                                                    house: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Area, Street, Sector"
                                            required
                                            value={addressdata.street}
                                            onChange={(e) =>
                                                setaddressdata({
                                                    ...addressdata,
                                                    street: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Pincode"
                                                required
                                                value={addressdata.pin}
                                                onChange={(e) =>
                                                    setaddressdata({
                                                        ...addressdata,
                                                        pin: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="City"
                                                required
                                                value={addressdata.city}
                                                onChange={(e) =>
                                                    setaddressdata({
                                                        ...addressdata,
                                                        city: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <select
                                            className="form-select"
                                            value={addressdata.state}
                                            onChange={(e) =>
                                                setaddressdata({
                                                    ...addressdata,
                                                    state: e.target.value,
                                                })
                                            }
                                            required
                                        >
                                            <option value="" disabled>
                                                Select State
                                            </option>
                                            <option value="Alappuzha">Alappuzha</option>
                                            <option value="Ernakulam">Ernakulam</option>
                                            <option value="Idukki">Idukki</option>
                                            <option value="Kannur">Kannur</option>
                                            <option value="Kasaragod">Kasaragod</option>
                                            <option value="Kollam">Kollam</option>
                                            <option value="Kottayam">Kottayam</option>
                                            <option value="Kozhikode">Kozhikode</option>
                                            <option value="Malappuram">Malappuram</option>
                                            <option value="Palakkad">Palakkad</option>
                                            <option value="Pathanamthitta">Pathanamthitta</option>
                                            <option value="Thrissur">Thrissur</option>
                                            <option value="Trivandrum">Trivandrum</option>
                                            <option value="Wayanad">Wayanad</option>
                                        </select>
                                    </div>
                                   
                                </form>
                            </div>
                        <div className="col-md-6">
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
                                <button
                                    style={{ backgroundColor: '#262261', color: 'white' }}
                                    onClick={placeorder}
                                    className="w-100 tocartbtn"
                                >
                                    CHECKOUT
                                </button>
                            </div>
                        </div>

                       
                      
                         
                       
                    </div>
                </div>
            </div>
        </>
    );
}

export default Order;
