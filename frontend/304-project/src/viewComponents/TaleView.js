import React, { useState, useEffect } from 'react';
import './TableStyles.css';
import axios from 'axios';

function TaleView() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3307/api/fetch/Tales');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1 className="table-title">Tales</h1>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Tale</th>
                        <th>Moral Lesson</th>
                        <th>Culture</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((tale, index) => (
                        <tr key={index}>
                            <td>{tale.TaleName}</td>
                            <td>{tale.MoralLesson}</td>
                            <td>{tale.Culture}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TaleView;