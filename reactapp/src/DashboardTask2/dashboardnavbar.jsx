import "./Dashstyles/dashboardnavbar-Task.css"
import { useDarkMode } from "../dashboard/context/DarkModeContext";
import { CiSearch } from "react-icons/ci";
import { MdSunny } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";
import { IoFlashSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
const DashNavBar2=()=>
    
{
    const {darkMode,toggleDarkMode}=useDarkMode();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 🔹 State ya dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleThemeChange = () => {
    toggleDarkMode()
    setIsDropdownOpen(false); 
  };

return(
    <div>
        <div className="Main-Navbar2">
            <div className="NavBarUp2">
                <div className="LogoDiv"><img src="/envato market.jpg" alt="envatologo"/><span className=""><b>envato</b>market</span></div>
                <div><button className="BuyNowButtonNav">Buy Now</button></div>
            </div>
            <div className={`NavBarDown2 ${darkMode?"dark":"light"}`}>
             <div className={`AbleVersion ${darkMode?"dark":"light"}`}>
             <h1>Able <sup className="small-text">pro</sup></h1>
             <h1 className="versionog"><sup className="small-text2">v.1.1.1</sup></h1>
             </div>
             <div className={`SearchDiv2 ${darkMode?"dark":"light"}`}>
               <CiSearch/>
               <input type="text" placeholder="ctrl + K" className="search-input"/>
             </div>
             <div className={`IconDiv2 ${darkMode?"dark":"light"}`}>
                 <MdSunny size={24} className={`Sun-Icon ${darkMode?"dark":"light"}`} onClick={toggleDropdown}/>
                 {isDropdownOpen && (
                <div className={`theme-dropdown ${darkMode?"dark":"light"}`}>
                  <ul>
                    <li onClick={() => handleThemeChange()}><MdDarkMode style={{marginRight:"5px"}} />  Dark</li>
                    <li onClick={() => handleThemeChange()}><MdSunny style={{marginRight:"5px"}}/> Light</li>
                    <li onClick={() => handleThemeChange()}><MdSettingsApplications style={{marginRight:"5px"}}/> Default</li>
                  </ul>
                </div>
              )}
                 <MdSettingsApplications size={24} className={`Settings-Icon ${darkMode?"dark":"light"}`}/>
                 <IoFlashSharp size={24} className={`Flash-Icon ${darkMode?"dark":"light"}`}/>
                 <IoMdNotifications size={24} className={`Notification-Icon ${darkMode?"dark":"light"}`}/>
                 <MdLanguage size={24} className={`Language-Icon ${darkMode?"dark":"light"}`}/>
                 <img src="/profilenavcartoon.jpg" className="profileImage"/>
             </div>
            </div>
        </div>
    </div>
)
}
export default DashNavBar2;