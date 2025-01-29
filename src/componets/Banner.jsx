import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Banner() {
  return (
    <>
    <div style={{marginTop:'130px'}} className='container  '>   <Carousel data-bs-theme="light">
      <Carousel.Item >
        <img 
          className="d-block w-100 rounded carouselimg"
          src="https://assets.hyugalife.com/banner/feature/1440-x-360_4_2.jpg?compress=true&format=webp&q=100&w=1216&h=304"
          alt="First slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded carouselimg"
          src="https://assets.hyugalife.com/banner/feature/1440X360_2__1_1.png?compress=true&format=webp&q=100&w=1216&h=304"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded carouselimg"
          src="https://assets.hyugalife.com/banner/feature/WEB-DESKTOP-1440-X-360-pix-CTC_11_3.jpg?compress=true&format=webp&q=100&w=1216&h=304"
          alt="Third slide"
        />
     
      </Carousel.Item>
    </Carousel></div>
    </>
  )
}

export default Banner
