import React from 'react'
import './TableStyles.css';

const mockData = [
    { SymbolName: 'blah', CharacterName: 'lbah'}
  ];

  
function RepresentsView() {
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
          {mockData.map((represents) => (
            <tr key={represents.SymbolName}>
              <td>{represents.SymbolName}</td>
              <td>{represents.CharacterName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RepresentsView;