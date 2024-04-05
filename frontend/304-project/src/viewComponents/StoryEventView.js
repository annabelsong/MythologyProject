import React, {useState} from 'react'
import './TableStyles.css';
const mockData = [//part of it
    { TaleName: 'Story of Achilles', EventName: 'Achilles becomes invulnerable', EventDescription: 'As a baby Achilles is dipped into the river Styx by his mother who holds him by his heel, rendering him invulnerable', LocationName: 'River Styx', TimePeriod: 'classical antiquity' },
    { TaleName: 'Story of Achilles', EventName: 'Achilles goes to war', EventDescription: 'Achilles joins the Trojan war on the side of the Greeks', LocationName: 'Troy', TimePeriod: 'classical antiquity' },
    { TaleName: 'Story of Achilles', EventName: 'Death of Patroclus', EventDescription: 'After his wits were removed by Apollo, Hector kills Patroclus in battle with a spear stab to the stomach', LocationName: 'Troy', TimePeriod: 'classical antiquity' },
    { TaleName: 'Story of Achilles', EventName: 'Death of Hector', EventDescription: 'After a one-on-one fight, Achilles avenges his friend Patroclus by killing Hector', LocationName: 'Troy', TimePeriod: 'classical antiquity' },
    { TaleName: 'Story of Achilles', EventName: 'Achilles gets shot', EventDescription: 'Guided by Apollo, Paris shoots Achilles in his single vulnerable spot, his heel', LocationName: 'Troy', TimePeriod: 'classical antiquity' },
    { TaleName: 'The Myth of Daedalus and Icarus', EventName: 'Icarus loses his wings', EventDescription: 'After flying too close to the sun, the wax on Icarus"s wings melts, leaving him featherless and unable to fly', LocationName: 'Crete', TimePeriod: 'classical antiquity' },
    { TaleName: 'Tale of Dagda and the Cauldron', EventName: 'Dagda retrieves her Cauldron', EventDescription: 'After the Cauldron of Dagna is stolen by Fomorians, Dagda sets out on a quest to retrieve her cauldron.', LocationName: 'Mount Olympus', TimePeriod: 'classical antiquity' },
    { TaleName: 'Tale of Enlil and the Tablets of Destiny', EventName: 'The Tablets of Destiny are stolen', EventDescription: 'Anzu, a monstrous bird, steals the tablet from Enlil, who is entrusted with it because he is the chief of the gods. Enlil embarks on a journey to retrieve the powerful tablets', LocationName: 'Mesopotamia', TimePeriod: 'classical antiquity' },
    { TaleName: 'Trickster Coyote and the Dreamcatcher', EventName: 'Creation of the Dreamcatcher', EventDescription: 'Coyote creates the Dreamcatcher to protect people from bad dreams by filtering them through his web, allowing only good dreams to pass through', LocationName: 'North America', TimePeriod: 'classical antiquity' }
];


function StoryEventView() {
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
        // backend place
    };

    const handleKeyPress = (e, index) => {
        if (e.key === 'Enter') {
            handleSave(index);
        }
    };

    return (
        <div>
            <h1 className="table-title">Story Events</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Tale</th>
                        <th>Event</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Time Period</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((storyevent, index) => (
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
                                    storyevent.TaleName
                                )}
                            </td>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.EventName}
                                        onChange={(e) => handleDraftChange(e, 'EventName')}
                                        onKeyPress={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    storyevent.EventName
                                )}
                            </td>
                            <td>
                                {editRowIndex === index ? (
                                    <input className="full-width-input"
                                        type="text"
                                        value={draftData.EventDescription}
                                        onChange={(e) => handleDraftChange(e, 'EventDescription')}
                                        onKeyPress={(e) => handleKeyPress(e, index)}
                                    />
                                ) : (
                                    storyevent.EventDescription
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
                                    storyevent.LocationName
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
                                    storyevent.TimePeriod
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StoryEventView;