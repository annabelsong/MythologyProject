import React, {useState, useEffect} from 'react'
import axios from 'axios'; 
import './TableStyleForSort.css'; 

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

  function PantheonSort() {
    const [data, setData] = useState(mockData);
    // const [data, setData] = useState([]);
    const [editRowIndex, setEditRowIndex] = useState(null);
    const [draftData, setDraftData] = useState({});

    // backend fetching for Sort functionality
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3307/api/fetch/Pantheon');
          setData(response.data);
        } catch(error) {
            console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
  
    const handleRowDoubleClick = (index) => {
      setEditRowIndex(index);
      setDraftData({ ...data[index] });
    };
  
    const handleDraftChange = (e, fieldName) => {
      setDraftData({ ...draftData, [fieldName]: e.target.value });
    };

  
    // backend saving for editing functionality
    const handleSave = async (index) => {      
      const query = {...draftData};
      const url = 'http://localhost:3307/api/update/Pantheon'
      try{ //this is the update request
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
  
    //pressing enter to start handlesave
    const handleKeyPress = (e, index) => {
      console.log('Key pressed:', e.key); //just for debugging why is this enter key not saving
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSave(index);
      }
    };
  
    return (
      <div>
        <h1 className="table-title">Pantheons</h1>
        <table className="table-Sort">
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
                    <input 
                      className="full-width-input"
                      type="text"
                      value={draftData.Culture}
                      onChange={(e) => handleDraftChange(e, 'Culture')}
                      onKeyDown={(e) => handleKeyPress(e, index)}
                    />
                  ) : (
                    pantheon.Culture
                  )}
                </td>
                <td>
                  {editRowIndex === index ? (
                    <input 
                      className="full-width-input"
                      type="text"
                      value={draftData.PantheonName}
                      onChange={(e) => handleDraftChange(e, 'PantheonName')}
                      onKeyDown={(e) => handleKeyPress(e, index)}
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
  
  export default PantheonSort;