import 'font-awesome/css/font-awesome.min.css';
import "../styles/PhoneIcon.css"
import "../styles/navbar.css";

import {Link} from "react-router-dom"
const NavBar=()=>
{
    return(
        <div className="Whole">
        <div className="Trending_Categories">
            <select id="options" name="dropdown">
                <option value="Select a Category">Trending Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Home">Home</option>
                <option value="Sports">Sports</option>
            </select>
        </div>
        <div className="navelement">
        <nav>
            <ul>
                <Link to="/" style={{
                    textDecoration:"none",
                }}><li>Home</li></Link>
                <Link to="/shop"style={{
                    textDecoration:"none",
                }}><li>Shop</li></Link>
                <Link to="/vendor"style={{
                    textDecoration:"none",
                }}><li>Vendors</li></Link>
                <Link to="/blog"style={{
                    textDecoration:"none",
                }}><li>Blog</li></Link>
                <Link to="/contact"style={{
                    textDecoration:"none",
                }}><li>Contact</li></Link>
            </ul>
        </nav>
        </div>
       <div className="phone-icon-container">
     <i className="fa fa-phone phone-icon"></i>
     <span className="phone-number">+1 234 567 8900</span>
        </div>
        </div>
    )
}

export default NavBar;