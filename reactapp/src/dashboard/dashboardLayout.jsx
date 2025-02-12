import SideBar from "./sidebar";
import NavBarDashboard from "./navbar";
import { Outlet } from "react-router-dom";
import "./dashboard-styles/dashboard-layout.css"
const DashboardLayout = () => {
    return (
        <div className="Main-outlet">
             <div className="SideBar-Element">
            <SideBar />
            </div>
            <div className="NavandDashboard">
            <div className="NavBarDashboard"><NavBarDashboard />  </div>
            <Outlet />
            </div> 
        </div>
    );
}
export default DashboardLayout;