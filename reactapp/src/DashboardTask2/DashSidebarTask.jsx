import { useDarkModeTask } from "./contextTask/darkModeContextTask"
import "./Dashstyles/dashboardSidebar.css"
const DashSideBarTask=()=>
{
    const {theme}=useDarkModeTask()
    return(
        <div className={`Main-sidebar3 ${theme}`}>
            <div className={`IconDiv3 ${theme}`}>Navigation</div>
            <div className={`IconDiv3 ${theme}`}>Tasks</div>
            <div className={`IconDiv3 ${theme}`}>Calendar</div>
            <div className={`IconDiv3 ${theme}`}>Settings</div>
        </div>
    )
}
export default DashSideBarTask