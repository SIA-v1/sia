"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from '../hooks/Authcontext';
import "./settings.css";

export default function Settings() {
  const { user, setUser } = useAuth();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("Account");

  // State for profile info
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  // State for password change
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setUser({ ...user, name, email });
    alert("Profile updated successfully!");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    alert("Password changed successfully!");
  };

  const handleLogout = () => {
    setUser(null);
    router.push("/login"); // Redirect to login after logout
  };

  return (
    <div className="settings-container">
      <div className="settings-menu">
        {["Account", "Appearance", "Privacy", "Language", "Accessibility", "System setting", "Restore default settings", "Disable bot option", "Logout"].map((section) => (
          <button
            key={section}
            className={`settings-button ${activeSection === section ? "active" : ""}`}
            onClick={() => {
              if (section === "Logout") handleLogout();
              else setActiveSection(section);
            }}
          >
            {section}
          </button>
        ))}
      </div>

      <div className="settings-content">
        {activeSection === "Account" && (
          <section className="profile-section">
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
          </section>
        )}
        
        {activeSection === "Appearance" && <div>Appearance settings: Choose dark or light theme...</div>}
        {activeSection === "Privacy" && <div>Privacy settings: Manage your data privacy...</div>}
        {activeSection === "Language" && <div>Language settings: Choose your preferred language...</div>}
        {activeSection === "Accessibility" && <div>Accessibility settings: Customize accessibility options...</div>}
        {activeSection === "System setting" && <div>System settings: Manage system-related options...</div>}
        {activeSection === "Restore default settings" && <div>Reset all settings to their default values...</div>}
        {activeSection === "Disable bot option" && <div>Disable or enable bot options...</div>}
      </div>
    </div>
  );
}
