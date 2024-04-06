import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function ArtifactView() {
    const [data, setData] = useState([]);

    // Backend fetching for view functionality
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3307/api/fetch/Artifact');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1 className="table-title">Artifacts</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Artifact</th>
                        <th>Origin</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((artifact, index) => (
                        <tr key={index}>
                            <td>{artifact.ArtifactName}</td>
                            <td>{artifact.Origin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ArtifactView;
