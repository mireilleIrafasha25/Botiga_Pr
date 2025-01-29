import React from "react";
import { Link } from "react-router-dom";
import "../styles/homediv2.css";

const Homediv2 = () => {
    const categories = [
        { id: 1, title: "Body Lotion", image: "/body lotion.jpg", category: "BodyLotion" },
        { id: 2, title: "Sport", image: "/sport.jpg", category: "sport" },
        { id: 3, title: "Computer Gadgets", image: "/mouse.jpg", category: "Computergadgets" },
        { id: 4, title: "Electronics", image: "/electronics.jpg", category: "electronics" },
        { id: 5, title: "Watch", image: "/watch.jpg", category: "watch" },
        { id: 6, title: "Women Clothes", image: "/women.jpg", category: "womenclothes" }
    ];

    return (
        <div className="home">
            <h1 className="home-title">Popular Categories</h1>
            <div className="card-container">
                {categories.map((category) => (
                    <div key={category.id} className="card">
                        <Link to="">
                            <img src={category.image} alt={category.title} className="card-image" />
                        </Link>
                        <p className="card-title">{category.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Homediv2;
