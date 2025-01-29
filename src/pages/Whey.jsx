import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { storecontext } from '../context/Storecontext';
import Navbar from '../componets/Navbar';
import Toptext from '../componets/Toptext';

function Whey() {
  const navigate = useNavigate();
  const { productdata, cartitems, addtocart, removefromcart } = useContext(storecontext);
  const [brandFilter, setbrandFilter] = useState("All");
  const [weightfilter, setweightfilter] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(productdata || []);
  const wheyProducts = productdata.filter(product => product.category === 'Whey Proteins');
  // Effect to handle filtering based on category and brand
  useEffect(() => {
    let data = wheyProducts;

 

    if (brandFilter !== "All") {
      data = data.filter(product => product.brand === brandFilter);
    }
    if (weightfilter !== "All") {
      data = data.filter(product => product.weight === weightfilter);
    }

    setFilteredProducts(data);
  }, [ brandFilter,productdata,weightfilter]);

  // Reset all filters
  const resetFilters = () => {
  
    setbrandFilter("All");
  };

  return (
  <>  <Toptext/>   <Navbar/> <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <div className="container py-5" style={{ marginTop: '100px' }}>
        <h5 className="text-dark">Whey Protein</h5>
        <div className="row">
          {/* Filters Section */}
          <div className="col-12 col-md-3 border p-3">
            <div className='d-flex justify-content-between mb-3'>
              <p>
                <img
                  src="https://static1.hkrtcdn.com/mbnext/static/media/plp/filter-icon.svg"
                  alt="Filters"
                /> Filters
              </p>
              <button className='reset-btn' onClick={resetFilters}>Reset</button>
            </div>

            {/* Category Filter */}
            <Dropdown>
              <Dropdown.Toggle variant='light' className='w-100 d-flex justify-content-between align-items-center'>
                Category
              </Dropdown.Toggle>
              <Dropdown.Menu className='w-100'>
                <Dropdown.Item>
                  <input
                    type="checkbox"
                    className="me-2"
                  
                   
                  />
                  Whey Protein
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Brand Filter */}
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
                              <Dropdown.Item>
                                <input checked={weightfilter === "1kg"}  onChange={() => setweightfilter("1kg")} type="checkbox" className="me-2" />
                                1kg
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <input   checked={weightfilter === "2kg"}  onChange={() => setweightfilter("2kg")} type="checkbox" className="me-2" />
                                2kg
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <input   checked={weightfilter === "4kg"}  onChange={() => setweightfilter("4kg")} type="checkbox" className="me-2" />
                                4kg
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
          </div>

          {/* Products Section */}
          <div className="col-12 col-md-9">
            <div className="row g-3">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product._id} className="col-12 col-md-4">
                    <Card className="p-3" style={{ width: '18rem' }}>
                      <Card.Img
                        onClick={() => navigate(`/product/${product._id}`)}
                        className="mx-auto d-block"
                        style={{ width: '150px', cursor: 'pointer' }}
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
                  
                ))
              ) : (
                <p>No whey protein products available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
}

export default Whey;
