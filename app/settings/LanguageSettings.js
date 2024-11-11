export default function LanguageSettings({ language, setLanguage }) {
    const handleLanguageChange = (e) => setLanguage(e.target.value);
  
    return (
      <div>
        <h2>Language</h2>
        <select value={language} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
    );
  }
  