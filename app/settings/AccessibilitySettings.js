export default function AccessibilitySettings({ isHighContrast, setIsHighContrast }) {
    return (
      <div>
        <h2>Accessibility</h2>
        <label>
          <input
            type="checkbox"
            checked={isHighContrast}
            onChange={() => setIsHighContrast(!isHighContrast)}
          />
          High Contrast Mode
        </label>
      </div>
    );
  }
  