import React, { useState } from 'react';

function StoryEventForm() {
  const [taleName, setTaleName] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [locationName, setLocationName] = useState('');
  const [timePeriod, setTimePeriod] = useState('anytime');

  const handleTaleNameChange = (event) => {
    setTaleName(event.target.value);
  };

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleEventDescriptionChange = (event) => {
    setEventDescription(event.target.value);
  };

  const handleLocationNameChange = (event) => {
    setLocationName(event.target.value);
  };

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Tale Name:', taleName);
    console.log('Event Name:', eventName);
    console.log('Event Description:', eventDescription);
    console.log('Location Name:', locationName);
    console.log('Time Period:', timePeriod);
    // Reset the form after submission if needed
    setTaleName('');
    setEventName('');
    setEventDescription('');
    setLocationName('');
    setTimePeriod('anytime');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <div className='flex'>
        <div className="mr-20">
          <label htmlFor="taleName" className="text-left block">Tale Name:</label>
          <br />
          <label htmlFor="eventName" className="text-left block">Event Name:</label>
          <br />
          <label htmlFor="eventDescription" className="text-left block">Event Description:</label>
          <br />
          <label htmlFor="locationName" className="text-left block">Location Name:</label>
          <br />
          <label htmlFor="timePeriod" className="text-left block">Time Period:</label>
        </div>
        <div>
          <input
            type="text"
            id="taleName"
            value={taleName}
            onChange={handleTaleNameChange}
            className="mb-5 border-gray border-2"
          />
          <br />
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={handleEventNameChange}
            className="mb-5 border-gray border-2"
          />
          <br />
          <input
            type="text"
            id="eventDescription"
            value={eventDescription}
            onChange={handleEventDescriptionChange}
            className="mb-5 border-gray border-2"
          />
          <br />
          <input
            type="text"
            id="locationName"
            value={locationName}
            onChange={handleLocationNameChange}
            className="mb-5 border-gray border-2"
          />
          <br />
          <input
            type="text"
            id="timePeriod"
            value={timePeriod}
            onChange={handleTimePeriodChange}
            className="mb-5 border-gray border-2"
          />
        </div>
      </div>
      <button type="submit" className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold">Submit</button>
    </form>
  );
}

export default StoryEventForm;
