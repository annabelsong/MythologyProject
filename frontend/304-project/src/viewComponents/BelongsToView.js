import React, { useState } from 'react'
import './TableStyles.css';

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


function BelongsToView() {
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

    const handleSave = (index) => {
        const newData = [...data];
        newData[index] = draftData;
        setData(newData);
        setEditRowIndex(null);
        // Integrate with backend here to persist changes
    };

    const handleKeyPress = (e, index) => {
        if (e.key === 'Enter') {
            handleSave(index);
        }
    };

    return (
        <div>
            <h1 className="table-title">Belongs To</h1>
            <table className="table-view">
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
                                        onKeyPress={(e) => handleKeyPress(e, index)}
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
                                        onKeyPress={(e) => handleKeyPress(e, index)}
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


export default BelongsToView;