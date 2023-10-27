import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('#FFFFFF'); 

  const changeBackgroundColor = () => {
   
    const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div style={{height:"100vh", backgroundColor: bgColor }} className='d-flex justify-content-center align-items-center '>
    <div className='d-flex justify-content-center align-items-center '>  
    <Button onClick={changeBackgroundColor} type="submit" className='shadow btn text-light w-100 rounded bg-danger' variant="">Change Color</Button>
      </div>
    </div>
  );
}

export default App;
