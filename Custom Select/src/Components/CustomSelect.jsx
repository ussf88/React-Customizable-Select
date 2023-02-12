import React from "react";
import CustomOption from "./CustomOption";
import "../Styling/CustomSelect.css";
import { useState } from "react";
export default function CustomSelect({ options,OnSelect }) {
  const [showOptions, setShowOptions] = useState(false);
  const [checkedOptions, setcheckedOptions] = useState(
    options.filter((option) => option?.checked == true)
  );

  const OnChecked = (option, isChecked) => {
    let updatedCheckedOptions;
    if (isChecked) updatedCheckedOptions= [...checkedOptions, option];
    else updatedCheckedOptions = checkedOptions.filter((e) => e.id != option.id);
    setcheckedOptions(updatedCheckedOptions);
    OnSelect(updatedCheckedOptions);
  };
  return (
    <div className="custom-select-container">
      <button
        className="select-button"
        onClick={() => setShowOptions(!showOptions)}
      >
        Select
      </button>
      {showOptions && (
        <div className="options-container">
          {options.map((e) => (
            <CustomOption
              key={e.id}
              name={e.name}
              id={e.id}
              value={e.value}
              label={e.label}
              IsChecked={e?.checked ?? false}
              OnChecked={(optionChecked) => OnChecked(e, optionChecked)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
