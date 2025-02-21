import { useDarkModeTask } from "./contextTask/darkModeContextTask"
import "./Dashstyles/dashboardSidebar.css"
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { IoCube } from "react-icons/io5";
import { LuBotMessageSquare } from "react-icons/lu";
import { MdOutlineWidgets } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsFilterCircleFill } from "react-icons/bs";
import { TbInvoice } from "react-icons/tb";
import { FaDotCircle } from "react-icons/fa";
import { HiPresentationChartLine } from "react-icons/hi";
import { RiDatabaseFill } from "react-icons/ri";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { MdFilterList } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosCopy } from "react-icons/io";
import { TiFlag } from "react-icons/ti";
import { HiChartPie } from "react-icons/hi";
import { MdDashboardCustomize } from "react-icons/md";
import { PiPlugChargingDuotone } from "react-icons/pi";
import { PiCursorTextFill } from "react-icons/pi";
import { HiDocumentText } from "react-icons/hi2";
import { LuNotepadTextDashed } from "react-icons/lu";
import { TbLayoutListFilled } from "react-icons/tb";
import { MdSpaceDashboard } from "react-icons/md";
import { SiFormspree } from "react-icons/si";
import { TbForms } from "react-icons/tb";
import { PiImageFill } from "react-icons/pi";
import { RiPieChart2Fill } from "react-icons/ri";
import { RiFileCopyFill } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import { LuPanelBottomDashed } from "react-icons/lu";
import { useState } from "react";
const DashSideBarTask=()=>
{
    const {theme}=useDarkModeTask()
    const [showDashboard,setshowDashboard]=useState(false)
    const [showCourse,setshowCourse]=useState(false)
    return(
        <div className="SideElementWhole">
        <div className={`Main-sidebar3 ${theme}`}>
            <div className={`AbleVersion ${theme}`}>
                         <h1>Able <sup className="small-text">pro</sup></h1>
                         <h1 className="versionog"><sup className="small-text2">v.1.1.1</sup></h1>
                         </div>
                         <div className= {`profileAdmin ${theme}`}>
                            <div>
                            <img src="/profilenavcartoon.jpg" className="profileImage1"/>
                            </div>
                            <div className={`profile-Info ${theme}`}>
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
                <div className={`Sub-IconDiv3 ${theme}`} onClick={()=>setshowDashboard(!showDashboard)}><span><LuChartNoAxesCombined/>Dashboard</span><span><div className={`dashNumber`}>2</div><FaAngleRight size={12} style={{marginTop:"4px"}}/></span></div>
                {showDashboard && (
                        <ul style={{display:'flex',flexDirection:"column",gap:"20px",color:"gray"}}>
                            <li>Default</li>
                            <li>Analytics</li>
                            <li>Finance</li>
                        </ul>
                    
                )}
                <div className={`Sub-IconDiv3 ${theme}`}><span><TbInvoice/>Layout</span><span style={{marginTop:"4px",marginLeft:"55px"}}><FaAngleRight size={12} /></span></div>
            </div>
            <div className={`IconDiv3 ${theme}`}>
                <span className={`sideWord ${theme}`}>Widget</span>
                <div className={`Sub-IconDiv3 ${theme}`}><span><FaDotCircle/>Statistics</span></div>
                <div className={`Sub-IconDiv3 ${theme}`}><span><RiDatabaseFill/>Data</span></div>
                <div className={`Sub-IconDiv3 ${theme}`}><span><HiPresentationChartLine/>Chart</span></div>
            </div>
            <div className={`IconDiv3 ${theme}`}>
                
                <span className={`sideWord ${theme}`}>Admin Panel</span>
                <div className={`Sub-IconDiv3 ${theme}`} onClick={()=>setshowCourse(!showCourse)}><span><HiMiniSquare3Stack3D/>Online Courses</span><span style={{marginTop:"4px",marginLeft:"0px"}}><FaAngleRight size={12} /></span></div>
                {showCourse &&(
                    <ul style={{display:'flex',flexDirection:"column",gap:"20px",color:"gray"}}>
                        <li>Dashboard</li>
                        <li>Teacher<span style={{color:"gray",fontSize:"12px",marginLeft:"60px"}}><FaAngleRight/></span></li>
                        <li>Student<span style={{color:"gray",fontSize:"12px",marginLeft:"60px"}}><FaAngleRight/></span></li>
                        <li>Courses<span style={{color:"gray",fontSize:"12px",marginLeft:"60px"}}><FaAngleRight/></span></li>
                        <li>Pricing</li>
                        <li>Site</li>
                        <li>Setting</li>
                    </ul>
                )}
                <div className={`Sub-IconDiv3 ${theme}`}><span><FaUser/>Membership</span><span style={{marginTop:"4px",marginLeft:"20px"}}><FaAngleRight size={12} /></span></div>
                <div className={`Sub-IconDiv3 ${theme}`}><span><LuBotMessageSquare/>Helpdesk</span><span style={{marginTop:"4px",marginLeft:"40px"}}><FaAngleRight size={12} /></span></div>
                <div className={`Sub-IconDiv3 ${theme}`}><span><BsFilterCircleFill/>Invoice</span><span style={{marginTop:"4px",marginLeft:"55px"}}><FaAngleRight size={12} /></span></div>
                </div>
            <div className={`IconDiv3 ${theme}`}>
                
                <span className={`sideWord ${theme}`}>UI Components</span>
                <div className={`Sub-IconDiv3 ${theme}`}><span><IoCube/>Components</span></div>
                <div className={`Sub-IconDiv3 ${theme}`}><span><TiFlag/>Animations</span></div>
                <div className={`Sub-IconDiv3 ${theme}`}><span><HiChartPie/>Icons</span><span style={{marginTop:"4px",marginLeft:"55px"}}><FaAngleRight size={12} /></span></div>
                </div>
                <div className={`IconDiv3 ${theme}`}>
                
                <span className={`sideWord ${theme}`}>Forms</span>
                <div className={`Sub-IconDiv3 ${theme}`}><span><MdDashboardCustomize/>Form Elements</span><span style={{marginTop:"4px",marginLeft:"3px"}}><FaAngleRight size={12} /></span></div>
                <div className={`Sub-IconDiv3 ${theme}`}><span><PiPlugChargingDuotone/>Form Plugins</span><span style={{marginTop:"4px",marginLeft:"17px"}}><FaAngleRight size={12} /></span></div>
                <div className={`Sub-IconDiv3 ${theme}`}><span><PiCursorTextFill/>Text Editor</span><span style={{marginTop:"4px",marginLeft:"35px"}}><FaAngleRight size={12} /></span></div>
                <div className={`Sub-IconDiv3 ${theme}`}><span><TbLayoutListFilled/>Form Layout</span><span style={{marginTop:"4px",marginLeft:"20px"}}><FaAngleRight size={12} /></span></div>
                <div className={`Sub-IconDiv3 ${theme}`}><span><HiDocumentText/>Form Layout</span><span style={{marginTop:"4px",marginLeft:"20px"}}><FaAngleRight size={12} /></span></div>
                <div className={`Sub-IconDiv3 ${theme}`}><span><TbForms/>Wizards</span><span style={{marginTop:"4px",marginLeft:"55px"}}><FaAngleRight size={12} /></span></div>
                <div className={`Sub-IconDiv3 ${theme}`}><span><MdSpaceDashboard/>Form Validation</span><span style={{marginTop:"4px",marginLeft:"3px"}}><FaAngleRight size={12} /></span></div>
                <div className={`Sub-IconDiv3 ${theme}`}><span><PiImageFill/>Image croppers</span><span style={{marginTop:"4px",marginLeft:"3px"}}><FaAngleRight size={12} /></span></div>
                
                </div>
                <div className={`IconDiv3 ${theme}`}>
                
                <span className={`sideWord ${theme}`}>Tables</span>
                <div className={`Sub-IconDiv3 ${theme}`}><span><IoIosMenu/>Bootstrap Table</span><span style={{marginTop:"4px",marginLeft:"3px"}}><FaAngleRight size={12} /></span></div>
                <div className={`Sub-IconDiv3 ${theme}`}><span><LuPanelBottomDashed/>Vanilla Table</span><span style={{marginTop:"4px",marginLeft:"24px"}}><FaAngleRight size={12} /></span></div>
                <div className={`Sub-IconDiv3 ${theme}`}><span><RiPieChart2Fill/>Data Table</span><span style={{marginTop:"4px",marginLeft:"34px"}}><FaAngleRight size={12} /></span></div>
                <div className={`Sub-IconDiv3 ${theme}`}><span><RiFileCopyFill/>DT Extensions</span><span style={{marginTop:"4px",marginLeft:"7px"}}><FaAngleRight size={12} /></span></div>
                </div>
                <div className={`IconDiv3 ${theme}`}>
                    <span className={`sideWord ${theme}`}>Chart</span>
                </div>
                </div>
        
        </div>
        </div>
    )
}
export default DashSideBarTask