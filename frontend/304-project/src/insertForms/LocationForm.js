import React, { useState } from 'react';
import axios from 'axios'; 

function LocationForm() {
  const [locationName, setLocationName] = useState('');
  const [areaDescription, setAreaDescription] = useState('');
  const [timePeriod, setTimePeriod] = useState('anytime');

  const handleLocationNameChange = (event) => {
    setLocationName(event.target.value);
  };

  const handleAreaDescriptionChange = (event) => {
    setAreaDescription(event.target.value);
  };

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const query = {
      locationName,
      areaDescription,
      timePeriod
    };

    // Send insert request to backend
    await axios.post('http://localhost:3306/api/insert', query);

    // Reset the form after successful submission
    setLocationName('');
    setAreaDescription('');
    setTimePeriod('anytime');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
        <div className='flex'>
            <div className="mr-20">
                <label className="text-left block">Location Name:</label>
                <br />
                <label className="text-left block">Area Description:</label>
                <br />
                <label className="text-left block">Time Period:</label>
            </div>
            <div>
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
                id="areaDescription"
                value={areaDescription}
                onChange={handleAreaDescriptionChange}
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

export default LocationForm;
