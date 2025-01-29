import 'font-awesome/css/font-awesome.min.css';
import "../styles/PhoneIcon.css"
import "../styles/navbar.css";
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
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Vendors</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
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