import {Outlet} from "react-router-dom"
import NavUp from "./NavUp"
import NavBar from "./NavBar"
import Footer from "./Footer"
const Layout=()=>
{
    return(
        <div>
            <NavUp />
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;