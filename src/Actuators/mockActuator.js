import { useState, useEffect } from 'react';

function MockActuator() {
    const [radiatorStatus, setRadiatorStatus] = useState('Off');
    const [windowStatus, setWindowStatus] = useState('Open');
  
    useEffect(() => {
      // Generate random statuses for radiator and window
      const randomizeStatus = () => {
        const randomRadiatorStatus = Math.random() < 0.5 ? 'On' : 'Off';
        const randomWindowStatus = Math.random() < 0.5 ? 'Open' : 'Close';
        setRadiatorStatus(randomRadiatorStatus);
        setWindowStatus(randomWindowStatus);
      };
  
      // Call the randomizeStatus function initially and then every 5 seconds
      randomizeStatus();
      const interval = setInterval(randomizeStatus, 5000);
  
      // Clean up the interval
      return () => clearInterval(interval);
    }, []);
  
    return { radiatorStatus, windowStatus };
  }
  
  export { MockActuator };
  