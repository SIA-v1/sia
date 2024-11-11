"use client"
import React, { useEffect, useState } from 'react';

export default function AppearanceSettings() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Start in dark mode

  useEffect(() => {
      // Check for the saved theme in localStorage
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'light') {
          document.body.classList.remove('dark-theme');
          setIsDarkMode(false);
      }
  }, []);

  const toggleTheme = () => {
      if (isDarkMode) {
          document.body.classList.remove('dark-theme');
          localStorage.setItem('theme', 'light');
      } else {
          document.body.classList.add('dark-theme');
          localStorage.setItem('theme', 'dark');
      }
      setIsDarkMode(!isDarkMode);
  };
  
  return (
    <div>
      <h2>Appearance</h2>
      <button onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
    </div>
  );
}
