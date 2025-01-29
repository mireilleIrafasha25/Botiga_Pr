import React from "react";
import "../styles/home.css"
const Home=()=>
{
    const cards = [
        {
            title: "Card 1",
            content: "Content 1",
            image: "/fresh lemonade.jpg"
        }
    ];
    return(
        <div className="home">
            {cards.map((card, index) => (
                <div key={index} className="card-container">
                    <img src={card.image} alt={card.title} />
                    <h2>{card.title}</h2>
                    <p>{card.content}</p>
                </div>
            ))}
        </div>
    )
}
export default Home;