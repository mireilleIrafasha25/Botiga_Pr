import React, { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import Colors from "./color";
import Stars from "./star";
import Price from "./priceslider";
import "../styles/shopdiv22.css";
import "../styles/NewArrival.css";
import { FaThLarge, FaList } from "react-icons/fa";
import ShopCard1 from "./shopcard1";
import ShopCard2 from "./shopcard2";
import ShopCard3 from "./shopcard3";
import axios from "axios";
const ShopDiv2=()=>
{
    const [layout, setLayout] = useState("grid");
    const [activeContent,setactiveContent]=useState("wholecard9")
    const [products,setProducts]=useState([])
    const [message,setMessage]=useState("")
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/Botiga/product/getProducts");
                setAllProducts(response.data.products);
            } catch (error) {
                console.error("Error fetching all products:", error);
            }
        };
        fetchAllProducts();
    }, []);
    useEffect(()=>
    {
        const fetchProducts=async ()=>
        {
            try
            {
                const response=await axios.get(`http://localhost:5000/Botiga/product/getProductsByCategory/${activeContent}`)
                setProducts(response.data.products)
                setMessage(response.data.message || "")
            }
            catch(error)
            {
                setMessage(error.response?.data?.message || "Failed to fetch products")
                console.error("Error fetching products:",error)
            }
        }
        fetchProducts()
    },[activeContent]);
      const renderStars = (rating) => {
         return Array.from({ length: 5 }, (_, index) => (
           <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
         ));
       };
     
       const renderColors = (colors) => {
         return colors.map((color, index) => (
           <div key={index} className={`color-circle ${color}`} />
         ));
       };
     
       const renderProducts = () => {
         return products.map((product, index) => (
           <div className="product-card" key={product.productId}>
             <div className="image-container">
               <Link to={`/product/${product.productId}`}>
                 <img src={product.image.url} alt={product.name} />
               </Link>
               <div className="overlay select">Select Options</div>
               <div className="overlay quick-view">Quick View</div>
             </div>
             <h3>{product.name}</h3>
             <div className="Main-price">
               <span>${product.Min_price}.00</span>
               <span>-</span>
               <span>${product.Max_price}.00</span>
             </div>
             <div className="stars">{renderStars(product.rating)}</div>
             <div className="color-options">{renderColors(product.colors)}</div>
           </div>
         ));
       };
    const handleActionClick = (action) => {
        setactiveContent(action); 
    };
    const getCategoryCount = (category) => {
        return allProducts.filter(product => product.category === category).length;
    };
    return (
        <div className="Wholenav" style={{display:"flex",backgroundColor:"white",gap:"200px"}}>
        <div className="productHome">
                <ul>
                    <li onClick={()=>handleActionClick('wholecard9')} className="Category-list" style={{fontWeight:"bold"}}>Category</li>
                    <li onClick={() => handleActionClick('Body Lotion')} className="Category-list">Body Lotion <span>({getCategoryCount("Body Lotion")})</span></li>
                    <li onClick={() => handleActionClick('Computer')} className="Category-list">Computer Gadgets <span>({getCategoryCount("Computer")})</span></li>
                    <li onClick={() => handleActionClick('Electronics')} className="Category-list">Electronics <span>({getCategoryCount("Electronics")})</span></li>
                    <li onClick={() => handleActionClick('Fashion')} className="Category-list">Fashion <span>({getCategoryCount("Fashion")})</span></li>
                    <li onClick={() => handleActionClick('Shoes')} className="Category-list">General Shoes <span>({getCategoryCount("Shoes")})</span></li>
                    <li onClick={() => handleActionClick('Sports')} className="Category-list">Sports <span>({getCategoryCount("Sports")})</span></li>
                    <li onClick={() => handleActionClick('Watch')} className="Category-list">Watch <span>({getCategoryCount("Watch")})</span></li>
                    <li onClick={() => handleActionClick('women clothes')} className="Category-list">Women Clothes <span>({getCategoryCount("women clothes")})</span></li>
                </ul>
                <Colors />
                <div className="rating">
                    <h4 style={{color:"black"}}>Rating</h4>
                    <div style={{display:"flex", gap:"90px"}}>
                        <Stars/>
                        <div style={{display:"flex",gap:"10px",flexDirection:"column",marginTop:"5px",color:"black"}}>
                            <div>(8)</div>
                        <div>(3)</div>
                        <div>(2)</div>
                        </div>
                    </div>
                </div>
                <Price />
            </div>
            {activeContent ==='wholecard9' &&(
        <div className="picture">
        <div style={{marginTop:"40px"}}>
      
      <div className="sorting-layout" style={{display:"flex",gap:"300px",marginTop:"20px"}}>
        <p className="results">Showing 1-9 of 13 results</p>
        <div className="controls">
          <select className="sorting" style={{backgroundColor:"white", }}>
            <option>Default sorting</option>
            <option>Price: low to high</option>
            <option>Price: high to low</option>
            <option>Newest first</option>
            <option>Best selling first</option>
          </select>
          <div className="layout-icons">
            <FaList 
              className={`icon ${layout === "list" ? "active" : ""}`} 
              onClick={() => setLayout("list")} 
            />
            <FaThLarge 
              className={`icon ${layout === "grid" ? "active" : ""}`} 
              onClick={() => setLayout("grid")} 
            />
          </div>
        </div>
        
      </div>
      <div className={`products ${layout}`}>
          <div>
      <ShopCard1/>
      <ShopCard2/>
      <ShopCard3/>
      </div>
    </div>
    </div>
        </div>
        )}
        {activeContent==='Electronics' &&(
            
     <div className="product-list">{renderProducts()}</div>  
            )}
              {activeContent==='Body Lotion' &&(
                <div>
     <div className="product-list">{renderProducts()}</div>  
     </div>
     
            )}
              {activeContent==='women clothes' &&(
     <div className="product-list">{renderProducts()}</div>  
            )}
              {activeContent==='Watch' &&(
     <div className="product-list">{renderProducts()}</div>  
            )}
              {activeContent==='Shoes' &&(
     <div className="product-list">{renderProducts()}</div>  
            )}
              {activeContent==='Computer' &&(
     <div className="product-list">{renderProducts()}</div>  
            )}
              {activeContent==='Sports' &&(
     <div className="product-list">{renderProducts()}</div>  
            )}
              {activeContent==='Fashion' &&(
     <div className="product-list">{renderProducts()}</div>  
            )}
            
        </div>
    )
}
export default ShopDiv2;