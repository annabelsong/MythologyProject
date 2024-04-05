import React, { useState } from 'react';
import axios from 'axios'; 

function SymbolForm() {
  const [symbolName, setSymbolName] = useState('');
  const [origin, setOrigin] = useState('');

  const handleSymbolNameChange = (event) => {
    setSymbolName(event.target.value);
  };

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Symbol Name:', symbolName);
    console.log('Origin:', origin);
    // Reset the form after submission if needed
    setSymbolName('');
    setOrigin('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <div className='flex'>
        <div className="mr-20">
          <label htmlFor="symbolName" className="text-left block">Symbol Name:</label>
          <br />
          <label htmlFor="origin" className="text-left block">Origin:</label>
        </div>
        <div>
          <input
            type="text"
            id="symbolName"
            value={symbolName}
            onChange={handleSymbolNameChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="origin"
            value={origin}
            onChange={handleOriginChange}
            className="mb-5 border-gray-400 border-2"
          />
        </div>
      </div>
      <button type="submit" className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default SymbolForm;
