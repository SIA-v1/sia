import { useState } from "react";

export default function AccountSettings({ user, setUser }) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
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

  return (
    <div>
      <h2>Account Settings</h2>
      <form onSubmit={handleProfileUpdate}>
        <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /></label>
        <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
        <button type="submit">Update Profile</button>
      </form>
      <h2>Change Password</h2>
      <form onSubmit={handleChangePassword}>
        <label>Current Password: <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required /></label>
        <label>New Password: <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required /></label>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
}
