import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import StyleWrapper from './StyleWrapper';

const App = () => {
  const [leftPaneWidth, setLeftPaneWidth] = useState(300);
  const [dragging, setDragging] = useState(false);
  const leftPaneRef = useRef(null);

  const handleMouseMove = (e) => {
    e.preventDefault();
    if(dragging) {
      let offsetLeft = leftPaneRef.current.offsetLeft;
      setLeftPaneWidth(e.clientX - offsetLeft);
    }
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [dragging, leftPaneWidth]);

  return (
      <StyleWrapper>
        <div className="container">
          <div className="leftPane" style={{width: `${leftPaneWidth}px`}} ref={leftPaneRef}>
          </div>
          <div className="seperator" onMouseDown={handleMouseDown}>
            <div></div>
            <div></div>
          </div>
          <div className="rightPane">
          </div>
        </div>
      </StyleWrapper>
  );
};
export default App;