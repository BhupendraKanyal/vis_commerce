import React, { useState,useEffect } from 'react';
import ImageComponentCard from "./ImageContentCard";
import Card from './Responsive/Card.jsx'
const Screen = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // Function to update screen size state
  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
        {screenSize >= 573 ? <ImageComponentCard></ImageComponentCard>:<Card /> }
    </>
  );
};

export default Screen;
