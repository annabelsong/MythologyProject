import React, { useState } from 'react'
import './TableStyles.css';
const mockData = [
    { RitualName: 'Dionysian Mysteries', Recurring: true, CharacterName: 'Dionysus', LocationName: 'anywhere', TimePeriod: 'anytime' },
    { RitualName: 'Kharisteria', Recurring: true, CharacterName: 'Artemis', LocationName: 'Athens', TimePeriod: 'classical antiquity' },
    { RitualName: 'Olympic Games', Recurring: true, CharacterName: 'Zeus', LocationName: 'Olympia', TimePeriod: 'classical antiquity' },
    { RitualName: 'Delphi Rituals', Recurring: true, CharacterName: 'Apollo', LocationName: 'Delphi', TimePeriod: 'classical antiquity' },
    { RitualName: 'Maha Shivaratri', Recurring: true, CharacterName: 'Shiva', LocationName: 'Nepal', TimePeriod: 'modern' },
    { RitualName: 'Feast of Samhain', Recurring: true, CharacterName: 'Dagda', LocationName: 'anywhere', TimePeriod: 'anytime' },
    { RitualName: 'Enuma Elish', Recurring: true, CharacterName: 'Enlil', LocationName: 'anywhere', TimePeriod: 'anytime' },
    { RitualName: 'Coyote"s Dance of Chaos', Recurring: true, CharacterName: 'Trickster Coyote', LocationName: 'anywhere', TimePeriod: 'anytime' },
    { RitualName: 'Festival of the Apsu', Recurring: true, CharacterName: 'Enki', LocationName: 'Eridu', TimePeriod: 'ancient times' },
    { RitualName: 'Beltane Celebrations', Recurring: true, CharacterName: 'Cernunnos', LocationName: 'Celtic Lands', TimePeriod: 'Iron Age' },
    { RitualName: 'Pythian Games', Recurring: true, CharacterName: 'Apollo', LocationName: 'Delphi', TimePeriod: 'classical antiquity' },
    { RitualName: 'Feast of Apollo', Recurring: true, CharacterName: 'Apollo', LocationName: 'Delphi', TimePeriod: 'anytime' },
    { RitualName: 'Brauronia', Recurring: true, CharacterName: 'Artemis', LocationName: 'Brauron', TimePeriod: 'classical antiquity' },
    { RitualName: 'Dionysia', Recurring: true, CharacterName: 'Dionysus', LocationName: 'Athens', TimePeriod: 'classical antiquity' },
    { RitualName: 'Osiris Mysteries', Recurring: true, CharacterName: 'Osiris', LocationName: 'Abydos', TimePeriod: 'anytime' }
];


function RitualView() {
    const [data, setData] = useState(mockData);
    const [editRowIndex, setEditRowIndex] = useState(null);
    const [draftData, setDraftData] = useState({});

    const handleRowDoubleClick = (index) => {
        setEditRowIndex(index);
        setDraftData({ ...data[index] });
    };

    //slightly diff because boolean for recurring
    const handleDraftChange = (e, fieldName) => {
        const value = fieldName === 'Recurring' ? e.target.value === 'true' : e.target.value;
        setDraftData({ ...draftData, [fieldName]: value });
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
            <h1 className="table-title">Rituals</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Recurring</th>
                        <th>Character Worshipped</th>
                        <th>Location</th>
                        <th>Time Period</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((ritual, index) => (
                        <tr key={index} onDoubleClick={() => handleRowDoubleClick(index)}>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.RitualName}
                                        onChange={(e) => handleDraftChange(e, 'RitualName')}
                                        onKeyPress={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    ritual.RitualName
                                )}
                            </td>
                            <td>
                                {editRowIndex === index ? (
                                    <select
                                        value={draftData.Recurring ? 'true' : 'false'}
                                        onChange={(e) => handleDraftChange(e, 'Recurring')}
                                        onKeyPress={(e) => handleKeyPress(e, index)}
                                    >
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </select>
                                ) : (
                                    ritual.Recurring.toString()
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
                                    ritual.CharacterName
                                )}
                            </td>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.LocationName}
                                        onChange={(e) => handleDraftChange(e, 'LocationName')}
                                        onKeyPress={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    ritual.LocationName
                                )}
                            </td>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.TimePeriod}
                                        onChange={(e) => handleDraftChange(e, 'TimePeriod')}
                                        onKeyPress={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    ritual.TimePeriod
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RitualView;