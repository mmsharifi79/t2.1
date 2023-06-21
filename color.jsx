import React, { useState } from 'react';

function ColorChanger() {
  const [color, setColor] = useState('white');

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div>
      <button onClick={() => handleColorChange('red')}>Red</button>
      <button onClick={() => handleColorChange('green')}>Green</button>
      <button onClick={() => handleColorChange('blue')}>Blue</button>
      <button onClick={() => handleColorChange('yellow')}>Yellow</button>
      <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>
    </div>
  );
}

export default ColorChanger;
