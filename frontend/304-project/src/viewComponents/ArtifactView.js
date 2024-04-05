import React, { useState } from 'react'
import './TableStyles.css';

const mockData = [ //tooo lazy to do the full table just for mock
    {
        ArtifactName: 'Mjollnir',
        Origin: 'Forged for Thor by a dwarf named Sindri',
    },
    {
        ArtifactName: "Arachne's Tapestry",
        Origin: "The tapestry forged in Arachne's weaving competition with Athena that won. This tapestry was torn to pieces because Athena was envious of Arachne's skills, but it still stands that Arachne's Tapestry was magnificent enough to beat the Gods",
    },
    {
        ArtifactName: 'Shield of Achilles',
        Origin: "Achilles lends Patroclus his armor in order to lead the Achaean army into battle. Ultimately, Patroclus is killed in battle by Hector, and Achilles's armor is stripped from his body and taken by Hector as spoils. The loss of his companion prompts Achilles to return to battle, and the god Hephaestus forges Achilles a shield with spectacular decorative imagery.",
    },
    {
        ArtifactName: 'Wings of Icarus',
        Origin: "Daedalus, Icarus's father, studied the movements of birds and built a device mimicking them. He then laid down multiple feathers in a row from shortest to longest and tied them together using beeswax and thread. However, Daedalus warned Icarus not to fly too high, because the heat of the sun would melt the beeswax (holding his feathers together) and the wings would break, nor too low, because the sea foam would soak the feathers and make them heavy and he would fall",
    },
    {
        ArtifactName: "Osiris's Coffin",
        Origin: "A beautifully carved coffin made by Set. Osiris was tricked by Set, his brother, to enter the chest, and was enclosed inside it by 72 accomplices of Set. Set flung the coffer in the Nile so that it would drift far away.",
    },
];

// same comments as the locationview.js file
function ArtifactView() { // change mockdata to real data later
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
        // backend thing
    };

    const handleKeyPress = (e, index) => {
        if (e.key === 'Enter') {
            handleSave(index);
        }
    };

    return (
        <div>
            <h1 className="table-title">Artifacts</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Artifact</th>
                        <th>Origin</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((artifact, index) => (
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
                                    artifact.ArtifactName
                                )}
                            </td>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.Origin}
                                        onChange={(e) => handleDraftChange(e, 'Origin')}
                                        onKeyPress={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    artifact.Origin
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ArtifactView;