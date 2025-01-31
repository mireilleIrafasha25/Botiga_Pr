import SearchBar from "./SearchBar"
import "../styles/navup.css"
import React from 'react';
import { FaUser, FaChartBar, FaHeart } from 'react-icons/fa';
const NavUp=()=>
{
    return(
        <div className="Whole-Navup">
            <div className="Logo">
                <h3>Botiga</h3>
            </div>
            <div className="search-and-category">
                <div className="category">
                <form action="submit-page.php" method="POST">
                        <select id="options" name="dropdown">
                            <option value="categories">Categorias</option>
                            <option value="accessorios">Accesorios</option>
                            <option value="ropa">Ropa</option>
                            <option value="electronics">Electronica</option>
                        </select>
                    </form>
                </div>
                <div className="search">
                 <SearchBar/>
                </div>
            </div>
            <div className="icon-container">
      <FaUser className="icon" size={24} />
      <FaChartBar className="icon" size={24} />
      <FaHeart className="icon" size={24} />
    </div>
        </div>
    )
}

export default NavUp;