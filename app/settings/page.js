// app/settings/page.js
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from '../hooks/Authcontext';
import "./settings.css";

export default function Settings() {
  const { user, setUser } = useAuth();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("Account"); // Track active tab
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [theme, setTheme] = useState("dark"); // Initialize with "dark" theme
  const [language, setLanguage] = useState("English");
  const [isBotEnabled, setIsBotEnabled] = useState(true);
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    // Apply the theme class to the body element when the theme changes
    document.body.classList.toggle("dark-theme", theme === "dark");
    document.body.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between dark and light theme
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // return (
  //   
  // )

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setUser({ ...user, name, email });
    alert("Profile updated successfully!");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    alert("Password changed successfully!");
  };

  const handleLanguageChange = (e) => setLanguage(e.target.value);

  const handleHighContrastToggle = () => setIsHighContrast(!isHighContrast);

  const handleRestoreDefaults = () => {
    setName("");
    setEmail("");
    setCurrentPassword("");
    setNewPassword("");
    setTheme("dark");
    setLanguage("English");
    setIsBotEnabled(true);
    setIsHighContrast(false);
    alert("Settings restored to default.");
  };

  const handleLogout = () => {
    setUser(null);
    router.push("/login");
  };

  const renderSidebar = () => (
    <div className="settings-sidebar">
      {["Account", "Appearance", "Privacy", "Language", "Accessibility", "System Settings", "Restore Default Settings", "Disable Bot Option", "Logout"].map((tab) => (
        <button
          key={tab}
          className={`settings-button ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "Account":
        return (
          <div className="profile-section">
            <h2>Update Profile</h2>
            <form onSubmit={handleProfileUpdate}>
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <button type="submit">Update Profile</button>
            </form>
            <h2>Change Password</h2>
            <form onSubmit={handleChangePassword}>
              <label>
                Current Password:
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </label>
              <label>
                New Password:
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </label>
              <button type="submit">Change Password</button>
            </form>
          </div>
        );
      case "Appearance":
        return (
          <div className="appearance-section">
            <h2>Appearance</h2>
            <button onClick={toggleTheme}>
              Switch to {theme === "dark" ? "Light" : "Dark"} Theme
            </button>
          </div>
        );
      case "Privacy":
        return (
          <div className="privacy-section">
            <h2>Privacy</h2>
            <label>
              <input
                type="checkbox"
                checked={isBotEnabled}
                onChange={() => setIsBotEnabled(!isBotEnabled)}
              />
              Enable Bot Assistance
            </label>
          </div>
        );
      case "Language":
        return (
          <div className="language-section">
            <h2>Language</h2>
            <select value={language} onChange={handleLanguageChange}>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>
        );
      case "Accessibility":
        return (
          <div className="accessibility-section">
            <h2>Accessibility</h2>
            <label>
              <input
                type="checkbox"
                checked={isHighContrast}
                onChange={handleHighContrastToggle}
              />
              High Contrast Mode
            </label>
          </div>
        );
      case "System Settings":
        return (
          <div className="system-section">
            <h2>System Settings</h2>
            <p>Configure system-level settings here.</p>
          </div>
        );
      case "Restore Default Settings":
        return (
          <div className="restore-section">
            <h2>Restore Default Settings</h2>
            <button onClick={handleRestoreDefaults}>Restore Defaults</button>
          </div>
        );
      case "Disable Bot Option":
        return (
          <div className="bot-section">
            <h2>Disable Bot Option</h2>
            <label>
              <input
                type="checkbox"
                checked={!isBotEnabled}
                onChange={() => setIsBotEnabled(!isBotEnabled)}
              />
              Disable Bot Assistance
            </label>
          </div>
        );
      case "Logout":
        return (
          <div className="logout-section">
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="settings-container">
      {renderSidebar()}
      <div className="settings-content">{renderContent()}</div>
    </div>
  );
}
