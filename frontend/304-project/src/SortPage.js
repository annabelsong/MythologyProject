import React, {useEffect, useState} from 'react';
import LocationSort from './sortComponents/LocationSort';
import CreatureSort from './sortComponents/CreatureSort';
import MortalSort from './sortComponents/MortalSort';
import DeitySort from './sortComponents/DeitySort';
import PantheonSort from './sortComponents/PantheonSort';
import TaleSort from './sortComponents/TaleSort';
import StoryEventSort from './sortComponents/StoryEventSort';
import SymbolSort from './sortComponents/SymbolSort';
import ArtifactSort from './sortComponents/ArtifactSort';
import RitualSort from './sortComponents/RitualSort';
import PartOfSort from './sortComponents/PartOfSort';
import BelongsToSort from './sortComponents/BelongsToSort';
import AppearsInSort from './sortComponents/AppearsInSort';
import RepresentsSort from './sortComponents/RepresentsSort';

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

function SortPage() {
  const [selectedTable, setSelectedTable] = useState('');

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  return (
    <div className="flex flex-col items-start ml-4 mt-4">
      <h2>Welcome to the Sort Page, select a table from the drop-down then enter a keyword to filter instances in that table</h2>
    
      <div className='h-8'/>{/*spacer*/}



      <select value={selectedTable} onChange={handleTableChange} className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold">
        <option value="">Select a table</option>
        {tables.map(([label, value]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>

      <div className='h-4'/>{/*spacer*/}

      {/* Sort component */}
      {selectedTable === 'location' && <LocationSort />}
      {selectedTable === 'creature' && <CreatureSort />}
      {selectedTable === 'mortal' && <MortalSort />}
      {selectedTable === 'deity' && <DeitySort />}
      {selectedTable === 'ritual' && <RitualSort />}
      {selectedTable === 'tale' && <TaleSort />}
      {selectedTable === 'storyevent' && <StoryEventSort />}
      {selectedTable === 'pantheon' && <PantheonSort />}
      {selectedTable === 'symbol' && <SymbolSort />}
      {selectedTable === 'artifact' && <ArtifactSort />}
      {selectedTable === 'partof' && <PartOfSort />}
      {selectedTable === 'belongsto' && <BelongsToSort />}
      {selectedTable === 'appearsin' && <AppearsInSort />}
      {selectedTable === 'represents' && <RepresentsSort />}
      {selectedTable === '' && <div>Select A Table First!</div>}
    </div>
  );
}


export default SortPage;
