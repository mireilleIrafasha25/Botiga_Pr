import React, { useState } from 'react';

const AdminDashboard = () => {
  const [activeContent, setActiveContent] = useState('dashboard'); 

  const handleActionClick = (action) => {
    setActiveContent(action); 
  };

  return (
    <div style={styles.container}>
      {/* Div 1: Navigation Actions */}
      <div style={styles.sidebar}>
        <button style={styles.actionButton} onClick={() => handleActionClick('dashboard')}>
          Dashboard
        </button>
        <button style={styles.actionButton} onClick={() => handleActionClick('manageUsers')}>
          Manage Users
        </button>
        <button style={styles.actionButton} onClick={() => handleActionClick('manageRoles')}>
          Manage Roles
        </button>
      </div>

      {/* Div 2: Dynamic Content */}
      <div style={styles.contentArea}>
        {activeContent === 'dashboard' && (
          <div>
            <h2>Welcome to the Admin Dashboard</h2>
            <p>This is where you'll see analytics and charts.</p>
          </div>
        )}
        {activeContent === 'manageUsers' && (
          <div>
            <h2>Manage Users</h2>
            <p>Here is the list of all users:</p>
            <ul>
              <li>John Doe</li>
              <li>Jane Smith</li>
              <li>Emily Davis</li>
            </ul>
          </div>
        )}
        {activeContent === 'manageRoles' && (
          <div>
            <h2>Manage Roles</h2>
            <p>Here you can manage user roles.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#2c3e50',
    padding: '20px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  actionButton: {
    backgroundColor: '#34495e',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  contentArea: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#ecf0f1',
  },
};

export default AdminDashboard;
