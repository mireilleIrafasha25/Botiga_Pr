import "./dashboard-styles/navbarDashboard.css"
import { CiCalendar } from "react-icons/ci";
import DarkModeToggle from "./DarkMode";
import { useDarkMode } from "./context/DarkModeContext";
const NavBarDashboard=()=>
   
{
    const {darkMode}=useDarkMode();
    return(
        <div className="Main-NavBar">
      <div>Analytics</div>
      <div className="NumberCode"><span>1233u878709-989078767</span><CiCalendar className="calendar-icon" /></div>
      <div className="DarkMode"><DarkModeToggle/></div>
      <div className={`profile ${darkMode?'dark':'light'}`}>
        <img src="/dashprofile.jpg" alt="ProfilePic"/>
        <span>Mimi Jesie</span>
        </div>
        </div>
    )
}
export default NavBarDashboard;