export default function PrivacySettings({ isBotEnabled, setIsBotEnabled }) {
    return (
      <div>
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
  }
  