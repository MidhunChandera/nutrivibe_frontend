import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { storecontext } from '../context/Storecontext';
import Navbar from '../componets/Navbar';
import Toptext from '../componets/Toptext';

function Shop() {
  const navigate = useNavigate();
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [brandFilter, setBrandFilter] = useState("All");
  const { productdata, cartitems, addtocart, removefromcart } = useContext(storecontext);
  const [filteredProducts, setFilteredProducts] = useState(productdata);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredProducts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredProducts.length / postsPerPage);

  const paginate = (page) => setCurrentPage(page);

  useEffect(() => {
    let data = productdata;

    // Apply filters
    if (categoryFilter !== "All") {
      data = data.filter(item => item.category === categoryFilter);
    }
    if (brandFilter !== "All") {
      data = data.filter(item => item.brand === brandFilter);
    }

    // Set filtered products after applying filters
    setFilteredProducts(data);

    // Reset to page 1 when filters change
    setCurrentPage(1);
  }, [categoryFilter, productdata, brandFilter]);

  const reset = () => {
    setCategoryFilter("All");
    setBrandFilter("All");
    setCurrentPage(1);
    setFilteredProducts(productdata);
  };

  return (
    <>
      <Toptext />
      <Navbar />
      <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        <div className="container py-5" style={{ marginTop: '100px' }}>
          <h5 className="text-dark">All Products</h5>
          <div className="row">
            <div className="col-12 col-md-3 border p-3">
              <div className='d-flex justify-content-between mb-3'>
                <p><img src="https://static1.hkrtcdn.com/mbnext/static/media/plp/filter-icon.svg" alt="" />Filters</p>
                <button onClick={reset} className='reset-btn'>Reset</button>
              </div>

              <Dropdown>
                <Dropdown.Toggle variant='light' className='w-100 d-flex justify-content-between align-items-center' id="dropdown-basic">
                  Category
                </Dropdown.Toggle>

                <Dropdown.Menu className='w-100'>
                  <Dropdown.Item onClick={() => setCategoryFilter("Whey Proteins")}>
                    <input type="checkbox" checked={categoryFilter === "Whey Proteins"} className="me-2" />
                    Whey
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setCategoryFilter("vegan")}>
                    <input type="checkbox" checked={categoryFilter === "vegan"} className="me-2" />
                    Vegan
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setCategoryFilter("Creatine")}>
                    <input type="checkbox" checked={categoryFilter === "Creatine"} className="me-2" />
                    Creatine
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setCategoryFilter("Pre-Workout")}>
                    <input type="checkbox" checked={categoryFilter === "Pre-Workout"} className="me-2" />
                    Pre-workout
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setCategoryFilter("multivitamin")}>
                    <input type="checkbox" checked={categoryFilter === "multivitamin"} className="me-2" />
                    Multivitamin
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setCategoryFilter("omega")}>
                    <input type="checkbox" checked={categoryFilter === "omega"} className="me-2" />
                    Omega-3
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant='light' className='w-100 d-flex justify-content-between align-items-center' id="dropdown-basic">
                  Brand
                </Dropdown.Toggle>

                <Dropdown.Menu className='w-100'>
                  <Dropdown.Item onClick={() => setBrandFilter("MuscleBlaze")}>
                    <input type="checkbox" checked={brandFilter === "MuscleBlaze"} className="me-2" />
                    MuscleBlaze
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setBrandFilter("avatar")}>
                    <input type="checkbox" checked={brandFilter === "avatar"} className="me-2" />
                    Avatar
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setBrandFilter("on")}>
                    <input type="checkbox" checked={brandFilter === "on"} className="me-2" />
                    Optimum Nutrition
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setBrandFilter("gnc")}>
                    <input type="checkbox" checked={brandFilter === "gnc"} className="me-2" />
                    GNC
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="col-12 col-md-9">
              <div className="row g-3">
                {currentPosts.length > 0 ? currentPosts.map((product) => (
                  <div key={product._id} className="col-12 col-md-4">
                    <Card className="p-3 h-100" style={{ width: '18rem' }}>
                      <Card.Img
                        onClick={() => navigate(`/product/${product._id}`)}
                        className="mx-auto d-block"
                        style={{ width: '150px' }}
                        variant="top"
                        src={product.image[0]}
                      />
                      <Card.Body className="d-flex flex-column justify-content-between">
                        <Card.Title>{product.name}</Card.Title>
                        <div className='d-flex justify-content-between'>
                          <p className="mt-auto">₹{product.price}</p>
                          <p className="mt-auto">{product.flavour}</p>
                        </div>
                        <button onClick={() => addtocart(product.name)} className="tocartbtn w-100 mb-0 mt-auto">Add to cart</button>
                      </Card.Body>
                    </Card>
                  </div>
                )) : (
                  <p>No products available</p>
                )}

                {/* Pagination */}
                {filteredProducts.length > 0 && (
                  <div className="pagination">
                    <button disabled={currentPage === 1} className="paginationbtn">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          paginate(currentPage - 1);
                        }}
                        href='#menu-section'
                      >
                        «
                      </a>
                    </button>

                    {new Array(totalPages).fill(0).map((_, index) => (
                      <button
                        className={`paginationbtn ${currentPage === index + 1 ? "active" : ""}`}
                        key={index}
                        onClick={() => paginate(index + 1)}
                      >
                        {index + 1}
                      </button>
                    ))}

                    <button disabled={currentPage === totalPages} className="paginationbtn">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          paginate(currentPage + 1);
                        }}
                        href='#menu-section'
                      >
                        »
                      </a>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
