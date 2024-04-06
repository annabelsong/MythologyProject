import React, { useState } from 'react'
import './TableStyleForSort.css';

const mockData = [
    { TaleName: 'Tale of Arachne', MoralLesson: 'Do not get carried away in your own hubris', Culture: 'Greek' },
    { TaleName: 'Story of Achilles', MoralLesson: 'Everyone has a weakness', Culture: 'Greek' },
    { TaleName: 'The myth of Tantalus', MoralLesson: 'Selfish actions could have enduring consequences that may be unpredictable at the time', Culture: 'Greek' },
    { TaleName: 'Tale of Narcissus', MoralLesson: 'Pride and vanity are dangerous', Culture: 'Greek' },
    { TaleName: 'The Myth of Daedalus and Icarus', MoralLesson: 'Do not get carried away in your own hubris', Culture: 'Greek' },
    { TaleName: 'Story of Orpheus and Eurydice', MoralLesson: 'Be patient and keep one"s faith', Culture: 'Greek' },
    { TaleName: 'Myth of Niobe', MoralLesson: 'Do not get carried away in your own hubris', Culture: 'Greek' },
    { TaleName: 'The Death and Resurrection of Osiris', MoralLesson: 'Pride and vanity are dangerous', Culture: 'Egyptian' },
    { TaleName: 'Sun Wukong"s Quest for Immortality', MoralLesson: 'Boldness and talent can only carry one so far. To achieve goals, it takes hubris, persistence and a lot of teammates', Culture: 'Chinese' },
    { TaleName: 'The Legend of King Arthur', MoralLesson: 'Leadership and valor in the pursuit of justice and peace define true kingship.', Culture: 'Welsh' },
    { TaleName: 'Tale of Dagda and the Cauldron', MoralLesson: 'Do not underestimate the consequences of greed and betrayal', Culture: 'Celtic' },
    { TaleName: 'Tale of Enlil and the Tablets of Destiny', MoralLesson: 'Power and destiny should not be taken for granted', Culture: 'Mesopotamian' },
    { TaleName: 'Tale of Trickster Coyote', MoralLesson: 'Wisdom can be found in unexpected places', Culture: 'Native American' },
    { TaleName: 'The Gorgon Medusa', MoralLesson: 'Even the most dreadful form can house a gentle soul, and the most beautiful can house deceit.', Culture: 'Greek' }
];

function TaleSort() {
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
            <h1 className="table-title">Tales</h1>
            <table className="table-Sort">
                <thead>
                    <tr>
                        <th>Tale</th>
                        <th>Moral Lesson</th>
                        <th>Culture</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((tale, index) => (
                        <tr key={index} onDoubleClick={() => handleRowDoubleClick(index)}>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.TaleName}
                                        onChange={(e) => handleDraftChange(e, 'TaleName')}
                                        onKeyPress={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    tale.TaleName
                                )}
                            </td>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.MoralLesson}
                                        onChange={(e) => handleDraftChange(e, 'MoralLesson')}
                                        onKeyPress={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    tale.MoralLesson
                                )}
                            </td>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.Culture}
                                        onChange={(e) => handleDraftChange(e, 'Culture')}
                                        onKeyPress={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    tale.Culture
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default TaleSort;