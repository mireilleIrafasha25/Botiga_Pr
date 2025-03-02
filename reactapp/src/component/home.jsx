import React from "react";
import Homediv1 from "./Homediv1";
import Homediv2 from "./Homediv2"
import NewArrival from "./NewArrival";
import { FaChevronRight } from "react-icons/fa";
import "../styles/vendorHome.css"
const Vendors=[
    {
        id:1,
        name:"Santa Monica's Store",
        rating:5,
        location:"New York,NY",
        image:"/SantaStore.jpg",
    },
    {
        id:2,
        name:" John Doe's Store",
        rating:4,
        location:"New York,NY",
        image:"/JohnDoeStore.jpg",
    },
    {
        id:3,
        name:"Digital Good's Store",
        rating:5,
        location:"New York, NY",
        image:"/DinapopStore.jpg",
    }
]
const Home = () => {
return (
        <div>
            <Homediv1/>
            <Homediv2/>
            <NewArrival/>
            <div className="Main-Vendor1">
            <h4>Our Vendor List</h4>
            <div className="card-store1">
                {Vendors.map((vendor) => (
                    <div key={vendor.id} className="card1">
                        <img src={vendor.image} alt={vendor.name} className="card-image12" />
                        <div className="vendorname23">
                            <h3>{vendor.name}</h3>
                            <div className="rightIcon2">
                                <FaChevronRight className="iconog54" />
                            </div>
                        </div>
                        <div className="vendor-location">{vendor.location}</div>
                    </div>
                ))}
            </div>
            <div className="card-store12">
                {Vendors.map((vendor) => (
                    <div key={vendor.id} className="card1">
                        <img src={vendor.image} alt={vendor.name} className="card-image12" />
                        <div className="vendorname23">
                            <h3>{vendor.name}</h3>
                            <div className="rightIcon2">
                                <FaChevronRight className="iconog54" />
                            </div>
                        </div>
                        <div className="vendor-location">{vendor.location}</div>
                    </div>
                ))}
                
            </div>
            <div className="vendorButton">SEE ALL VENDORS</div>
        </div>
        </div>
    );
}

export default Home;
