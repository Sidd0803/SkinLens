'use client'
import React from 'react';
import Navigation from '../components/nav';
import { useState } from 'react';

function DiagnosisPage() {
    const [diagnosisResult, setDiagnosisResult] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('Image', event.target.img.files[0]);

        try {
            const response = await fetch('/5000', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            setDiagnosisResult(data.result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="Image">Select image:</label>
                <input type="file" id="" name="Image" accept="image/*" />
                <input type="submit" value="Submit" />
            </form>

            <p>{diagnosisResult}</p>

        </div>
    );
}

export default DiagnosisPage;
