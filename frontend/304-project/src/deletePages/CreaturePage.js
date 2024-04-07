import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css';

function CreaturePage() {
    const [characterName, setCreatureName] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');

    const handleCreatureNameChange = (e) => setCreatureName(e.target.value);

    const deleteCreatureEntry = async () => {
        if (!characterName) {
            alert("Please enter the name of the Creature you want to delete.");
            return;
        }

        try {
            const response = await axios.delete('http://localhost:3307/api/delete/Creature', { data: { characterName } });
            console.log(response.data);
            setDeleteMessage("The entry has been successfully deleted.");
            setCreatureName('');
        } catch (error) {
            console.error('Error deleting Creature entry:', error);
            setDeleteMessage("Error deleting the entry. Please try again.");
        }
    };

    return (
        <div className="edit-form">
            <h2 className="form-title">Delete Creature Entry</h2>
            <label>
                <span>Name of Creature entry you'd like to delete:</span>
                <input
                    type="text"
                    value={characterName}
                    onChange={handleCreatureNameChange}
                    className="input-field"
                />
            </label>
            <button
                type="button"
                onClick={deleteCreatureEntry}
                style={{ backgroundColor: 'red', color: 'white' }}
            >
                Delete
            </button>
            {deleteMessage && <p>{deleteMessage}</p>}
        </div>
    );
}

export default CreaturePage;