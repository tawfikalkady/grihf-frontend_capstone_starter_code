// LocalStorage

// Local Storage allows you to store data in the browser even after the user closes the tab or the browser. 
// The data remains available until it is explicitly cleared or until the user clears their browser's data.
// Here is an example of a React component using Local Storage. In this example, 
// we store the count state in the Local Storage. When the component mounts, 
// we check if there is a stored value for count in the Local Storage and initialize the state with that value. 
// We also update the value in Local Storage whenever the count is updated.

import React, { useState, useEffect } from 'react';
const LocalStorage = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // When the component mounts, check if there's a 'count' value in Local Storage.
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
  }, []);
  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    // Save the updated count value to Local Storage.
    localStorage.setItem('count', newCount.toString());
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};
export default LocalStorage;