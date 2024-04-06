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
          onChange={(e) => setArtifactName(e.target.value)}
        />
      </label>
      <label>
        New Tale Name:
        <input
          type="text"
          value={newTaleName}
          onChange={(e) => setNewTaleName(e.target.value)}
        />
      </label>
      <button type="submit">Update Artifact</button>
    </form>
  );
}

export default AppearsInPage;