import React, { useState } from 'react'
import './TableStyles.css';
import axios from 'axios';


const mockData = [
    {
        CharacterName: 'Thor',
        CharacterDescription: 'A prominent god in Germanic paganism. In Norse mythology, he is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of humankind, hallowing, and fertility.',
        Domain: 'Thunder',
        SupernaturalAbility: 'Superstrength',
        Culture: 'Norse'
    },
    {
        CharacterName: 'Osiris',
        CharacterDescription: 'God of the deceased, was the son and oldest child of Geb, the Earth deity and Nut, the sky goddess. His wife and sister was Isis, goddess of motherhood, magic, fertility, death, healing, and rebirth.',
        Domain: 'Underground and Afterlife',
        SupernaturalAbility: 'Telepathy',
        Culture: 'Egyptian'
    },
    {
        CharacterName: 'Sun Wukong',
        CharacterDescription: 'A monkey who was born out of stone and possesses magical powers and strength. The legend of the Monkey King explains how he helped protect Xuan Zang, a monk, on their journey to India in order to bring back Buddhist holy books to China.',
        Domain: 'Trickery',
        SupernaturalAbility: 'Transformation',
        Culture: 'Chinese'
    },
    {
        CharacterName: 'Dionysus',
        CharacterDescription: 'Dionysus is called twice-born because he was born from Semele and then, while she was dying, Zeus saved him by sewing him up in his thigh and keeping him there until he reached maturity. He then "gave birth" to Dionysus, thus making him twice-born.',
        Domain: 'Wine, Festivity, and Fertility',
        SupernaturalAbility: 'Vine manipulation, causing insanity, transformation',
        Culture: 'Greek'
    },
    {
        CharacterName: 'Artemis',
        CharacterDescription: 'Artemis was the twin sister to Apollo and was the daughter of Zeus and Leto. Both Apollo and Artemis took revenge against anyone who attempted to harm their mother. Apollo and Artemis slew the giant Tityus and killed the children of the mortal woman Niobe',
        Domain: 'Archery, Hunting, Moon, and Maidenhood',
        SupernaturalAbility: 'Bowmanship, transformation, and healing',
        Culture: 'Greek'
    }
];


function DeityView() {
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
            characterName: updatedData.CharacterName,
            CharacterDescription: updatedData.CharacterDescription,
            Domain: updatedData.Domain,
            SupernaturalAbility: updatedData.SupernaturalAbility,
            Culture: updatedData.Culture
        };

        const url = 'http://localhost:3307/api/update/Deity'
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
            <h1 className="table-title">Deities</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Domain</th>
                        <th>Supernatural Ability</th>
                        <th>Culture</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((deity, index) => (
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
                                    deity.CharacterName
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
                                    deity.CharacterDescription
                                )}
                            </td>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.Domain}
                                        onChange={(e) => handleDraftChange(e, 'Domain')}
                                        onKeyDown={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    deity.Domain
                                )}
                            </td>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.SupernaturalAbility}
                                        onChange={(e) => handleDraftChange(e, 'SupernaturalAbility')}
                                        onKeyDown={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    deity.SupernaturalAbility
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
                                    deity.Culture
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DeityView;