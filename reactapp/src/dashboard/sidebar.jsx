import { MdOutlineAnalytics } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { LiaSignOutAltSolid } from "react-icons/lia";
import "./dashboard-styles/sidebar.css"
const SideBar=()=>
{
    return(
       
        <div className="container">
          <div className="Business">
            <img src="/dashpicx1.jpg" alt="Business" />
            <span>Business</span>
            </div>  
            <div className="Main-Icon">
            <div className="icon"><MdOutlineAnalytics/><span >Analytics</span></div>
            <div className="icon"><MdOutlineProductionQuantityLimits/><span >Product</span></div>
            <div className="icon"><CgMail/><span>Reports</span></div> 
            <div className="icon"><FiUser/><span>Customers</span></div>
            
            </div>
            <div className="Main-Icon2">
             <div className="icon2"><MdOutlineSettingsSuggest/><span>Settings</span></div>
            <div className="icon2"><LiaSignOutAltSolid/><span>Sign Out</span></div>
            </div>
            <div className="Main-DivandCarton">
                <div className="DivandCarton">
                    <img src="/CatoonMan.jpg" alt="User" />
                    <div className="ContactHelp">
                    Need Help feel Free to contact
                        <button> Get Support</button>
                    </div>
                </div>
            </div>
        </div>
              
        
    )
}
const styles={
    container: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
      },
      row: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
      },
      profileCard: {
        // flex: 1,
        // backgroundColor: '#f0f0f0',
        // padding: '20px',
        // borderRadius: '8px',
        // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      welcomeCard: {
        flex: 2,
        backgroundColor: '#e6f7ff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      actions: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginTop: '20px',
      },
      actionButton: {
        padding: '10px 20px',
        backgroundColor: '#1890ff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      },
      logoutButton: {
        padding: '10px 20px',
        backgroundColor: '#ff4d4f',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      },
}
export  default SideBar;