import React, { useState } from 'react';
import './TableStyleForSort.css';
import axios from 'axios';


const mockData = [
  {
    CharacterName: 'Jormungandr',
    CharacterDescription: 'Midgard Serpent (also World Serpent) in Norse mythology who encircles the realm of Midgard. He is the son of the god Loki and the giantess Angrboða and brother of the great wolf Fenrir and Hel, Queen of the Dead. At Ragnarök, the Twilight of the Gods, he slays and is slain by the god Thor.',
    SupernaturalAbility: 'Virtual invulnerability',
    Species: 'World Serpent',
    Culture: 'Norse'
  },
  {
    CharacterName: 'Medusa',
    CharacterDescription: 'A woman with living snakes in place of hair; her appearance was so hideous that anyone who looked upon her was turned to stone',
    SupernaturalAbility: 'Stonification',
    Species: 'Gorgon',
    Culture: 'Greek'
  },
  {
    CharacterName: 'Demon Bull King',
    CharacterDescription: 'He is the scourge of the Netherworld and the archenemy of the Monkey King',
    SupernaturalAbility: 'Brute Strength',
    Species: 'Giant white bull',
    Culture: 'Chinese'
  },
  {
    CharacterName: 'Minotaur',
    CharacterDescription: 'Half man half bull, born to the wife of king Minos and a bull, imprisoned in the Labyrinth due to King Minos"s shame',
    SupernaturalAbility: 'Strength',
    Species: 'Hybrid Man and Bull',
    Culture: 'Greek'
  },
  {
    CharacterName: 'Kraken',
    CharacterDescription: 'A legendary sea monster of enormous size, etymologically akin to a squid or octopus, said to appear in the sea between Norway and Iceland',
    SupernaturalAbility: null,
    Species: 'Sea monster',
    Culture: 'Norse'
  },
  {
    CharacterName: 'Kelpie',
    CharacterDescription: 'Water spirit in Celtic folklore, often appearing as a horse and known for drowning travellers.',
    SupernaturalAbility: 'Water manipulation',
    Species: 'Water spirit',
    Culture: 'Celtic'
  },
  {
    CharacterName: 'Lamassu',
    CharacterDescription: 'A protective figure from Mesopotamian mythology, Lamassus are depicted with a human head, the body of a bull or lion, wings, and sometimes eagle’s talons',
    SupernaturalAbility: 'Protection',
    Species: 'Mythical creature',
    Culture: 'Mesopotamian'
  },
  {
    CharacterName: 'Thunderbird',
    CharacterDescription: 'Powerful creature in Native American mythology, often associated with storms and thunder.',
    SupernaturalAbility: 'Control over thunder and storms',
    Species: 'Mythical bird',
    Culture: 'Native American'
  }
];

function CreatureSort() {
  const [data, setData] = useState(mockData);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [draftData, setDraftData] = useState({});

  const handleRowDoubleClick = (index) => {
    setEditRowIndex(index);
    setDraftData({ ...data[index] });
  };

  const handleDraftChange = (e, fieldName) => {
    setDraftData({ ...draftData, [fieldName]: e.target.value });
  };

  // backend saving for editing functionality
  const handleSave = async (index) => {
    const originalData = data[index];
    const updatedData = { ...draftData };

    const query = {
      oldPrimaryKey: originalData.CharacterName,
      CharacterName: updatedData.CharacterName,
      CharacterDescription: updatedData.CharacterDescription,
      SupernaturalAbility: updatedData.SupernaturalAbility,
      Species: updatedData.Species,
      Culture: updatedData.Culture
    };

    const url = 'http://localhost:3307/api/update/Creature'
    try { //this is the update request
      const response = await axios.put(url, query);
      console.log(response.data);
      const newData = [...data];
      newData[index] = query;
      setData(newData);
      setEditRowIndex(null);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.key === 'Enter') {
      handleSave(index);
    }
  };

  return (
    <div>
      <h1 className="table-title">Creatures</h1>
      <table className="table-Sort">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Supernatural Ability</th>
            <th>Species</th>
            <th>Culture</th>
          </tr>
        </thead>
        <tbody>
          {data.map((creature, index) => (
            <tr key={index} onDoubleClick={() => handleRowDoubleClick(index)}>
              <td>
                {editRowIndex === index ? (
                  <input className="full-width-input"
                    type="text"
                    value={draftData.CharacterName}
                    onChange={(e) => handleDraftChange(e, 'CharacterName')}
                    onKeyDown={(e) => handleKeyPress(e, index)}
                  />
                ) : (
                  creature.CharacterName
                )}
              </td>
              <td>
                {editRowIndex === index ? (
                  <input className="full-width-input"
                    type="text"
                    value={draftData.CharacterDescription}
                    onChange={(e) => handleDraftChange(e, 'CharacterDescription')}
                    onKeyDown={(e) => handleKeyPress(e, index)}
                  />
                ) : (
                  creature.CharacterDescription
                )}
              </td>
              <td>
                {editRowIndex === index ? (
                  <input className="full-width-input"
                    type="text"
                    value={draftData.SupernaturalAbility || ''}
                    onChange={(e) => handleDraftChange(e, 'SupernaturalAbility')}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                  />
                ) : (
                  creature.SupernaturalAbility
                )}
              </td>
              <td>
                {editRowIndex === index ? (
                  <input className="full-width-input"
                    type="text"
                    value={draftData.Species}
                    onChange={(e) => handleDraftChange(e, 'Species')}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                  />
                ) : (
                  creature.Species
                )}
              </td>
              <td>
                {editRowIndex === index ? (
                  <input className="full-width-input"
                    type="text"
                    value={draftData.Culture}
                    onChange={(e) => handleDraftChange(e, 'Culture')}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                  />
                ) : (
                  creature.Culture
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default CreatureSort;