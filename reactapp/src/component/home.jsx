import React from "react";
import "../styles/home.css"; // Import CSS file for styling
import Homediv1 from "./Homediv1";
import Homediv2 from "./Homediv2"
import NewArrival from "./NewArrival";
const Home = () => {
    const cards = [
        {
            id: 1,
            title: "Fresh Lemonade",
            content: "Refreshing homemade lemonade with natural ingredients.",
            image: "/fresh lemonade.jpg"
        },
        {
            id: 2,
            title: "Coconut Water",
            content: "Hydrating and pure coconut water, straight from the source.",
            image: "/coconut water.jpg"
        },
        {
            id: 3,
            title: "Honey Lemonade",
            content: "The perfect balance of honey and lemonade.",
            image: "/honey lemonade.jpg"
        }

    ];

    return (
        <div>
            <Homediv1/>
            <Homediv2/>
            <NewArrival/>
        <div className="home">
            <h1 className="home-title">Our Drinks</h1>
            <div className="card-container">
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <img src={card.image} alt={card.title} className="card-image"/>
                        <div className="card-content">
                            <h2 className="card-title">{card.title}</h2>
                            <p className="card-text">{card.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default Home;
