import React, {useState, useEffect} from 'react';
import LocationForm from './insertForms/LocationForm'
import RitualForm from './insertForms/RitualForm'
import TaleForm from './insertForms/TaleForm'
import StoryEventForm from './insertForms/StoryEventForm'

const tables = ["table1","table2"];

function AddPage() {
  const [selectedVal, setSelectedVal] = useState('storyevent');

  const handleTableChange = (event) => {
    setSelectedVal(event.target.value);
  };

  const renderInsertFields = () => {
    switch (selectedVal) {
      case 'location':
        return <LocationForm/>;
      case 'ritual':
        return <RitualForm/>;
      case 'tale':
        return <TaleForm/>;
      case 'storyevent':
        return <StoryEventForm/>;
      case 'pantheon':
        return <div>

        </div>;
      case 'artifact':
        return <div>

        </div>;
      case 'belongsto':
        return <div>

        </div>;
      case 'appearsin':
        return <div>

        </div>;
      case 'symbol':
        return <div>

        </div>;
      case 'deity':
        return <div>

        </div>;
      case 'mortal':
        return <div>

        </div>;
      case 'creature':
        return <div>

        </div>;
      case 'represents':
        return <div>

        </div>;
      case 'partof':
        return <div>
          
        </div>;
      
      default: return <div>Select A Table First!</div>;
    }
  }

  return (
    <div className="flex flex-col items-start ml-4 mt-4">
      <h2>Welcome to the Insert Page, here you can add additional info into the database</h2>
      <p>If you refer to another entry but it doesnt exist, the new entry wont be added</p>

      <div className='h-4'/>{/*spacer*/}

      <select value = {selectedVal} onChange = {handleTableChange} className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold">
        <option value="">Select a table</option>
        {tables.map((table) => (
          <option value={table}>{table}</option>
        ))}
      </select>

      <div className='h-4'/>{/*spacer*/}

      {renderInsertFields()}
    </div>
  );
}

export default AddPage;