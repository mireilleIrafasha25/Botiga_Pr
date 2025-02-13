import React, { useState } from "react";
import "./dashboard-styles/setting.css";
import Profile from "./profile";
const Settings = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return <div><Profile/></div>;
      case "Account":
        return <div>Change your password and manage authentication settings.</div>;
      case "Privacy":
        return <div>Control your data and view your activity log.</div>;
      case "System Preferences":
        return <div>Select your preferred language and theme (dark/light).</div>;
      case "User Roles":
        return <div>Manage roles and permissions for users (Admin only).</div>;
      default:
        return <div>Select a tab to see the content.</div>;
    }
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="tabs">
        {["Profile", "Account", "Privacy", "System Preferences", "User Roles"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Settings;
