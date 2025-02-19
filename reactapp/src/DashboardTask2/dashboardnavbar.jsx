import "./Dashstyles/dashboardnavbar-Task.css"
import { useDarkModeTask } from "./contextTask/darkModeContextTask";
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
  const { theme, toggleTheme } = useDarkModeTask();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 🔹 State ya dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleThemeChange = (selectedTheme) => {
    toggleTheme(selectedTheme);
    setIsDropdownOpen(false);
};


return(
    <div>
        <div className="Main-Navbar2">
            <div className={`NavBarDown2 ${theme}`}>
             <div className={`AbleVersion ${theme}`}>
             <h1>Able <sup className="small-text">pro</sup></h1>
             <h1 className="versionog"><sup className="small-text2">v.1.1.1</sup></h1>
             </div>
             <div className={`SearchDiv2 ${theme}`}>
               <CiSearch/>
               <input type="text" placeholder="ctrl + K" className="search-input"/>
             </div>
             <div className={`IconDiv2 ${theme}`}>
                 <MdSunny size={24} className={`Sun-Icon ${theme}`} onClick={toggleDropdown}/>
                 {isDropdownOpen && (
                <div className={`theme-dropdown ${theme}`}>
                  <ul>
                    <li onClick={() => handleThemeChange('dark')}><MdDarkMode style={{marginRight:"5px"}} />  Dark</li>
                    <li onClick={() => handleThemeChange('light')}><MdSunny style={{marginRight:"5px"}}/> Light</li>
                    <li onClick={() => handleThemeChange('default')}><MdSettingsApplications style={{marginRight:"5px"}}/> Default</li>
                  </ul>
                </div>
              )}
                 <MdSettingsApplications size={24} className={`Settings-Icon ${theme}`}/>
                 <IoFlashSharp size={24} className={`Flash-Icon ${theme}`}/>
                 <IoMdNotifications size={24} className={`Notification-Icon ${theme}`}/>
                 <MdLanguage size={24} className={`Language-Icon ${theme}`}/>
                 <img src="/profilenavcartoon.jpg" className="profileImage"/>
             </div>
            </div>
        </div>
    </div>
)
}
export default DashNavBar2;