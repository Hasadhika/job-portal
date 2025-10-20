// src/components/FilterDropdown.js

import React from 'react';

function FilterDropdown({ placeholder, items, onSelectFilter }) {
  const handleClick = (item) => {
    // This visually updates the text in the filter box.
    const input = document.getElementById(`filter-input-${placeholder}`);
    if (input) {
      input.value = item || ''; // If item is null (cleared), set text to empty.
    }
    // This calls the function from Jobs.js to update the actual filter logic.
    onSelectFilter(placeholder, item);
  };

  return (
    <div className="dropdown">
      <input type="text" readOnly placeholder={placeholder} className="output" id={`filter-input-${placeholder}`} />
      <div className="lists">
        {/* Add a "Clear" option to reset this specific filter */}
        <p className="items" onClick={() => handleClick(null)}>Clear</p>
        
        {items.map((item, index) => (
          <p key={index} className="items" onClick={() => handleClick(item)}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default FilterDropdown;