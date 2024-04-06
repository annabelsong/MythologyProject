import React, { useState } from 'react'
import './TableStyleForSort.css';

const mockData = [
    { CharacterName: 'Achilles', CharacterDescription: 'Achilles was the strongest warrior and hero in the Greek army during the Trojan War. He was the son of Peleus, king of the Myrmidons, and Thetis, a sea nymph', Title: null, Profession: 'Greek Warrior', ChildName: 'Neoptolemus', Culture: 'Greek' },
    { CharacterName: 'Icarus', CharacterDescription: 'son of the inventor Daedalus who perished by flying too near the Sun with waxen wings. See Daedalus', Title: null, Profession: null, ChildName: null, Culture: 'Greek' },
    { CharacterName: 'Daedalus', CharacterDescription: 'Daedalus is Icarus"s father, and a brilliant architect, sculptor, and inventor. He was credited with building for King Minos of Crete the Labyrinth in which the Minotaur was kept', Title: null, Profession: 'Inventor', ChildName: 'Icarus', Culture: 'Greek' },
    { CharacterName: 'Arthur', CharacterDescription: 'The King of Britain, Uther Pendragon, dies, leaving no heir to the throne. As his most powerful knights fight to decide who will succeed, a mysterious sword appears in a stone. Whoever pulls the sword from the stone will be the next king. Arthur pulls the sword', Title: 'King', Profession: 'King of Medieval England', ChildName: 'Mordred', Culture: 'Welsh' },
    { CharacterName: 'Patroclus', CharacterDescription: 'Patroclus was a hero of the Trojan War and is widely known for being the childhood friend and close wartime companion of the hero Achilles. Legends either say that he has a blood relation to Achilles, or was Achilles" lover.', Title: null, Profession: 'Greek Warrior', ChildName: null, Culture: 'Greek' },
    { CharacterName: 'Cú Chulainn', CharacterDescription: 'Legendary hero of Irish mythology known for his unmatched prowess in battle.', Title: null, Profession: 'Warrior', ChildName: null, Culture: 'Celtic' },
    { CharacterName: 'Gilgamesh', CharacterDescription: 'King of Uruk and central character of the Epic of Gilgamesh, known for his strength and adventures.', Title: null, Profession: 'King', ChildName: null, Culture: 'Mesopotamian' },
    { CharacterName: 'Hiawatha', CharacterDescription: 'Legendary figure in Native American folklore, known for his role in uniting the Iroquois tribes.', Title: null, Profession: 'Leader', ChildName: null, Culture: 'Native American' }
];

function MortalSort() {
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
        // Integrate backend update logic here
    };

    const handleKeyPress = (e, index) => {
        if (e.key === 'Enter') {
            handleSave(index);
        }
    };

    return (
        <div>
            <h1 className="table-title">Mortals</h1>
            <table className="table-Sort">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Title</th>
                        <th>Profession</th>
                        <th>Child's Name</th>
                        <th>Culture</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((mortal, index) => (
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
                                    mortal.CharacterName
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
                                    mortal.CharacterDescription
                                )}
                            </td>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.Title}
                                        onChange={(e) => handleDraftChange(e, 'Title')}
                                        onKeyDown={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    mortal.Title
                                )}
                            </td>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.Profession}
                                        onChange={(e) => handleDraftChange(e, 'Profession')}
                                        onKeyDown={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    mortal.Profession
                                )}
                            </td>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.ChildName}
                                        onChange={(e) => handleDraftChange(e, 'ChildName')}
                                        onKeyDown={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    mortal.ChildName
                                )}
                            </td>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.Culture}
                                        onChange={(e) => handleDraftChange(e, 'Culture')}
                                        onKeyDown={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    mortal.Culture
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MortalSort;