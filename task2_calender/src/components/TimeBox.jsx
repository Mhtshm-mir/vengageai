import React, { useState } from 'react';
import '../App.css';

function TimeBox({ time, bg }) {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = {
    background: 'blue',
    cursor:"pointer"
  };

  const normalStyle = {
    border: '1px solid black',
    margin: '20px',
    textAlign: 'center',
    padding: '6px 6px',
    background: bg,
  };

  return (
    <>
    {
    bg=="white" ? (
        <div
      style={isHovered ? { ...normalStyle, ...hoverStyle } : normalStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {time}
    </div>
    ):
    <div style={{border:"1px solid black",margin:"20px",textAlign:"center",padding:"6px 6px",background:`${bg}` ,color:"white"}}>
{time}
</div> 
    
}
    </>
    
  );
}

export default TimeBox;













