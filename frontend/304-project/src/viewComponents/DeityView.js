import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function DeityView() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3307/api/fetch/Deity');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

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
                        <tr key={index}>
                            <td>{deity.CharacterName}</td>
                            <td>{deity.CharacterDescription}</td>
                            <td>{deity.Domain}</td>
                            <td>{deity.SupernaturalAbility}</td>
                            <td>{deity.Culture}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DeityView;