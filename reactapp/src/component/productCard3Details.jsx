import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
const products = [
    {
      id: 1,
      image: "/shoes.jpg", // Replace with actual image
      image1:"/bootlewhite.jpg",
      image2:"/bottle green.jpg",
      vendorImage:"/Jessica Doe.jpg",
      Vendorname:"Jessica Doe",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      name: "John Sport Shoes",
      price: "$22.00 - $55.00",
      rating:5,
      colors: ["Arsenic", "Chamoisee","silver","white"],
    },
    {
      id: 2,
      image: "/mouse12.jpg", 
      image1:"/bootlewhite.jpg",
      image2:"/bottle green.jpg",
      vendorImage:"/Jessica Doe.jpg",
      Vendorname:"Jessica Doe",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      name: "Mouse Raxer",
      price: "$49.00 - $69.00",
      rating:5,
      colors: ["Arsenic", "Chamoisee","silver","white"],

    },
    {
      id: 3,
      image: "/santa Monica.jpg", 
      image1:"/bootlewhite.jpg",
      image2:"/bottle green.jpg",
      vendorImage:"/Jessica Doe.jpg",
      Vendorname:"Jessica Doe",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      name: "Santa Monica",
      price: "$22.00 - $55.00",
      rating:5,
      colors: ["Arsenic", "Chamoisee", "silver","white"],
    }
  ];

  const ProductDetails3=()=>
  {

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    border:"2px solid black",
    marginTop:"30px",
    marginBottom:"10px",
    justifyContent: 'center',
    // height: '100',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    padding: '10px 20px',
    fontSize: '40px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '5px',
  },
  number: {
    fontSize: '20px',
    minWidth: '40px',
    textAlign: 'center',
    color:"black"
  },
};
    
    const { id }=useParams();
    const product=products.find((product)=>product.id===parseInt(id)); //find the corresponding product
    if(!product)
    {
      return <h1>Product Not Found</h1>
    }
    const renderStars = (rating) => {
      return Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? "star filled" : "star"} style={{marginLeft:"0px",paddingLeft:"0px"}}>
          ★
        </span>
      ));
    };
    const renderColors = (colors) => {
      return colors.map((color, index) => (
        <div key={index} className={`color-circle ${color}`} />
      ));
    };

    const [count, setCount] = useState(1);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };
  // const [isHovered, setIsHovered] = useState(false);
    const renderProducts=()=>
    {
      return (
        <div>
        <div className="product-card" style={{display:"flex",flexDirection:"row",background:"white",gap:"20px",marginTop:"60px"}}>   
          <div><div className="image-container" >
            <img src={product.image} alt={product.name} />
            <div className="overlay select">Select Options</div>
            <div className="overlay quick-view">Quick View</div>
           
          </div>
          <div style={{display:"flex",gap:"60px",flexDirection:"row",marginTop:"5px"}}>
              <img src={product.image} alt={product.name} style={{width:"80px"}} />
              <img src={product.image1} alt={product.name} style={{width:"80px"}} />
              <img src={product.image2} alt={product.name} style={{width:"80px"}}/>
            </div>
          </div>
          <div className="product-info" style={{width:"300px"}}>
            <h3>{product.name}</h3>
            
            {renderStars(product.rating)}
            <p style={{fontWeight:"bold",fontSize:"20px"}}>{product.price}</p>
            <p className="description" style={{width:'300px',fontFamily:"serif"}}>{product.description}</p>
            <div className="color-options" style={{display:"flex",flexDirection:"row"}}><span style={{color:"black",marginRight:"30px",fontFamily:"serif"}}>Color</span>{renderColors(product.colors)}</div>
               <div style={styles.container}>
      <button style={styles.button} onClick={handleDecrease} disabled={count === 1}>
        -
      </button>
      <span style={styles.number}>{count}</span>
      <button style={styles.button} onClick={handleIncrease}>
        +
      </button>
    </div>
    <div style={{borderBottom:"2px solid silver",paddingBottom:"10px",marginBottom:"10px"}}> <button style={{background:"#333",width:"300px"}}>ADD TO CART</button></div>
    <div>
      <p style={{fontFamily: "serif"}}>SKU: N/A</p>
      <p style={{fontFamily: "serif"}}>CATEGORIES: General, Sports</p>
      <p style={{display:"flex",flexDirection:"row",gap:"10px"}}>
        <CiHeart style={{fontSize:"20px"}}/><span style={{fontSize:"15px",color:"black",marginTop:"2px"}}>Add to Wishlist</span></p>
            </div>
    
          </div>
          <div style={{background:"#ADD8E6",padding:"10px",paddingBottom:"40px",marginLeft:"40px"}}>
            <div style={{paddingBottom:"5px",borderBottom:"1px solid #778899"}}>
              <p>Vendor</p>
              </div>
            <div style={{marginTop:"10px",paddingBottom:"10px",borderBottom:"1px solid #778899"}}>
             <div style={{display:"flex",flexDirection:"row",gap:"10px",alignItems:"center"}}><img src={product.vendorImage} style={{borderRadius:"50%",width:"50px"}}/><span style={{color:"black"}}>{product.Vendorname}</span></div>
             <div style={{display:"flex",flexDirection:"row",gap:"10px",marginTop:"20px"}}> <MdOutlineLocationOn style={{fontSize:"20px"}}/> <span style={{color:"black"}}>Address</span></div>
            </div>
            <div style={{borderBottom:"1px solid #778899",paddingBottom:"20px"}}>
              <p>Central Park ,New York,US</p>
              <div style={{marginTop:"20px",display:"flex",flexDirection:"row",gap:"20px"}}><LuPhone/><span style={{color:"black"}}>contact</span></div>
            </div>
            <Link to="/shop" style={{textDecoration:"none"}}><div style={{border:"2px solid black",paddingLeft:"100px",marginTop:"20px"}}>
             <p style={{background:"none",color:"black",width:"200px"}}>See All Product</p> 
            </div></Link>
          </div>
        </div>
        <div style={{background:"white",borderTop:"1px solid #778899 "}}>
          <div style={{marginBottom:"20px"}}>Description</div>
          <div>{product.description}</div>
        </div>
        </div>
      )
    }
    return(
      <div>
         <div className="product-list">{renderProducts()}</div>
      </div>)
  }
  export default ProductDetails3;