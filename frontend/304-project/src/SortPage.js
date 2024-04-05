import React from 'react';

const tables = [
  ["Location","location"],
  ["Ritual","ritual"],
  ["Tale","tale"],
  ["Story Events","storyevent"],
  ["Pantheon","pantheon"],
  ["Artifact","artifact"],
  ["Belongs To","belongsto"],
  ["Appears In","appearsin"],
  ["Symbol","symbol"],
  ["Deity","deity"],
  ["Mortal","mortal"],
  ["Creature","creature"],
  ["Represents","represents"],
  ["Part Of","partof"]
];

function SortPage() {
  const [selectedTable, setSelectedTable] = useState('');
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);


  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = async () => {
    setHasSearched(true);
    const response = await fetch(`https://your-api.com/${selectedTable}?keyword=${keyword}`);
    const data = await response.json();
    setData(data);
  };
  
  return (
    <div>
      <p><strong>First choose a table then specify what keyword you want to filter for in this table!</strong></p>
      <br />
    
      <select value={selectedTable} onChange={handleTableChange}>
        <option value="">Select a table</option>
        {tables.map(([label, value]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>

      <input type="text" value={keyword} onChange={handleKeywordChange} placeholder="Enter keyword" />

      <button onClick={handleSubmit}>Submit</button>

      {hasSearched && data.length === 0 ? (
        <p>Sorry, but the given keyword was not found in this table.</p>
      ) : (
        <table>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, i) => <td key={i}>{value}</td>)}
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}

export default SortPage;
