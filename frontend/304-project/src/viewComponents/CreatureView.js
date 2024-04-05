// CreaturesView.js
import React, { useState, useEffect } from 'react';

function CreatureView() {
  const [creature, setCreature] = useState([]);

  useEffect(() => {
    fetch('/api/creature')
      .then(response => response.json())
      .then(data => setCreature(data))
      .catch(error => console.error('Error fetching creature:', error));
  }, []);

  return (
    <div>
      <h1>Creatures</h1>
      <ul>
        {creature.map((creature, index) => (
          <li key={index}>{creature.CHARACTERNAME} - {creature.CHARACTERDESCRIPTION} - {creature.SUPERNATURALABILITY}- {creature.SPECIES} - {creature.CULTURE} </li> 
        ))}
      </ul>
    </div>
  );
}

export default CreatureView;