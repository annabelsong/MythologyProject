import React, { useState, useEffect } from 'react'
import './TableStyles.css';
import axios from 'axios';


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
    // const [data, setData] = useState(mockData);
    const [data, setData] = useState([]);
    const [editRowIndex, setEditRowIndex] = useState(null);
    const [draftData, setDraftData] = useState({});

    // backend fetching for view functionality
    useEffect(() => {
        fetchData();
    }, []);

    const handleRowDoubleClick = (index) => {
        setEditRowIndex(index);
        setDraftData({ ...data[index] });
    };

    const handleDraftChange = (e, fieldName) => {
        setDraftData({ ...draftData, [fieldName]: e.target.value });
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3307/api/fetch/AppearsIn');
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // backend saving for editing functionality
    const handleSave = async (index) => {
        const originalData = data[index];
        const updatedData = { ...draftData };

        const query = {
            primaryKey: originalData.artifactName,
            newTaleName: updatedData.TaleName,
        };

        const url = 'http://localhost:3307/api/update/AppearsIn'
        try { //this is the update request
            const response = await axios.put(url, query);
            console.log(response.data);
            const newData = [...data];
            newData[index] = updatedData;
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
                                        onKeyDown={(e) => handleKeyPress(e, index)}
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
                                        onKeyDown={(e) => handleKeyPress(e, index)}
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