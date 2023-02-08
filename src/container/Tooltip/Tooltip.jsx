import React, { useState } from "react";
import "./Tooltip.scss";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && <div className="tooltip">{text}</div>}
    </div>
  );
};

export default Tooltip;
