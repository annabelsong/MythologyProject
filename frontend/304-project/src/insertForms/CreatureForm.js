import React, { useState } from 'react';

function CreatureForm() {
  const [characterName, setCharacterName] = useState('');
  const [characterDescription, setCharacterDescription] = useState('');
  const [supernaturalAbility, setSupernaturalAbility] = useState('');
  const [species, setSpecies] = useState('');
  const [culture, setCulture] = useState('');

  const handleCharacterNameChange = (event) => {
    setCharacterName(event.target.value);
  };

  const handleCharacterDescriptionChange = (event) => {
    setCharacterDescription(event.target.value);
  };

  const handleSupernaturalAbilityChange = (event) => {
    setSupernaturalAbility(event.target.value);
  };

  const handleSpeciesChange = (event) => {
    setSpecies(event.target.value);
  };

  const handleCultureChange = (event) => {
    setCulture(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Character Name:', characterName);
    console.log('Character Description:', characterDescription);
    console.log('Supernatural Ability:', supernaturalAbility);
    console.log('Species:', species);
    console.log('Culture:', culture);
    // Reset the form after submission if needed
    setCharacterName('');
    setCharacterDescription('');
    setSupernaturalAbility('');
    setSpecies('');
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
          <label htmlFor="supernaturalAbility" className="text-left block">Supernatural Ability:</label>
          <br />
          <label htmlFor="species" className="text-left block">Species:</label>
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
            id="supernaturalAbility"
            value={supernaturalAbility}
            onChange={handleSupernaturalAbilityChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="species"
            value={species}
            onChange={handleSpeciesChange}
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
      <button type="submit" className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold">Submit</button>
    </form>
  );
}

export default CreatureForm;
