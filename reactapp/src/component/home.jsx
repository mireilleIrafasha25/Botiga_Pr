import React from "react";
import Homediv1 from "./Homediv1";
import Homediv2 from "./Homediv2"
import NewArrival from "./NewArrival";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import ShopCard2 from "./shopcard2";
import Shopcard1 from "./shopcard1";
import ShopCard3 from "./shopcard3";
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
const Images=[
    {
        id:1,
        image:"/inst1.jpg",
    },
    {
        id:2,
        image:"/inst2.jpg",
    },
    {
        id:3,
        image:"/inst3.jpg",
    },
    {
        id:4,
        image:"/inst4.jpg",
    },
    {
        id:5,
        image:"/inst5.jpg",
    },
    {
        id:6,
        image:"/inst6.jpg",
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
                    <div key={vendor.id} className="card14">
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
                    <div key={vendor.id} className="card14">
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
            <Link to="/vendor" style={{textDecoration:"none"}}><div className="vendorButton">SEE ALL VENDORS</div></Link>
        </div>
        <div className="Main-ExploreProduct">
            <div className="explore-product9">Explore Our Products</div>
            <Shopcard1/>
            <ShopCard2/>
            <ShopCard3/>
            <Link to="/shop" style={{textDecoration:"none"}}><div className="productButton12">VIEW ALL PRODUCTS</div></Link>
        </div>
        <div>
            <div>Follow us on @instagram</div>
            <div className="Card-ImageInst">
                {Images.map((vendor)=>
                {
                    return(
                        <img key={vendor.id} src={vendor.image} alt={vendor.name} className="card-image15"/>
                    )
                })}
            </div>
        </div>
        </div>
    );
}

export default Home;
