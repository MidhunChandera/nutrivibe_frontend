import React from 'react';

function Mobileapp() {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://www.avvatarindia.com/assets/images/new/JourneyOfProduct_Desktop-new.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "300px",
          color: 'white',
        }}
        className="container-fluid rounded d-flex align-items-center p-5"
      >
        <div className="row align-items-center w-100 px-3">
          {/* Video Section */}
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <div className="embed-responsive embed-responsive-16by9">
            <iframe
  className="embed-responsive-item"
  width="100%"
  height="300px"
  src="https://www.youtube.com/embed/89yP76HLtjc?autoplay=1"
  title="YouTube Video"
  frameBorder="0"
  allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>

            </div>
          </div>

          {/* Text Section */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1  className="fs-1 fw-bold ms-md-3">Download App Now</h1>
            <h5 className="mt-4 fs-4 ms-md-3">
              Get 10% Off Your First Order + 1% Cashback On App
            </h5>
          <div className='ms-3 mt-4'>  <img src="https://dukaan.b-cdn.net/100x100/webp/upload_file_service/d2c5e415-31dd-4daa-bb56-11913ee0c11d/Group1811.png" alt="" />
            <img className='ms-2' src="https://dukaan.b-cdn.net/100x100/webp/upload_file_service/cb03d645-d816-44ce-adcc-e8fdbfe305c7/_on_the_App_Store_Badge_US-UK_RGB_blk_0929171.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobileapp;
