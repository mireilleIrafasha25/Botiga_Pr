import DashNavBar2 from "./dashboardnavbar";
import { Outlet } from "react-router-dom";
import DashSideBarTask from "./DashSidebarTask";
import { useDarkMode } from "../dashboard/context/DarkModeContext";
import "./Dashstyles/dashboard-layout.css"
const DashTaskLayout=()=>
{
    const {darkMode}=useDarkMode();
    return (
        <div className={`Main-outlet2 ${darkMode?"dark":"light"}`}>
       <div className={`NavBarDashboard2 ${darkMode?"dark":"light"}`}><DashNavBar2/></div>
     <div className={`SideBar-Element2 ${darkMode?"dark":"light"}`}><DashSideBarTask/></div>  
       <div className={`outset2 ${darkMode?"dark":"light"}`}><Outlet />   </div>

           
        </div>
    )
}
export default DashTaskLayout;