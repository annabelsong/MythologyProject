import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css';

function ArtifactPage() {
    const [artifact, setArtifactName] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');

    const handleArtifactNameChange = (e) => setArtifactName(e.target.value);

    const deleteArtifactEntry = async () => {
        if (!artifact) {
            alert("Please enter the artifact name of the entry you want to delete.");
            return;
        }

        try {
            const response = await axios.delete('http://localhost:3307/api/delete/Artifact', { data: { artifact } });
            console.log(response.data);
            setDeleteMessage("The entry has been successfully deleted.");
            setArtifactName('');
        } catch (error) {
            console.error('Error deleting artifact entry:', error);
            setDeleteMessage("Error deleting the entry. Please try again.");
        }
    };

    return (
        <div className="edit-form">
            <h2 className="form-title">Delete Artifact Entry</h2>
            <label>
                <span>Name of Artifact entry you'd like to delete:</span>
                <input
                    type="text"
                    value={artifact}
                    onChange={handleArtifactNameChange}
                    className="input-field"
                />
            </label>
            <button
                type="button"
                onClick={deleteArtifactEntry}
                style={{ backgroundColor: 'red', color: 'white' }}
            >
                Delete
            </button>
            {deleteMessage && <p>{deleteMessage}</p>}
        </div>
    );
}

export default ArtifactPage;