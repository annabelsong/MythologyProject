import React, { useState } from 'react'
import './TableStyleForSort.css';
import axios from 'axios';


const mockData = [
    { ArtifactName: 'Mjollnir', CharacterName: 'Thor' },
    { ArtifactName: 'Arachne"s Tapestry', CharacterName: 'Arachne' },
    { ArtifactName: 'Shield of Achilles', CharacterName: 'Achilles' },
    { ArtifactName: 'Spear of Achilles', CharacterName: 'Achilles' },
    { ArtifactName: 'Wings of Icarus', CharacterName: 'Icarus' },
    { ArtifactName: 'Osiris"s Coffin', CharacterName: 'Osiris' },
    { ArtifactName: 'Sun Wukong"s Golden Headband', CharacterName: 'Sun Wukong' },
    { ArtifactName: 'Ruyi Jingu Bang', CharacterName: 'Sun Wukong' },
    { ArtifactName: 'Excalibur', CharacterName: 'Arthur' },
    { ArtifactName: 'Cauldron of Dagda', CharacterName: 'Dagda' },
    { ArtifactName: 'Tablets of Destiny', CharacterName: 'Enlil' },
    { ArtifactName: 'Dreamcatcher', CharacterName: 'Trickster Coyote' },
    { ArtifactName: 'Demon Bull King"s Cudgel', CharacterName: 'Demon Bull King' },
    { ArtifactName: 'Armor of Achilles', CharacterName: 'Patroclus' },
    { ArtifactName: 'Gáe Bolga', CharacterName: 'Cú Chulainn' },
    { ArtifactName: 'Goat-drawn Chariot', CharacterName: 'Thor' },
    { ArtifactName: 'Belt of Strength', CharacterName: 'Thor' },
    { ArtifactName: 'Golden Chain Mail', CharacterName: 'Sun Wukong' },
    { ArtifactName: 'Phoenix Feather Cap', CharacterName: 'Sun Wukong' },
    { ArtifactName: 'Thyrsus', CharacterName: 'Dionysus' },
    { ArtifactName: 'Jormungandr"s Scales', CharacterName: 'Jormungandr' },
    { ArtifactName: 'Thor"s Fishing Hook', CharacterName: 'Thor' }
];


function BelongsToSort() {
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
            oldPrimaryKey: originalData.ArtifactName,
            oldPrimaryKey2: originalData.CharacterName,
            newName: updatedData.ArtifactName,
            newCharacterName: updatedData.CharacterName
        };

        const url = 'http://localhost:3307/api/update/BelongsTo'
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
            <h1 className="table-title">Belongs To</h1>
            <table className="table-Sort">
                <thead>
                    <tr>
                        <th>Artifact</th>
                        <th>Character</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((belongsTo, index) => (
                        <tr key={index} onDoubleClick={() => handleRowDoubleClick(index)}>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.ArtifactName}
                                        onChange={(e) => handleDraftChange(e, 'ArtifactName')}
                                        onKeyDown={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    belongsTo.ArtifactName
                                )}
                            </td>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.CharacterName}
                                        onChange={(e) => handleDraftChange(e, 'CharacterName')}
                                        onKeyDown={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    belongsTo.CharacterName
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default BelongsToSort;