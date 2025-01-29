import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const storecontext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartitems, setcartitems] = useState({});
  const [token, settoken] = useState(null); 
  const [productdata, setproductdata] = useState([]);
  const apiurl = "https://nutrivibe-backend.onrender.com/api/product/list";
  const navigate=useNavigate()
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(apiurl);
        const data = await response.json();
        setproductdata(data); 
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };
    fetchdata();
  }, []);
  useEffect(() => {
    const fetchedToken = localStorage.getItem("token");
    if (fetchedToken) {
      settoken(fetchedToken);
    }
  }, []); 

  const addtocart = async (itemid) => {
    if (!token) {
      toast.info("Please login to add items to the cart");
      navigate('/login')
      return;
    }
  
    setcartitems((prev) => {
      const updatedCart = { ...prev, [itemid]: (prev[itemid] || 0) + 1 };
      toast.success("Item added to cart");
      return updatedCart;
    });
  
    try {
      await axios.post(
        "https://nutrivibe-backend.onrender.com/api/cart/add",
        { itemid },
        { headers: { token } }
      );
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };
  
  const removefromcart = async (itemid) => {
    setcartitems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemid] > 0) {
        updatedCart[itemid] -= 1;
      }
      return updatedCart;
    });
    if (token) {
      try {
        await axios.post('https://nutrivibe-backend.onrender.com/api/cart/remove', { itemid }, { headers: { token } });
      } catch (error) {
        console.error("Error removing item from cart:", error);
      }
    }
  }
  const loadcartdata = async (token) => {
    try {
      const response = await axios.post('https://nutrivibe-backend.onrender.com/api/cart/get', {}, { headers: { token } });
    console.log(response.data);
    setcartitems(response.data)
    // Set cart items from response (ensure it defaults to an empty object if no data)
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
  };
  useEffect(() => {
    if (token) {
      loadcartdata(token);
    }
  }, [token]);
  useEffect(()=>{
console.log(cartitems);

  },[cartitems])

  const contextValue = {
    productdata,
    cartitems,
    addtocart,
    removefromcart,
    token
  };

  return <storecontext.Provider value={contextValue}>{props.children}</storecontext.Provider>;
};

export default StoreContextProvider;
