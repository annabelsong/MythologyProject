import React, { useState } from 'react';
import axios from 'axios';

function AppearsInPage() {
  const [artifactName, setArtifactName] = useState('');
  const [newTaleName, setNewTaleName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Perform input validation if necessary

    try {
      // Send update request to backend
      const response = await axios.put('http://localhost:3307/api/update/AppearsIn', {
        artifactName, // Primary key to identify the record
        taleName: newTaleName, // The new value for the tale name
      });
      console.log(response.data);
      // Reset the form or provide user feedback
      setArtifactName('');
      setNewTaleName('');
    } catch (error) {
      console.error('Error updating data:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Artifact Name (to update):
        <input
          type="text"
          value={artifactName}
          onChange={handleArtifactNameChange}
          className = 'border-gray-400 border-2 mr-2'
          //readOnly // This field is read-only if you don't want it to be edited
        />
      </label>
      <label>
        New Tale Name:
        <input
          type="text"
          value={newTaleName}
          onChange={handleNewTaleNameChange}
          className = 'border-gray-400 border-2 mr-2'
        />
      </label>
      <button type="submit" className='border-gray-400 border-2 rounded-full p-1'>Update</button>
    </form>
  );
}

export default AppearsInPage;