import React, { useState } from 'react';
import axios from 'axios'; 

function RitualForm() {
  const [ritualName, setRitualName] = useState('');
  const [recurring, setRecurring] = useState(false);
  const [characterName, setCharacterName] = useState('');
  const [locationName, setLocationName] = useState('anywhere');
  const [timePeriod, setTimePeriod] = useState('anytime');

  const handleRitualNameChange = (event) => {
    setRitualName(event.target.value);
  };

  const handleRecurringChange = (event) => {
    setRecurring(event.target.checked);
  };

  const handleCharacterNameChange = (event) => {
    setCharacterName(event.target.value);
  };

  const handleLocationNameChange = (event) => {
    setLocationName(event.target.value);
  };

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Ritual Name:', ritualName);
    console.log('Recurring:', recurring);
    console.log('Character Name:', characterName);
    console.log('Location Name:', locationName);
    console.log('Time Period:', timePeriod);
    // Reset the form after submission if needed
    setRitualName('');
    setRecurring(false);
    setCharacterName('');
    setLocationName('anywhere');
    setTimePeriod('anytime');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <div className='flex'>
        <div className="mr-20">
          <label className="text-left block">Ritual Name:</label>
          <br />
          <label className="text-left block">Recurring:</label>
          <br />
          <label className="text-left block">Character Name:</label>
          <br />
          <label className="text-left block">Location Name:</label>
          <br />
          <label className="text-left block">Time Period:</label>
        </div>
        <div>
          <input
            type="text"
            id="ritualName"
            value={ritualName}
            onChange={handleRitualNameChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="checkbox"
            id="recurring"
            checked={recurring}
            onChange={handleRecurringChange}
            className="mb-5"
          />
          <br />
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
            id="locationName"
            value={locationName}
            onChange={handleLocationNameChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="timePeriod"
            value={timePeriod}
            onChange={handleTimePeriodChange}
            className="mb-5 border-gray-400 border-2"
          />
        </div>
      </div>
      <button type="submit" className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default RitualForm;
