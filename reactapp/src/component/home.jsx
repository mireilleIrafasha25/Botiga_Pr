import React from "react";
// import "../styles/home.css"; 
import LoginPage from "./loginPage";
import Homediv1 from "./Homediv1";
import Homediv2 from "./Homediv2"
import NewArrival from "./NewArrival";
import VendorHomediv1 from "./vendorHome";
import VendorHomediv2 from "./vendorHomediv2";
const Home = () => {
return (
        <div>
            <Homediv1/>
            <Homediv2/>
            <NewArrival/>
            {/* <VendorHomediv1/>
            <VendorHomediv2/> */}
        </div>
    );
}

export default Home;
