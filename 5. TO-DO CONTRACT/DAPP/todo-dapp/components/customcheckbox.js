// CustomCheckbox.js
import React, { useState } from "react";
import "./customcheckbox";

const CustomCheckbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};

export default CustomCheckbox;
