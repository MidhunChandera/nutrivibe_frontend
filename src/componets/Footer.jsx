import React from 'react';

import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Footer() {
  return (
    <>
    
      <div style={{ backgroundColor: '#262261', color: 'white' }} className="container-fluid footer">
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-md-1"></div>

            <div className="col-md-4 ">
              <h2>Nutrivibe</h2>
              <hr />
              <p>
                Blue Ridge Tower, A Block, 3rd floor, Tech Park Avenue, Cyber City, 
                DLF Phase 3, Gurgaon – 122002
              </p>
              <p>
                Call us: 18002671155 <br />
                (Mon-Sun 10am to 7pm)
              </p>
              <p>Share it with your Community</p>
              <div className="col-md-2 mb-4">
              <h5>Follow Us</h5>
              <div className="d-flex gap-3">
                <a target='_blank' href="https://facebook.com" className="text-white hover-icon">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a target='_blank' href="https://twitter.com" className="text-white hover-icon">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a target='_blank' href="https://instagram.com" className="text-white hover-icon">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a target='_blank' href="https://www.youtube.com/" className="text-white hover-icon">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
              </div>
            </div>
            </div>

            <div className="col-md-2 "></div>

            <div className="col-md-2 ">
              <h5>Top Products</h5>
              <hr className="text-light" style={{ width: '60%', marginRight: 'auto' }} />

              <p>Vegan - Whey protein</p>
              <p>Creatine</p>
              <p>Pre Workout</p>
              <p>Multivitamin</p>
              <p>Omega</p>
            </div>

            <div className="col-md-2 ">
              <h5>Customer Care</h5>
              <hr className="text-light" style={{ width: '60%', marginRight: 'auto' }} />
              <p>FAQ's</p>
              <p>Shipping & Delivery</p>
              <p>Refund and Returns</p>
              <p>Support Center</p>
            </div>
          </div>
          <hr className="text-light text-center" style={{ width: '60%' }} />
<p className='mt-5 text-center'>Copyright © 2025 Nutrivibe. All rights reserved.</p>
        </div>
      </div>
   
    </>
  );
}

export default Footer;
