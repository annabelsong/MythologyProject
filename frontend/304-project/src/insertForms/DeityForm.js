import React, { useState } from 'react';

function DeityForm() {
  const [deityName, setDeityName] = useState('');
  const [characterDescription, setCharacterDescription] = useState('');
  const [domain, setDomain] = useState('');
  const [supernaturalAbility, setSupernaturalAbility] = useState('');
  const [culture, setCulture] = useState('');

  const handleDeityNameChange = (event) => {
    setDeityName(event.target.value);
  };

  const handleCharacterDescriptionChange = (event) => {
    setCharacterDescription(event.target.value);
  };

  const handleDomainChange = (event) => {
    setDomain(event.target.value);
  };

  const handleSupernaturalAbilityChange = (event) => {
    setSupernaturalAbility(event.target.value);
  };

  const handleCultureChange = (event) => {
    setCulture(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Deity Name:', deityName);
    console.log('Character Description:', characterDescription);
    console.log('Domain:', domain);
    console.log('Supernatural Ability:', supernaturalAbility);
    console.log('Culture:', culture);
    // Reset the form after submission if needed
    setDeityName('');
    setCharacterDescription('');
    setDomain('');
    setSupernaturalAbility('');
    setCulture('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <div className='flex'>
        <div className="mr-20">
          <label htmlFor="deityName" className="text-left block">Deity Name:</label>
          <br />
          <label htmlFor="characterDescription" className="text-left block">Character Description:</label>
          <br />
          <label htmlFor="domain" className="text-left block">Domain:</label>
          <br />
          <label htmlFor="supernaturalAbility" className="text-left block">Supernatural Ability:</label>
          <br />
          <label htmlFor="culture" className="text-left block">Culture:</label>
        </div>
        <div>
          <input
            type="text"
            id="deityName"
            value={deityName}
            onChange={handleDeityNameChange}
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
            id="domain"
            value={domain}
            onChange={handleDomainChange}
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

export default DeityForm;
