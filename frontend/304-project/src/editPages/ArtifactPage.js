import React, { useState } from 'react';
import axios from 'axios';

function ArtifactsPage() {
  const [artifactName, setArtifactName] = useState('');
  const [newOrigin, setnewOrigin] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.put('http://localhost:3307/api/update/AppearsIn', {
        artifactName, 
        taleName: newOrigin,
      });
      console.log(response.data);
      // Reset the form or provide user feedback
      setArtifactName('');
      setnewOrigin('');
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
          value={newOrigin}
          onChange={(e) => setnewOrigin(e.target.value)}
        />
      </label>
      <button type="submit">Update Artifact</button>
    </form>
  );
}

export default ArtifactsPage;