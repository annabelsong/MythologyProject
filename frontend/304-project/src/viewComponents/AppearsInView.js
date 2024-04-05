import React, { useState } from 'react'
import './TableStyles.css';

// can delete just here to show table functionality without backend yet
const mockData = [
    { ArtifactName: 'Arachne"s Tapestry', TaleName: 'Tale of Arachne' },
    { ArtifactName: 'Shield of Achilles', TaleName: 'Story of Achilles' },
    { ArtifactName: 'Wings of Icarus', TaleName: 'The Myth of Daedalus and Icarus' },
    { ArtifactName: 'Osiris"s Coffin', TaleName: 'The Death and Resurrection of Osiris' },
    { ArtifactName: 'Sun Wukong"s Golden Headband', TaleName: 'Sun Wukong"s Quest for Immortality' },
    { ArtifactName: 'Ruyi Jingu Bang', TaleName: 'Sun Wukong"s Quest for Immortality' },
    { ArtifactName: 'Excalibur', TaleName: 'The Sword in the Stone' },
    { ArtifactName: 'Cauldron of Dagda', TaleName: 'Tale of Dagda and the Cauldron' },
    { ArtifactName: 'Tablets of Destiny', TaleName: 'Tale of Enlil and the Tablets of Destiny' },
    { ArtifactName: 'Dreamcatcher', TaleName: 'Trickster Coyote and the Dreamcatcher' },
    { ArtifactName: 'Demon Bull King"s Cudgel', TaleName: 'The Rebellion of the Demon Bull King' },
    { ArtifactName: 'Mjollnir', TaleName: 'Thor"s Battle with Jormungandr' },
    { ArtifactName: 'Mjollnir', TaleName: 'The Theft of Mjölnir' },
    { ArtifactName: 'Goat-drawn Chariot', TaleName: 'Thor and the Skrymir' },
    { ArtifactName: 'Belt of Strength', TaleName: 'Thor"s Battle with Jormungandr' },
    { ArtifactName: 'Thyrsus', TaleName: 'The Birth of Dionysus' },
    { ArtifactName: 'Thyrsus', TaleName: 'Dionysus and the Pirates' },
    { ArtifactName: 'Thyrsus', TaleName: 'The Return of Dionysus' },
    { ArtifactName: 'Golden Chain Mail', TaleName: 'Sun Wukong"s Quest for Immortality' },
    { ArtifactName: 'Phoenix Feather Cap', TaleName: 'Sun Wukong"s Quest for Immortality' },
    { ArtifactName: 'Palm-Leaf Fan', TaleName: 'The Rebellion of the Demon Bull King' },
    { ArtifactName: 'Jormungandr"s Scales', TaleName: 'Thor"s Battle with Jörmungandr' },
    { ArtifactName: 'Jormungandr"s Scales', TaleName: 'The Twilight of the Gods' },
    { ArtifactName: 'Ariadne"s Thread', TaleName: 'The Myth of the Minotaur' },
    { ArtifactName: 'The Anchor of the Kraken', TaleName: 'The Wrath of the Kraken' }
];


function AppearsInView() {
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
        //backend update data part
    };

    const handleKeyPress = (e, index) => {
        if (e.key === 'Enter') {
            handleSave(index);
        }
    };

    return (
        <div>
            <h1 className="table-title">Appears In</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Artifact</th>
                        <th>Tale</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((appearsIn, index) => (
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
                                    appearsIn.ArtifactName
                                )}
                            </td>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.TaleName}
                                        onChange={(e) => handleDraftChange(e, 'TaleName')}
                                        onKeyPress={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    appearsIn.TaleName
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AppearsInView;