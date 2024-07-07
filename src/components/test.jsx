import React from 'react';

const TestLocalStorage = () => {
  const storeData = () => {
    try {
      localStorage.setItem('testItem', 'Hello World');
      console.log('Data stored successfully.');
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

  const retrieveData = () => {
    try {
      const storedData = localStorage.getItem('testItem');
      console.log('Retrieved data:', storedData);
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  return (
    <div>
      <button onClick={storeData}>Store Data</button>
      <button onClick={retrieveData}>Retrieve Data</button>
    </div>
  );
};

export default TestLocalStorage;
