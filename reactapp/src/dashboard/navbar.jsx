import "./dashboard-styles/navbarDashboard.css"
import { CiCalendar } from "react-icons/ci";
import DarkModeToggle from "./DarkMode";
import { useDarkMode } from "./context/DarkModeContext";
import { FaBars } from "react-icons/fa6";
const NavBarDashboard=()=>
   
{
    const {darkMode}=useDarkMode();
    return(
        <div className="Main-NavBar">
      
      <div ><FaBars/></div>
      <div className="subdark">
      <div className="DarkMode"><DarkModeToggle/></div>
      <div className={`profile ${darkMode?'dark':'light'}`}>
        <img src="/dashprofile.jpg" alt="ProfilePic"/>
        <span>Mimi Jesie</span>
        </div>
      </div>
      
        </div>
    )
}
export default NavBarDashboard;