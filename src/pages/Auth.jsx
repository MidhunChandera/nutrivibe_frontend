import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Auth = ({ register }) => {
  const loginurl = "https://nutrivibe-backend.onrender.com/api/user/login";
  const registerurl = "https://nutrivibe-backend.onrender.com/api/user/register";
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const url = register ? registerurl : loginurl;
      const response = await axios.post(url, userDetails);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        if (register) {
          toast.success("Registration successful! Please log in.");
          navigate("/login");
        } else {
          toast.success("Login successful!");
          setTimeout(() => {
            navigate('/');
            window.location.reload();
          }, 2000);
        }
      }
    } catch (err) {
      console.error("Backend error:", err.response ? err.response.data : err);

      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="container mt-5 border p-4">
        <div className="row mt-5">
          <div className="col-md-6 ">
            <img
              className="img-fluid mx-auto"
              src="https://rukminim2.flixcart.com/image/850/1000/xif0q/protein-supplement/s/l/i/protein-blends-gold-standard-100-whey-protein-powder-6072921-original-imagzz8qgfehvdzj.jpeg?q=90&crop=false"
              alt="Login Banner"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-6">
            <h1 className="text-center text-light mt-5">
              {register ? "REGISTER" : "LOGIN"}
            </h1>
            <form
              className="p-5   rounded"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <h5 className="text-center">Welcome to Nutrivibe</h5>
              <p className="text-center">
                {register
                  ? "Unlock premium supplements and take your fitness to the next level. Register now and start your journey"
                  : "Power up your performance with premium supplements. Login now to fuel your fitness journey!"}
              </p>

              {register && (
                <div className="mb-3 mt-3">
                  <input
                    type="text"
                    placeholder="Username"
                    className="form-control"
                    value={userDetails.username}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, username: e.target.value })
                    }
                    required
                  />
                </div>
              )}

              <div className="mb-3 mt-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3 mt-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  value={userDetails.password}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, password: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                {!register ? (
                  <div>
                    <button
                      style={{ backgroundColor: '#262261', color: 'white' }}
                      type="submit"
                      className="btn w-100 rounded-0"
                    >
                      Login
                    </button>
                    <p className="mt-3 text-center">
                      New User? Click here to{" "}
                      <Link to={"/register"} className="text-danger">
                        Register
                      </Link>
                    </p>
                  </div>
                ) : (
                  <div>
                    <button
                      style={{ backgroundColor: '#262261', color: 'white' }}
                      type="submit"
                      className="btn w-100 rounded-0"
                    >
                      Register
                    </button>
                    <p className="mt-3 text-center">
                      Already a User? Click here to{" "}
                      <Link to={"/login"} className="text-danger">
                        Login
                      </Link>
                    </p>
                  </div>
                )}
              </div>
              {error && <p className="text-danger text-center">{error}</p>}
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
