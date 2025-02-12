import jwt_decode from 'jwt-decode';
import { useAuth } from '../component/AuthProvider';
import { useNavigate } from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import { FaUsers } from 'react-icons/fa6';
import "./dashboard-styles/adminpro.css"
const AdminDashboardPro=()=>
{
    const token=localStorage.getItem('token');
    let userData={};
    const {logout}=useAuth();
    const navigate=useNavigate();
    const handleLogout=()=>
    {
        logout();
        navigate('/');
    }
    const [activeContent,setActiveContent]=useState("Analytics");
    const HandleActionClick=(action)=>{
        setActiveContent(action);
    };
    if(token){
        try{
            userData=jwt_decode(token);
        }catch(e){
            console.error(e);
            handleLogout();
        }
    }
    useEffect(()=>
    {
        if(!token || userData.role !=='admin')
        {
            navigate('/'); // Redirect non-admins to home
        }
    },[token,userData,navigate]);
    return(
        <div className='container'>
            <div className='row'>
              <div className='profileCard'>
                Admin pro
                {/* <div style={styles.actions}>
                          <div style={{display:"flex",gap:"20px"}}><AiTwotoneHome onClick={()=>HandleActionClick('dashboard')}/><span style={{color:"black"}} onClick={()=>HandleActionClick('dashboard')}>DashBoard</span></div>
                           <div style={{display:"flex",gap:"20px"}}> <FaUsers onClick={() => HandleActionClick('manageUsers')}/><span onClick={() => HandleActionClick('manageUsers')} style={{color:"black"}}>Users</span></div>
                           <div style={{display:"flex",gap:"20px"}}><TbReportSearch onClick={() => HandleActionClick('reports')}/> <span style={{color:"black"}} onClick={() => HandleActionClick('reports')}>Reports</span></div> 
                       
                          </div> */}
              </div>
            </div>
        </div>
    )
}
export default AdminDashboardPro;