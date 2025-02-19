import DashNavBar2 from "./dashboardnavbar";
import { Outlet } from "react-router-dom";
import DashSideBarTask from "./DashSidebarTask";
import { useDarkModeTask } from "./contextTask/darkModeContextTask";
import "./Dashstyles/dashboard-layout.css"
const DashTaskLayout=()=>
{
    const {theme}=useDarkModeTask();
    return (
        <div className={`Main-outlet2 ${theme}`}>
       
     <div className={`SideBar-Element2 ${theme}`}><DashSideBarTask/></div> 
     <div className="NavBarandDash2">
     <div className={`NavBarDashboard2 ${theme}`}><DashNavBar2/></div> 
       <div className={`outset2 ${theme}`}><Outlet />   </div>
       </div>
           
        </div>
    )
}
export default DashTaskLayout;