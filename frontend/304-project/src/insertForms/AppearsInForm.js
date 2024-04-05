import React, { useState } from 'react';
import axios from 'axios';

function AppearsInForm() {
  const [artifactName, setArtifactName] = useState('');
  const [taleName, setTaleName] = useState('');

  const handleArtifactNameChange = (event) => {
    setArtifactName(event.target.value);
  };

  const handleTaleNameChange = (event) => {
    setTaleName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const query = {
      artifactName,
      taleName
    };

    try {
      // Send insert request to backend
      const response = await axios.post('http://localhost:3307/api/insert/AppearsIn', query);
      console.log(response.data);
      // Reset the form after successful submission
      setArtifactName('');
      setTaleName('');
    } catch (error) {
      console.error('Error inserting data:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <div className='flex'>
        <div className="mr-20">
          <label htmlFor="artifactName" className="text-left block">Artifact Name:</label>
          <br />
          <label htmlFor="taleName" className="text-left block">Tale Name:</label>
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
            id="taleName"
            value={taleName}
            onChange={handleTaleNameChange}
            className="mb-5 border-gray-400 border-2"
          />
        </div>
      </div>
      <button type="submit" className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default AppearsInForm;
