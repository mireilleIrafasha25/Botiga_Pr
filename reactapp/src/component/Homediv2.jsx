import React from "react";
import { Link } from "react-router-dom";
import "../styles/homediv2.css";

const Homediv2 = () => {
    const categories = [
        { id: 1, title: "Body Lotion", image: "/BodyLotion1.jpg", category: "BodyLotion" },
        { id: 2, title: "Sport", image: "/sports1.jpg", category: "sport" },
        { id: 3, title: "Computer Gadgets", image: "/computer Gadget1.jpg", category: "Computergadgets" },
        { id: 4, title: "Electronics", image: "/electronica.jpg", category: "electronics" },
        { id: 5, title: "Watch", image: "/watch1.jpg", category: "watch" },
        { id: 6, title: "Women Clothes", image: "/women category.jpg", category: "womenclothes" }
    ];

    return (
        <div className="home1">
            <h1 className="home-title1">Popular Categories</h1>
            <div className="card-container1">
                {categories.map((category) => (
                    <div key={category.id} className="card1">
                        <Link to="">
                            <img src={category.image} alt={category.title} className="card-image1" />
                        </Link>
                      <div>  <p className="card-title1">{category.title}</p></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Homediv2;
