import React from 'react';
import Filter from './Components/Filter';

const App = () => {
  const dropdownItems = [
    { name: 'Name', type: 'text' },
    { name: 'Age', type: 'number' },

  ];
 
  return (
    <div >
   
      <Filter buttonName="Filter " dropdownItems={dropdownItems} />
    </div>    
  );
};

export default App;
