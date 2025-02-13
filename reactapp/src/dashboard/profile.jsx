import React from "react";
import "./dashboard-styles/profile.css";

const Profile = () => {
  return (
    <div className="tab-panel">
      <h2>Profile Settings</h2>
      <p>Update your personal information here.</p>
      <form className="form">
        <label>
          First Name:
          <input type="text" placeholder="Enter your first name" />
        </label>
        <label>
          Last Name:
          <input type="text" placeholder="Enter your last name" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <button type="submit" className="submit-button">Save Changes</button>
      </form>
    </div>
  );
};

export default Profile;
