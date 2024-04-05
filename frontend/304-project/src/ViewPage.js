import React, { useState } from 'react';

import LocationView from './viewComponents/LocationView';
import CreatureView from './viewComponents/CreatureView';


const tables = [
  ["Location","location"],
  ["Ritual","ritual"],
  ["Tale","tale"],
  ["Story Events","storyevent"],
  ["Pantheon","pantheon"],
  ["Artifact","artifact"],
  ["Belongs To","belongsto"],
  ["Appears In","appearsin"],
  ["Symbol","symbol"],
  ["Deity","deity"],
  ["Mortal","mortal"],
  ["Creature","creature"],
  ["Represents","represents"],
  ["Part Of","partof"]
];


function ViewPage() {
  const [selectedTable, setSelectedTable] = useState('');

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  return (
    <div className="flex flex-col items-start ml-4 mt-4">
      <h2>Welcome to the View Page, select a table from the drop-down to view its data</h2>

      <div className='h-4'/>{/*spacer*/}

      <select value={selectedTable} onChange={handleTableChange} className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold">
        <option value="">Select a table</option>
        {tables.map(([label, value]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>

      <div className='h-4'/>{/*spacer*/}

      {/* view component */}
      {selectedTable === 'location' && <LocationView />}
      {selectedTable === 'creature' && <CreatureView />}
      {selectedTable === '' && <div>Select A Table First!</div>}
    </div>
  );
}

export default ViewPage;