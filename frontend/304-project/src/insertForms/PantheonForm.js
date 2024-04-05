import React, { useState } from 'react';
import axios from 'axios'; 

function PantheonForm() {
  const [culture, setCulture] = useState('');
  const [pantheonName, setPantheonName] = useState('');

  const handleCultureChange = (event) => {
    setCulture(event.target.value);
  };

  const handlePantheonNameChange = (event) => {
    setPantheonName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Culture:', culture);
    console.log('Pantheon Name:', pantheonName);
    // Reset the form after submission if needed
    setCulture('');
    setPantheonName('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <div className='flex'>
        <div className="mr-20">
          <label htmlFor="culture" className="text-left block">Culture:</label>
          <br />
          <label htmlFor="pantheonName" className="text-left block">Pantheon Name:</label>
        </div>
        <div>
          <input
            type="text"
            id="culture"
            value={culture}
            onChange={handleCultureChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="pantheonName"
            value={pantheonName}
            onChange={handlePantheonNameChange}
            className="mb-5 border-gray-400 border-2"
          />
        </div>
      </div>
      <button type="submit" className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default PantheonForm;
