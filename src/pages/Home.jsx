import React from 'react'
import Banner from '../componets/Banner'
import Cateogories from '../componets/Cateogories'

import Navbar from '../componets/Navbar'
import Toptext from '../componets/Toptext'
import Mobileapp from '../componets/Mobileapp'


function Home() {
  return (
    <>
        <Toptext/>
        <Navbar/>
    <Banner/>
    <Cateogories/>
    <div className="container mb-4">
    <h3 className='text-center mt-3'>Why Choose Nutrivibe?</h3>
    <div className="row mt-3">
      <div className="col-md-4">
      <div style={{ display: 'flex', alignItems: 'center' }} className="card p-4">
  <img style={{ width: '41px', height: '38px' }} src="https://static1.hkrtcdn.com/mbnext/static/media/Homepage/authenticate/featurebanner/safeandsecure.svg" alt="" />
  <div>
    <h5 className='text-center'>Payment</h5>
    <p className='text-center'>100% Safe & Secure Payments</p>
  </div>
</div>

      </div>
      <div className="col-md-4">
      <div style={{ display: 'flex', alignItems: 'center' }} className="card p-4">
  <img style={{ width: '41px', height: '38px' }} src="https://static1.hkrtcdn.com/mbnext/static/media/Homepage/authenticate/featurebanner/freeshiping.svg" alt="" />
  <div>
    <h5 className='text-center'>Free shipping</h5>
    <p className='text-center'>Get free delivery on orders above ₹399!</p>
  </div>
</div>
      </div>
      <div className="col-md-4">
      <div style={{ display: 'flex', alignItems: 'center' }} className="card p-4">
  <img style={{ width: '41px', height: '38px' }} src="https://static1.hkrtcdn.com/mbnext/static/media/Homepage/authenticate/featurebanner/authen.svg" alt="" />
  <div>
    <h5 className='text-center'>100% Authentic</h5>
    <p className='text-center'>Products sourced directly from the brands!</p>
  </div>
</div>
      </div>
    </div>
    </div>
  <Mobileapp/>
    </>
  )
}

export default Home
