import React, { useContext, useEffect, useState } from "react";
import { SideBySideMagnifier } from "react-image-magnifiers";
import { useParams } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Toptext from "../componets/Toptext";
import { storecontext } from "../context/Storecontext";

function Product() {
  const { productid } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { productdata,addtocart,cartitems, removefromcart } = useContext(storecontext);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://nutrivibe-backend.onrender.com/api/product/single", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productid }),
        });
        const data = await response.json();
        setProduct(data);
        setSelectedImage(data.image ? data.image[0] : null); // Set initial selected image
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [productid]);

  return (
 <>  <Toptext/><Navbar/> <div style={{ minHeight: "100vh", marginTop: "120px" }}>
      {product ? (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3 d-flex flex-column">
                  {product.image && product.image.length > 0 ? (
                    product.image.map((imgSrc, index) => (
                      <img
                        key={index}
                        src={imgSrc}
                        alt={`Product image ${index + 1}`}
                        className="img-thumbnail mb-2"
                        onClick={() => setSelectedImage(imgSrc)} // Update selected image on click
                      />
                    ))
                  ) : (
                    <p>No images available</p>
                  )}
                </div>
                <div className="col-md-9 d-flex justify-content-center align-items-center">
                  {selectedImage ? (
                   <SideBySideMagnifier
                   imageSrc={selectedImage}  // Regular image (thumbnail)
                   largeImageSrc={selectedImage}   // Larger, higher-resolution image for zoom
                   magnifierSize="40%"       // Adjust zoom window size
                   zoomFactor={2}            // Adjust zoom level
                   switchSides={true}        // Place zoomed image on the right side
                   fillAvailableSpace={false}
                   cursorStyle="pointer"    // Pointer cursor on hover
                   style={{ width: "100%", maxWidth: "600px", position: "relative" }}
                 />
                 
                  ) : (
                    <img
                      src="/placeholder.jpg"
                      alt="Main Product"
                      className="img-fluid border"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="mb-3" style={{ marginTop: "100px" }}>
                {product.name}
              </h1>
              <h5 className="mb-3">Price: ₹{product.price}</h5>
              <h5 className="mb-3">Flavour: {product.flavour}</h5>
              <h5 className="mb-3">Weight: {product.weight}</h5>
              <hr />
              <p>Category : {product.category}</p>
              <button  onClick={() => addtocart(product.name)} className="tocartbtn w-50 mb-0 mt-auto mb-3">
                Add to cart
              </button>
              <div className="d-flex gap-5 mt-3">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src="https://static1.hkrtcdn.com/mbnext/static/media/icons/revamp/100safe_v1.svg"
                    alt=""
                  />
                  <p>Authentic Products</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src="https://static1.hkrtcdn.com/mbnext/static/media/pdp/return_product_icon_v1.svg"
                    alt=""
                  />
                  <p>14 Days Returnable</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src="https://static1.hkrtcdn.com/mbnext/static/media/icons/revamp/shipping_new_v1.svg"
                    alt=""
                  />
                  <p>Free Shipping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div></>
  );
}

export default Product;
