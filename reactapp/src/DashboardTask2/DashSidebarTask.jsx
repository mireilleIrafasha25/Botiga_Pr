import { useDarkModeTask } from "./contextTask/darkModeContextTask"
import "./Dashstyles/dashboardSidebar.css"
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { IoCube } from "react-icons/io5";
import { MdOutlineWidgets } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { HiPresentationChartLine } from "react-icons/hi";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { MdFilterList } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosCopy } from "react-icons/io";
const DashSideBarTask=()=>
{
    const {theme}=useDarkModeTask()
    return(
        <div className={`Main-sidebar3 ${theme}`}>
            <div className={`AbleVersion ${theme}`}>
                         <h1>Able <sup className="small-text">pro</sup></h1>
                         <h1 className="versionog"><sup className="small-text2">v.1.1.1</sup></h1>
                         </div>
                         <div className="profileAdmin">
                            <div>
                            <img src="/profilenavcartoon.jpg" className="profileImage1"/>
                            </div>
                            <div className={`profile-Info`}>
                                <span className="john">John Doe</span>
                                <span className="ad">Administrator</span>
                            </div>
                            <div className="filter-icon">
                                <MdFilterList/>
                            </div>
                         </div>
                         <div className={`Whole-icon3`}>
            <div className={`IconDiv3 ${theme}`}>
                <span className={`sideWord ${theme}`}>Navigation</span>
                <div className={`Sub-IconDiv3 ${theme}`}><span><LuChartNoAxesCombined/>Dashboard</span><span><div className={`dashNumber`}>2</div><FaAngleRight size={12} style={{marginTop:"4px"}}/></span></div>
                <div className={`Sub-IconDiv3 ${theme}`}><span><IoIosCopy/>Layout</span><span style={{marginTop:"4px",marginLeft:"55px"}}><FaAngleRight size={12} /></span></div>
            </div>
            <div className={`IconDiv3 ${theme}`}>
                <span className={`sideWord ${theme}`}>Widget</span>
            </div>
            <div className={`IconDiv3 ${theme}`}>
                
                <span className={`sideWord ${theme}`}>Admin Panel</span>
                
                </div>
            <div className={`IconDiv3 ${theme}`}>
                
                <span className={`sideWord ${theme}`}>UI Components</span>
        
                </div>
                <div className={`IconDiv3 ${theme}`}>
                
                <span className={`sideWord ${theme}`}>Forms</span>
                
                </div>
                <div className={`IconDiv3 ${theme}`}>
                
                <span className={`sideWord ${theme}`}>Tables</span>
                </div>
                <div className={`IconDiv3 ${theme}`}>
                    <span className={`sideWord ${theme}`}>Chart</span>
                </div>
                </div>
        
        </div>
    )
}
export default DashSideBarTask