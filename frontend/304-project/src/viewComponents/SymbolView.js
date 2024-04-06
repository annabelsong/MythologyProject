import React, { useState } from 'react'
import './TableStyles.css';
const mockData = [
    { SymbolName: 'Weaving Loom', Origin: 'Her background as a mortal in the past' },
    { SymbolName: 'Shield', Origin: 'Shield used in his battle against Hector represents Greece"s fight against Troy' },
    { SymbolName: 'Hammer of Thor', Origin: 'Derived from Thor"s hammer which has the power of lightning' },
    { SymbolName: 'Atef Crown', Origin: 'Osiris had worn it as the ruler of the underworld' },
    { SymbolName: 'Man with wings', Origin: 'Shows man"s overreaching ambition' },
    { SymbolName: 'Golden Headband', Origin: 'A painfully tightening fillet given to the hero in case of any unsavoury behaviour' },
    { SymbolName: 'Golden Dragon', Origin: 'A family coat borne by King Arthur"s father, Uther Pendragon' },
    { SymbolName: 'Grapevine', Origin: 'Represents wine, festivity, and the agricultural aspect of Dionysus’s domain.' },
    { SymbolName: 'Leopard', Origin: 'An animal sacred to Dionysus, often depicted with him, symbolizing the god’s wild and untamed nature.' },
    { SymbolName: 'Ivy', Origin: 'Evergreen ivy is associated with Dionysus, symbolizing eternal life and revelry.' },
    { SymbolName: 'Theater Masks', Origin: 'Symbolize the connection of Dionysus to the arts, especially the theater, reflecting the dual nature of comedy and tragedy in human experience.' },
    { SymbolName: 'Crook and Flail', Origin: 'Symbols of the pharaonic authority, representing Osiris as the shepherd of the dead.' },
    { SymbolName: 'Djed Pillar', Origin: 'Symbolizing stability, it is closely associated with Osiris and often represented in his iconography.' },
    { SymbolName: 'Green Skin', Origin: 'Depicting fertility and rebirth, Osiris is often portrayed with green skin, symbolizing life through death.' }
];

function SymbolView() {
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
        // Backend update logic should be added here
    };

    const handleKeyPress = (e, index) => {
        if (e.key === 'Enter') {
            handleSave(index);
        }
    };

    return (
        <div>
            <h1 className="table-title">Symbols</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Origin</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((symbol, index) => (
                        <tr key={index} onDoubleClick={() => handleRowDoubleClick(index)}>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.SymbolName}
                                        onChange={(e) => handleDraftChange(e, 'SymbolName')}
                                        onKeyDown={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    symbol.SymbolName
                                )}
                            </td>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.Origin}
                                        onChange={(e) => handleDraftChange(e, 'Origin')}
                                        onKeyDown={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    symbol.Origin
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SymbolView;