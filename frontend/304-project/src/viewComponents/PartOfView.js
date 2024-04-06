import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function PartOfView() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3307/api/fetch/PartOf');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1 className="table-title">Part Of</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Character</th>
                        <th>Tale</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((partOf, index) => (
                        <tr key={index}>
                            <td>{partOf.CharacterName}</td>
                            <td>{partOf.TaleName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PartOfView;