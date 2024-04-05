import React, { useState } from 'react';

function MortalForm() {
  const [characterName, setCharacterName] = useState('');
  const [characterDescription, setCharacterDescription] = useState('');
  const [title, setTitle] = useState('');
  const [profession, setProfession] = useState('');
  const [childName, setChildName] = useState(null);
  const [culture, setCulture] = useState('');

  const handleCharacterNameChange = (event) => {
    setCharacterName(event.target.value);
  };

  const handleCharacterDescriptionChange = (event) => {
    setCharacterDescription(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleProfessionChange = (event) => {
    setProfession(event.target.value);
  };

  const handleChildNameChange = (event) => {
    setChildName(event.target.value);
  };

  const handleCultureChange = (event) => {
    setCulture(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Character Name:', characterName);
    console.log('Character Description:', characterDescription);
    console.log('Title:', title);
    console.log('Profession:', profession);
    console.log('Child Name:', childName);
    console.log('Culture:', culture);
    // Reset the form after submission if needed
    setCharacterName('');
    setCharacterDescription('');
    setTitle('');
    setProfession('');
    setChildName(null);
    setCulture('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <div className='flex'>
        <div className="mr-20">
          <label htmlFor="characterName" className="text-left block">Character Name:</label>
          <br />
          <label htmlFor="characterDescription" className="text-left block">Character Description:</label>
          <br />
          <label htmlFor="title" className="text-left block">Title:</label>
          <br />
          <label htmlFor="profession" className="text-left block">Profession:</label>
          <br />
          <label htmlFor="childName" className="text-left block">Child Name:</label>
          <br />
          <label htmlFor="culture" className="text-left block">Culture:</label>
        </div>
        <div>
          <input
            type="text"
            id="characterName"
            value={characterName}
            onChange={handleCharacterNameChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="characterDescription"
            value={characterDescription}
            onChange={handleCharacterDescriptionChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="profession"
            value={profession}
            onChange={handleProfessionChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="childName"
            value={childName}
            onChange={handleChildNameChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="culture"
            value={culture}
            onChange={handleCultureChange}
            className="mb-5 border-gray-400 border-2"
          />
        </div>
      </div>
      <button type="submit" className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default MortalForm;
