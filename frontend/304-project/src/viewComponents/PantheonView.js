import React, {useState} from 'react'
import './TableStyles.css'; 

const mockData = [
    { Culture: 'Norse', PantheonName: 'Asgardian Gods' },
    { Culture: 'Greek', PantheonName: 'Gods of Olympus' }, 
    { Culture: 'Egyptian', PantheonName: 'Egyptian Gods and Goddesses' },
    { Culture: 'Chinese', PantheonName: 'Chinese Mythology' },
    { Culture: 'Hindu', PantheonName: 'Hindu Mythology' },
    { Culture: 'Welsh', PantheonName: 'Arthurian Legends' },
    { Culture: 'Celtic', PantheonName: 'Deities and Spirits of Celtic Mythology' },
    { Culture: 'Mesopotamian', PantheonName: 'Gods and Mythical Creatures of Mesopotamia' },
    { Culture: 'Native American', PantheonName: 'Native American Mythology' }
  ];

  function PantheonView() {
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
      // backend logic
    };
  
    const handleKeyPress = (e, index) => {
      if (e.key === 'Enter') {
        handleSave(index);
      }
    };
  
    return (
      <div>
        <h1 className="table-title">Pantheons</h1>
        <table className="table-view">
          <thead>
            <tr>
              <th>Culture</th>
              <th>Pantheon</th>
            </tr>
          </thead>
          <tbody>
            {data.map((pantheon, index) => (
              <tr key={index} onDoubleClick={() => handleRowDoubleClick(index)}>
                <td>
                  {editRowIndex === index ? (
                    <input className="full-width-input"
                      type="text"
                      value={draftData.Culture}
                      onChange={(e) => handleDraftChange(e, 'Culture')}
                      onKeyPress={(e) => handleKeyPress(e, index)}
                    />
                  ) : (
                    pantheon.Culture
                  )}
                </td>
                <td>
                  {editRowIndex === index ? (
                    <input className="full-width-input"
                      type="text"
                      value={draftData.PantheonName}
                      onChange={(e) => handleDraftChange(e, 'PantheonName')}
                      onKeyPress={(e) => handleKeyPress(e, index)}
                    />
                  ) : (
                    pantheon.PantheonName
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default PantheonView;