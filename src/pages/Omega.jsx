import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { storecontext } from '../context/Storecontext';
import Navbar from '../componets/Navbar';
import Toptext from '../componets/Toptext';

function Omega() {
  const navigate = useNavigate()

  const { productdata, cartitems, addtocart, removefromcart } = useContext(storecontext);
  console.log(productdata);

  const [brandFilter, setbrandFilter] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(productdata || []);

  const omegaProducts = productdata.filter(product => product.category === 'omega');
  useEffect(() => {
    let data = omegaProducts;



    if (brandFilter !== "All") {
      data = data.filter(product => product.brand === brandFilter);
    }

    setFilteredProducts(data);
  }, [brandFilter, productdata]);
  const resetFilters = () => {

    setbrandFilter("All");
  };
  return (
    <>
    <Toptext/>
    <Navbar/>
      <div>
        <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
          <div className="container py-5" style={{ marginTop: '100px' }}>
            <h5 className="text-dark">Omega-3 </h5>
            <div className="row">
              <div className="col-12 col-md-3 border p-3">
                <div className='d-flex justify-content-between mb-3'>
                  <p><img src="https://static1.hkrtcdn.com/mbnext/static/media/plp/filter-icon.svg" alt="" />Filters</p>
                  <button onClick={resetFilters} className='reset-btn'>Reset</button>
                </div>

                <Dropdown>
                  <Dropdown.Toggle variant='light' className='w-100 d-flex justify-content-between align-items-center' id="dropdown-basic">
                    Category
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='w-100'>
                    <Dropdown.Item href="#action/1">
                      <input type="checkbox" className="me-2" />
                      Action 1
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/2">
                      <input type="checkbox" className="me-2" />
                      Action 2
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/3">
                      <input type="checkbox" className="me-2" />
                      Action 3
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='mt-3'>
                  <Dropdown.Toggle variant='light' className='w-100 d-flex justify-content-between align-items-center'>
                    Brand
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='w-100'>
                    <Dropdown.Item>
                      <input
                        type="checkbox"
                        className="me-2"
                        checked={brandFilter === "MuscleBlaze"}
                        onChange={() => setbrandFilter("MuscleBlaze")}
                      />
                      MuscleBlaze
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <input
                        type="checkbox"
                        className="me-2"
                        checked={brandFilter === "avatar"}
                        onChange={() => setbrandFilter("avatar")}
                      />
                      Avatar
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <input
                        type="checkbox"
                        className="me-2"
                        checked={brandFilter === "on"}
                        onChange={() => setbrandFilter("on")}
                      />
                      Optimum Nutrition
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <input
                        type="checkbox"
                        className="me-2"
                        checked={brandFilter === "gnc"}
                        onChange={() => setbrandFilter("gnc")}
                      />
                      GNC
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='mt-3'>
                  <Dropdown.Toggle variant='light' className='w-100 d-flex justify-content-between align-items-center' id="dropdown-basic">
                    Weight/Quantity
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='w-100'>
                    <Dropdown.Item href="#action/1">
                      <input type="checkbox" className="me-2" />
                    90G
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/2">
                      <input type="checkbox" className="me-2" />
                   150G
                    </Dropdown.Item>
              
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="col-12 col-md-9">
                <div className="row g-3">
                  {filteredProducts.length > 0 ? filteredProducts.map((product) => (
                    <div key={product._id} className="col-12 col-md-4">
                      <Card className="p-3" style={{ width: '18rem' }}>
                        <Card.Img
                          onClick={() => navigate(`/product/${product._id}`)}
                          className="mx-auto d-block"
                          style={{ width: '150px' }}
                          variant="top"
                          src={product.image[0]} // Assuming the first image is the main one
                        />
                        <Card.Body>
                          <Card.Title>{product.name}</Card.Title>
                          <p>₹{product.price}</p>
                          <button onClick={() => addtocart(product.name)} className="tocartbtn w-100">Add to cart</button>
                        </Card.Body>
                      </Card>
                    </div>
                  )) : (
                    <p>No omega-3 products available</p>
                  )}



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Omega
