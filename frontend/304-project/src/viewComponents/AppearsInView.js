import React from 'react'
import './TableStyles.css'; 

const mockData = [
    { ArtifactName: 'blah', TaleName: 'blah'}
];

  
function AppearsInView() {
  return (
    <div>
      <h1 className="table-title">Appears In</h1>
      <table className="table-view">
        <thead>
          <tr>
            <th>Artifact</th>
            <th>Tale</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((appearsin) => (
            <tr key={appearsin.ArtifactName}>
              <td>{appearsin.ArtifactName}</td>
              <td>{appearsin.TaleName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppearsInView;