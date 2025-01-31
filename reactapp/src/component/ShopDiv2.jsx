import {Link} from "react-router-dom"
import Colors from "./color";
import Stars from "./star";
import Price from "./priceslider";
import SortingLayout from "./shopdiv22";
const ShopDiv2=()=>
{
    return (
        <div className="Wholenav" style={{display:"flex",backgroundColor:"white",gap:"200px"}}>
        <div className="productHome">
                <ul style={{
                    listStyleType: 'none',
                    padding: '0',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}>
                     <Link to="/" style={{
                        textDecoration:"none",
                        color:'black'
                    }}><li><h4>Category</h4></li></Link>
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
        <div className="picture">
            <SortingLayout />
        </div>
        </div>
    )
}
export default ShopDiv2;