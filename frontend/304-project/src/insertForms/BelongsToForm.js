import React, { useState } from 'react';

function BelongsToForm() {
  const [artifactName, setArtifactName] = useState('');
  const [characterName, setCharacterName] = useState('');

  const handleArtifactNameChange = (event) => {
    setArtifactName(event.target.value);
  };

  const handleCharacterNameChange = (event) => {
    setCharacterName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Artifact Name:', artifactName);
    console.log('Character Name:', characterName);
    // Reset the form after submission if needed
    setArtifactName('');
    setCharacterName('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <div className='flex'>
        <div className="mr-20">
          <label htmlFor="artifactName" className="text-left block">Artifact Name:</label>
          <br />
          <label htmlFor="characterName" className="text-left block">Character Name:</label>
        </div>
        <div>
          <input
            type="text"
            id="artifactName"
            value={artifactName}
            onChange={handleArtifactNameChange}
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

export default BelongsToForm;
