import jwt_decode from 'jwt-decode';
import { useAuth } from '../component/AuthProvider';
import { useNavigate } from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import { FaUsers } from 'react-icons/fa6';
import Analytics from './Analytics';
const AdminDashboardPro=()=>
{
    
    return(
        <div className='Main-AdminProHome'>
            <Analytics />
            </div>
       
    )
}
export default AdminDashboardPro;