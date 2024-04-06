import React, { useState } from 'react';
import axios from 'axios';

function EditAppearsInForm() {
  const [artifactName, setArtifactName] = useState(''); 
  const [newTaleName, setNewTaleName] = useState('');

  // Handler for the primary key
  const handleArtifactNameChange = (event) => {
    setArtifactName(event.target.value);
  };

  // Handler for new tale name
  const handleNewTaleNameChange = (event) => {
    setNewTaleName(event.target.value);
  };

  const isValidInput = (input) => /^[a-zA-Z0-9 ]+$/.test(input);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValidInput(artifactName) || !isValidInput(newTaleName)) {
      alert("Invalid input.");
      return;
    }

    const query = {
      artifactName,
      newTaleName
    };

    try {
      const response = await axios.put('http://localhost:3307/api/update/AppearsIn', query);
      console.log(response.data);
      // Reset the form fields
      setArtifactName('');
      setNewTaleName('');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <label>
        Artifact Name (cannot be changed):
        <input
          type="text"
          value={artifactName}
          onChange={handleArtifactNameChange}
          readOnly // This field is read-only if you don't want it to be edited
        />
      </label>
      <label>
        New Tale Name:
        <input
          type="text"
          value={newTaleName}
          onChange={handleNewTaleNameChange}
        />
      </label>
      <button type="submit">Update</button>
    </form>
  );
}

export default EditAppearsInForm;