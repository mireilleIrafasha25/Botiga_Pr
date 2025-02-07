import React from 'react';
import jwt_decode from 'jwt-decode'; // default import


const UserDashboard = () => {
  const token = localStorage.getItem('token');
  let userData = {};

  if (token) {
    userData = jwt_decode(token); // Decode token to get user data
  }

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        {/* Part 1: User Profile */}
        <div style={styles.profileCard}>
          <h2>User Profile</h2>
          <p><strong>Firstname:</strong> {userData.Firstname}</p>
          <p><strong>Lastname:</strong> {userData.Lastname}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Role:</strong> {userData.role === 'admin' ? 'Administrator' : 'User'}</p>
        </div>

        {/* Part 2: Welcome Message */}
        <div style={styles.welcomeCard}>
          <h2>Welcome to your dashboard, {userData.firstname}!</h2>
          <p>This is your personal space where you can manage your profile and view your activities.</p>
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
};

export default UserDashboard;
