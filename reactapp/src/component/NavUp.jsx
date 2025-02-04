import SearchBar from "./SearchBar"
import "../styles/navup.css"
import React from 'react';
import {Link} from "react-router-dom"
import { FaUser, FaChartBar, FaHeart } from 'react-icons/fa';
import { useState } from "react";

import LoginForm from "./form";
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
     <Link to="/user"><FaUser className="icon" size={24} /></Link> 
    <Link to="/form"> <FaChartBar className="icon" size={24} /></Link> 
    <Link to="/register">  <FaHeart className="icon" size={24} /></Link>
    </div>
        </div>
        
    )
}

export default NavUp;