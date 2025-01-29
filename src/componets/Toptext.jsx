import React from 'react';

function Toptext() {
  return (
    <>
      <div
        className="container-fluid toptxt"
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          backgroundColor: '#262261',
        }}
      >
        <div className="row d-flex align-items-center justify-content-center py-2">
          <p className="text-center text-white mb-1">
            100% Authentic Products | Extra 8% OFF with DHAMAKA8 | Sourced
            directly from Brands | FREE Creatine above Rs 1999 | Up to 50% OFF *
          </p>
        </div>
      </div>

      <div style={{ marginTop: '50px' }}></div>
    </>
  );
}

export default Toptext;
