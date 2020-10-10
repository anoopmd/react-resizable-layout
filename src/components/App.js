import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [paneWidth, setPaneWidth] = useState(300);
  const [dragging, setDragging] = useState(false);

  const handleMouseMove = (e) => {
    e.preventDefault();
    if(dragging) {
      setPaneWidth(e.clientX - 10);
    }
  };

  const handleMouseUp = (e) => {
    setDragging(false);
  };

  const handleMouseDown = (e) => {
    setDragging(true);
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [dragging, paneWidth]);

  return (
      <div>
        <h4>React Resizable Layout</h4>
        <div style={{display: 'flex'}}>
          <div style={{width: `${paneWidth}px`, height: '200px', background: 'blue'}}>
          </div>
          <div onMouseDown={handleMouseDown} style={{display: 'flex', cursor: 'col-resize', width: '6px'}}>
            <div style={{background: 'blue', width: '3px'}}></div>
            <div style={{background: 'red', width: '3px'}}></div>
          </div>
          <div style={{width: '300px', height: '200px', background: 'red'}}>
          </div>
        </div>
      </div>
  );
};
export default App;