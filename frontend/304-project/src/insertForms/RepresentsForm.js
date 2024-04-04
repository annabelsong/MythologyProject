import React, { useState } from 'react';

function RepresentsForm() {
  const [symbolName, setSymbolName] = useState('');
  const [characterName, setCharacterName] = useState('');

  const handleSymbolNameChange = (event) => {
    setSymbolName(event.target.value);
  };

  const handleCharacterNameChange = (event) => {
    setCharacterName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Symbol Name:', symbolName);
    console.log('Character Name:', characterName);
    // Reset the form after submission if needed
    setSymbolName('');
    setCharacterName('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <div className='flex'>
        <div className="mr-20">
          <label htmlFor="symbolName" className="text-left block">Symbol Name:</label>
          <br />
          <label htmlFor="characterName" className="text-left block">Character Name:</label>
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
            id="characterName"
            value={characterName}
            onChange={handleCharacterNameChange}
            className="mb-5 border-gray-400 border-2"
          />
        </div>
      </div>
      <button type="submit" className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold">Submit</button>
    </form>
  );
}

export default RepresentsForm;
