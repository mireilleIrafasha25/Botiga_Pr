import { Link } from "react-router-dom";
const Homediv1=()=>
{
    return (
        <div style={{
            display: 'flex',
            gap:"290px",
            marginTop:"0px"
        }} className="homediv-container">
            <div className="productHome">
                <ul style={{
                    listStyleType: 'none',
                    padding: "10px",
                    display: 'flex',
                    flexDirection: 'column',
                    gap:"5px"
                }}>
                    <Link to="/" style={{
                        textDecoration:"none",
                        color:'black'
                    }}><li>Electronics</li></Link>
                   <Link to="/" style={{
                        textDecoration:"none",
                        color:'black'
                    }}><li>Computer Gadget</li></Link> 
                   <Link to="/" style={{
                        textDecoration:"none",
                        color:'black'
                    }}><li>Fashion</li></Link> 
                   <Link to="/" style={{
                        textDecoration:"none",
                        color:'black'
                    }}><li>Body Lotion</li></Link> 
                   <Link to="/" style={{
                        textDecoration:"none",
                        color:'black'
                    }}><li>Sports</li></Link> 
                   <Link to="/" style={{
                        textDecoration:"none",
                        color:'black'
                    }}><li>Women Clothes</li></Link> 
                   <Link to="/" style={{
                        textDecoration:"none",
                        color:'black'
                    }}><li>Shoes</li></Link> 
                   <Link to="/" style={{
                        textDecoration:"none",
                        color:'black'
                    }}><li>Watches</li></Link> 
                </ul>
            </div>
            
            <div className="explore" style={{
                width:"330px"
            }}>
                <h2 style={{fontSize:"1.5rem",marginBottom:"15px",color:"#333",cursor:"pointer",fontFamily:"Lucida Console"}}>Explore our latest and greatest electronics</h2>
                <Link to="/shop"><button style={{
                    backgroundColor: "#69727d",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    marginLeft:"20px",
                    marginTop:"20px",
                    border:"1px solid #69727d"
                }}>SHOP NOW</button></Link>
            </div>
             </div>
    )
}
export default Homediv1;