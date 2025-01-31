import {Outlet} from "react-router-dom"
import NavUp from "./NavUp"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Footer2 from "./footer2"
const Layout=()=>
{
    return(
        <div>
            <NavUp />
            <NavBar />
            <Outlet />
            <Footer2 />
        </div>
    )
}

export default Layout;