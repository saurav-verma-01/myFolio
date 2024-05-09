import React from "react";
import "./toggle.css";

const Toggle = ({ onToggle, isDark }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        checked={isDark}
        onChange={onToggle}
      />
      <label htmlFor="check"></label>
    </div>
  );
};

export default Toggle;
