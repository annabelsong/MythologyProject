import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function PantheonView() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3307/api/fetch/Pantheon');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

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
                        <tr key={index}>
                            <td>{pantheon.Culture}</td>
                            <td>{pantheon.PantheonName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PantheonView;