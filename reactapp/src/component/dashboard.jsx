import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import ManageUsers from './ManageUsers';
import UserChart from './userchart';
import { FaUsers } from "react-icons/fa6";
import { FaRegChartBar } from 'react-icons/fa';
const UserDashboard = () => {
  const token = localStorage.getItem('token');
  let userData = {};
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
   const [activeContent,setActiveContent] = useState("dashboard")
   const HandleActionClick=(action)=>
   {
     setActiveContent(action)
   };
  if (token) {
    try {
      userData = jwt_decode(token);
    } catch (error) {
      console.error('Invalid token');
      handleLogout();
    }
  }

  useEffect(() => {
    if (!token || userData.role !== 'admin') {
      navigate('/'); // Redirect non-admins to home
    }
  }, [token, userData, navigate]);

  return (
    <div style={styles.container}>
      <h1>Admin Dashboard</h1>
      <div style={styles.row}>
        {/* User Profile Section */}
        <div style={styles.profileCard}>
          <div style={styles.actions}>
           <div style={{display:"flex",gap:"20px"}}> <FaUsers onClick={() => HandleActionClick('manageUsers')}/><span onClick={() => HandleActionClick('manageUsers')} style={{color:"black"}}>Users</span></div>
            <FaRegChartBar onClick={() => HandleActionClick('reports')}/>
            <button style={styles.actionButton} onClick={()=>HandleActionClick('dashboard')}>DashBoard</button>
          </div>
        </div>

        {/* Admin Actions Section */}
        <div style={styles.welcomeCard}>
          {activeContent==='dashboard' && (
            <div>
              <h2>Dashboard</h2>
              <p>Monitor system usage and activity.</p>
              <UserChart />
            
          {/* <h2>Welcome, Admin {userData.Firstname || 'User'}!</h2>
          <p>Here you can manage users, monitor activities, and view system statistics.</p> */}
          </div>
        )}
        {activeContent==='manageUsers' && (
          <div>
            <ManageUsers/>
          </div>)}
          {activeContent==='reports' && (
            <div>
              <h2>Reports</h2>
              <p>View system statistics and generate reports.</p>
            </div>)}
        </div>
      </div>
    </div>
  );
};

const styles = {
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
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
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
};

export default UserDashboard;
