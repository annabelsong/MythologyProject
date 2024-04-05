import React, {useState} from 'react'
import './TableStyles.css';

const mockData = [
    { SymbolName: 'Hammer of Thor', CharacterName: 'Thor' },
    { SymbolName: 'Weaving Loom', CharacterName: 'Arachne' },
    { SymbolName: 'Shield', CharacterName: 'Achilles' },
    { SymbolName: 'Man with Wings', CharacterName: 'Icarus' },
    { SymbolName: 'Atef Crown', CharacterName: 'Osiris' },
    { SymbolName: 'Golden Headband', CharacterName: 'Sun Wukong' },
    { SymbolName: 'Golden Dragon', CharacterName: 'Arthur' },
    { SymbolName: 'Ouroboros', CharacterName: 'Jormungandr' },
    { SymbolName: 'Gorgoneion', CharacterName: 'Medusa' },
    { SymbolName: 'Thyrsus', CharacterName: 'Dionysus' },
    { SymbolName: 'Grapevine', CharacterName: 'Dionysus' },
    { SymbolName: 'Leopard', CharacterName: 'Dionysus' },
    { SymbolName: 'Ivy', CharacterName: 'Dionysus' },
    { SymbolName: 'Theater Masks', CharacterName: 'Dionysus' },
    { SymbolName: 'Crook and Flail', CharacterName: 'Osiris' },
    { SymbolName: 'Djed Pillar', CharacterName: 'Osiris' },
    { SymbolName: 'Green Skin', CharacterName: 'Osiris' }
];

function RepresentsView() {
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
        // backend part
    };

    const handleKeyPress = (e, index) => {
        if (e.key === 'Enter') {
            handleSave(index);
        }
    };

    return (
        <div>
            <h1 className="table-title">Represents</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Deity</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((represents, index) => (
                        <tr key={index} onDoubleClick={() => handleRowDoubleClick(index)}>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.SymbolName}
                                        onChange={(e) => handleDraftChange(e, 'SymbolName')}
                                        onKeyPress={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    represents.SymbolName
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
                                    represents.CharacterName
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default RepresentsView;