import SearchBar from "./SearchBar"
import "../styles/navup.css"
import React from 'react';
import {Link} from "react-router-dom"
import { FaUser, FaChartBar, FaHeart } from 'react-icons/fa';
import { useState } from "react";
import Login from "./login";
import { useNavigate } from "react-router-dom";
import Register_own from "./Registration Own";

const NavUp=()=>
{
    const [modal,useModal]=useState(false);
    const [model,useModel] = useState(false);
    const navigate=useNavigate();
    const HandleLoginForm=()=>
    {
        useModal(!modal)
    }
    const HandleSignUpForm=()=>
    {
        useModel(!model)
    }
    return(
        <div className="Whole-Navup">
            {modal && <Login HandleLoginForm={HandleLoginForm} />}
            {model && <Register_own HandleSignUpForm={HandleSignUpForm} />}
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
     <button style={{background:"blue"}} onClick={HandleLoginForm}>LOGIN</button> 
     {/* <FaChartBar className="icon" size={24} />  */}
    <button style={{background:"blue"}} onClick={HandleSignUpForm}> REGISTER</button>
    </div>
        </div>
        
    )
}

export default NavUp;