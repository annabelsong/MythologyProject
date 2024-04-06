import React, { useState } from 'react'
import './TableStyleForSort.css';

const mockData = [ // This was just for me to see the table styling you can erase bryan and replace any mention of mockData with the actual data!
  { LocationName: 'Troy', AreaDescription: 'The city of Troy, site of the Trojan war', TimePeriod: 'classical antiquity' },
  { LocationName: 'Mount Olympus', AreaDescription: 'Mount Olympus is the mythological home of the gods. It is snowy-peaked and scattered with the palaces of the gods', TimePeriod: 'anytime' },
  { LocationName: 'Labyrinth of Crete', AreaDescription: 'A prison constructed under Crete built to hide the Minotaur from the world', TimePeriod: 'bronze age' },
  { LocationName: 'Ithaca', AreaDescription: 'The island birthplace of Odysseus', TimePeriod: 'classical antiquity' },
  { LocationName: 'Serifos', AreaDescription: 'Cyclops island, home to Poseidon"s children', TimePeriod: 'classical antiquity' },
  { LocationName: 'Athens', AreaDescription: 'A city in modern day Greece', TimePeriod: 'modern' },
  { LocationName: 'Athens', AreaDescription: 'A city in ancient Greece, home to many myths', TimePeriod: 'classical antiquity' },
  { LocationName: 'Olympia', AreaDescription: 'A city of ancient Greece, birthplace of the Olympics', TimePeriod: 'classical antiquity' },
  { LocationName: 'Delphi', AreaDescription: 'A city of Ancient Greece, home to the Delphi Oracle and worshippers of Apollo', TimePeriod: 'classical antiquity' },
  { LocationName: 'Nepal', AreaDescription: 'A landlocked country in South Asia, home to the Himalayan Mountain range', TimePeriod: 'modern' },
  { LocationName: 'River Styx', AreaDescription: 'A river running through the Greek underworld, separating the dead from the living', TimePeriod: 'anytime' },
  { LocationName: 'Crete', AreaDescription: 'A city of ancient Greece, home to King Minos and the Labyrinth', TimePeriod: 'classic antiquity' },
  { LocationName: 'Celtic Lands', AreaDescription: 'The collection of Celtic territories, encompassing Ireland, Scotland, Wales and England', TimePeriod: 'pre-medieval' },
  { LocationName: 'Mesopotamia', AreaDescription: 'An ancient region located in the eastern Mediterranian, known as the land between the rivers', TimePeriod: '6000 years ago' },
  { LocationName: 'North America', AreaDescription: 'A continent comprising of various indigenous cultures and tribes. These lands have since been stolen', TimePeriod: 'modern' },
  { LocationName: 'Island of Sarpedon', AreaDescription: 'An isolated island where Medusa was said to live.', TimePeriod: 'classical antiquity' },
  { LocationName: 'Midgard', AreaDescription: 'The realm of humanity in Norse mythology, encircled by the giant serpent Jormungandr.', TimePeriod: 'viking age' },
  { LocationName: 'Flaming Mountains', AreaDescription: 'A mythical mountain in Journey to the West, often associated with extreme heat and challenging trials.', TimePeriod: 'Tang Dynasty' },
  { LocationName: 'Northern Seas', AreaDescription: 'The cold, unforgiving waters surrounding Scandinavia, reputed to be home to the Kraken.', TimePeriod: 'viking age' },
  { LocationName: 'Scottish Lochs', AreaDescription: 'Freshwater lochs in Scotland, rumored to be inhabited by Kelpies.', TimePeriod: 'pre-medieval' },
  { LocationName: 'Gates of Assyria', AreaDescription: 'The monumental entrance to Assyrian cities, guarded by colossal Lamassu sculptures to ward off evil.', TimePeriod: 'ancient' },
  { LocationName: 'Great Plains', AreaDescription: 'Expansive area in the central part of North America, where many tribes have stories of the Thunderbird.', TimePeriod: 'anytime' },
  { LocationName: 'Camelot', AreaDescription: 'The legendary court of King Arthur, described as a place of great knights and grandeur.', TimePeriod: 'medieval' },
  { LocationName: 'Avalon', AreaDescription: 'The mystical island where Arthur was taken to heal after his final battle.', TimePeriod: 'medieval' },
  { LocationName: 'Ulster', AreaDescription: 'A province in the north of Ireland, the setting for many of Cú Chulainn"s heroic exploits.', TimePeriod: 'Iron Age' },
  { LocationName: 'Uruk', AreaDescription: 'An ancient city-state in Sumer, present-day Iraq, ruled by Gilgamesh and the setting for many of his adventures.', TimePeriod: 'early dynastic period' },
  { LocationName: 'Cedar Forest', AreaDescription: 'A mythical forest guarded by the demon Humbaba, slain by Gilgamesh and Enkidu on their quest.', TimePeriod: 'early dynastic period' },
  { LocationName: 'Mashu', AreaDescription: 'The twin-peaked mountain with the gate leading to the Cedar Forest, through which Gilgamesh passes on his quest for immortality.', TimePeriod: 'early dynastic period' },
  { LocationName: 'Mount Kailash', AreaDescription: 'Considered the abode of Lord Shiva, Mount Kailash is revered as a sacred mountain and a pilgrimage destination in Hinduism, Buddhism, Jainism, and Bon.', TimePeriod: 'timeless' },
  { LocationName: 'Himalayas', AreaDescription: 'A mountain range in South Asia, which is home to the world"s highest peaks, including Mount Everest and K2', TimePeriod: 'timeless' },
  { LocationName: 'Varanasi', AreaDescription: 'One of the oldest living cities in the world, located along the banks of the Ganges River in India. Varanasi is considered a holy city in Hinduism, dedicated to Lord Shiva.', TimePeriod: 'anytime' },
  { LocationName: 'Caucasus Mountains', AreaDescription: 'A mountain system in Eurasia between the Black Sea and the Caspian Sea, where Prometheus was punished by Zeus.', TimePeriod: 'classical antiquity' },
  { LocationName: 'Brauron', AreaDescription: 'An ancient Greek sanctuary on the eastern coast of Attica dedicated to Artemis Brauronia, a place of worship and rites for young girls.', TimePeriod: 'classical antiquity' },
  { LocationName: 'Ortygia', AreaDescription: 'A small island near Delos, legendary birthplace of Artemis and Apollo, sacred to both.', TimePeriod: 'classical antiquity' }
];

function LocationSort() {
  const [data, setData] = useState(mockData);
  const [editRowIndex, setEditRowIndex] = useState(null);
  // temp storage for edits
  const [draftData, setDraftData] = useState({});

  // enable editing mode (by double click)
  const handleRowDoubleClick = (index) => {
    setEditRowIndex(index);
    // copy to draft for editing
    setDraftData({ ...data[index] });
  };

  // update draft data on change
  const handleDraftChange = (e, fieldName) => {
    setDraftData({ ...draftData, [fieldName]: e.target.value });
  };

  // save changes
  const handleSave = (index) => {
    const newData = [...data];
    newData[index] = draftData;
    setData(newData);
    setEditRowIndex(null);
    // call your backend to update the data (UPDATE backend data) i think this is where it is
  };

  // "enter" keypress to save
  const handleKeyPress = (e, index) => {
    if (e.key === 'Enter') {
      handleSave(index);
    }
  };

  return (
    <div>
      <h1 className="table-title">Locations</h1>
      <table className="table-Sort">
        <thead>
          <tr>
            <th>Location</th>
            <th>Description</th>
            <th>Time Period</th>
          </tr>
        </thead>
        <tbody>
          {data.map((location, index) => (
            <tr key={index} onDoubleClick={() => handleRowDoubleClick(index)}>
              <td>
                {editRowIndex === index ? (
                  <input className="full-width-input"
                    type="text"
                    value={draftData.LocationName}
                    onChange={(e) => handleDraftChange(e, 'LocationName')}
                    onKeyDown={(e) => handleKeyPress(e, index)}
                  />
                ) : (
                  location.LocationName
                )}
              </td>
              <td>
                {editRowIndex === index ? (
                  <input className="full-width-input"
                    type="text"
                    value={draftData.AreaDescription}
                    onChange={(e) => handleDraftChange(e, 'AreaDescription')}
                    onKeyDown={(e) => handleKeyPress(e, index)}
                  />
                ) : (
                  location.AreaDescription
                )}
              </td>
              <td>
                {editRowIndex === index ? (
                  <input className="full-width-input"
                    type="text"
                    value={draftData.TimePeriod}
                    onChange={(e) => handleDraftChange(e, 'TimePeriod')}
                    onKeyDown={(e) => handleKeyPress(e, index)}
                  />
                ) : (
                  location.TimePeriod
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default LocationSort;