import DashNavBar2 from "./dashboardnavbar";
import DashViewTask from "./DashViewTask";
import { Outlet } from "react-router-dom";
const DashTaskLayout=()=>
{
    return (
        <div>
       <DashNavBar2/>
       <DashViewTask/>
       <Outlet />   

           
        </div>
    )
}
export default DashTaskLayout;