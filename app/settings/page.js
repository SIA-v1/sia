"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/Authcontext";
import AccountSettings from "./AccountSettings";
import AppearanceSettings from "./AppearanceSettings";
import PrivacySettings from "./Privacy";
import LanguageSettings from "./LanguageSettings";
import AccessibilitySettings from "./AccessibilitySettings";
import "./settings.css";

export default function Settings() {
  const { user, setUser } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Account");
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("English");
  const [isBotEnabled, setIsBotEnabled] = useState(true);
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const handleRestoreDefaults = () => {
    setUser(null);
    setTheme("dark");
    setLanguage("English");
    setIsBotEnabled(true);
    setIsHighContrast(false);
    alert("Settings restored to default.");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Account":
        return <AccountSettings user={user} setUser={setUser} />;
      case "Appearance":
        return <AppearanceSettings theme={theme} toggleTheme={toggleTheme} />;
      case "Privacy":
        return <PrivacySettings isBotEnabled={isBotEnabled} setIsBotEnabled={setIsBotEnabled} />;
      case "Language":
        return <LanguageSettings language={language} setLanguage={setLanguage} />;
      case "Accessibility":
        return <AccessibilitySettings isHighContrast={isHighContrast} setIsHighContrast={setIsHighContrast} />;
      default:
        return null;
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-sidebar">
        {["Account", "Appearance", "Privacy", "Language", "Accessibility", "Restore Default Settings", "Logout"].map((tab) => (
          <button
            key={tab}
            className={`settings-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="settings-content">
        {renderContent()}
        {activeTab === "Restore Default Settings" && (
          <button onClick={handleRestoreDefaults}>Restore Defaults</button>
        )}
        {activeTab === "Logout" && (
          <button onClick={() => { setUser(null); router.push("/login"); }}>Logout</button>
        )}
      </div>
    </div>
  );
}
