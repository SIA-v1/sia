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
    <div className="max-w-lg mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
      <form onSubmit={handleProfileUpdate} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 mt-4 font-medium text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Update Profile
        </button>
      </form>
  
      <h2 className="text-2xl font-semibold mt-8 mb-4">Change Password</h2>
      <form onSubmit={handleChangePassword} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Current Password:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
            className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium">New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 mt-4 font-medium text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Change Password
        </button>
      </form>
    </div>
  );
  
}
