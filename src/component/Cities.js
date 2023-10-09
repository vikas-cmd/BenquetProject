import React from 'react';

import './cities.css';

const Cities = () => {
  const menuItems = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

  return (
    <div className="App">
      <div className="menu-bar">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cities;



    

