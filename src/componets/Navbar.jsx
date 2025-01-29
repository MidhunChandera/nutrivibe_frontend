import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Navbar() {
const navigate=useNavigate()
const [isLoggedIn, setIsLoggedIn] = useState(false); 

const checkToken = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    setIsLoggedIn(true);
  }
};
  const toshop=()=>{
 navigate('/shop')
 window.location.reload();
  }
  useEffect(() => {
    checkToken(); 
  }, []);
  const tohome=()=>{
    navigate('/')
    window.location.reload();
  }
  const tocart=()=>{
    navigate('/cart')
  
  }
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the stored token
    setIsLoggedIn(false);
    toast.success('You have successfully logged out')
  
    navigate('/login');
   
  };

  return (
    <div>
 <nav
  className="navbar fixed navbar-expand-lg  sticky"
  style={{ backgroundColor: '#fff', color: 'black' }}
>
        <div className="container">
         <h5>Nutrivibe</h5>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
         <div className='list-items'>   <li onClick={tohome}>HOME</li>
            <li onClick={toshop}>SHOP</li>
            <li>BRANDS</li></div>
             
              
          
            
            </ul>
            <form className="d-flex align-items-center" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              
              <button className="btn btn-outline-secondary me-2 d-flex">
  <FontAwesomeIcon icon={faUser} />
  <NavDropdown className="ms-2" id="basic-nav-dropdown">
    <Link  style={{ textDecoration: 'none' }} to={'/myorders'}><NavDropdown.Item href="#action/3.3">My Orders</NavDropdown.Item></Link>
    {isLoggedIn ? (
      <NavDropdown.Item  onClick={handleLogout}>
     
          Logout
       
      </NavDropdown.Item>
    ) : (
      <NavDropdown.Item>
        <Link style={{ textDecoration: 'none' }} to={'/login'}>
          Login
        </Link>
      </NavDropdown.Item>
    )}
  </NavDropdown>
</button>

              <button onClick={tocart} className="btn btn-outline-secondary">
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
