'use client'
import React, { useState } from 'react';
import "./diagnosis.css"; 
import labelDescriptions from './labelDescriptions.json'; 

function ImageUpload() {
    const [file, setFile] = useState(null);
    const [label, setLabel] = useState('');
    const [description, setDescription] = useState('');
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLabel(''); 
        setDescription('');
        if (!file) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        fetch('http://127.0.0.1:5000', {
        method: 'POST',
        body: formData,
        })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        setLabel(data.label); 
        setDescription(labelDescriptions[data.label]); 
    })
    .catch(error => console.error('Error:', error));
    };

    return (
        <main className="main-container">
            <div className="upload-section">
                <h2>Upload Your Image for Diagnosis</h2>
            </div>
                <form onSubmit={handleSubmit}>
                    <input type="file" onChange={handleFileChange} />
                    <button type="submit">Upload</button>
                </form>
                <div className="image-placeholder"> 
                    {imagePreviewUrl ? (
                        <div className="image-preview">
                            <img src={imagePreviewUrl} alt="Uploaded" style={{ maxWidth: '50%', height: 'auto' }} />
                        </div>
                    ) : (
                        <div className="placeholder-content">No image uploaded</div>
                    )}
                </div>
                {label && (
                <div className="label-description-box" style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
                    <p><strong>Result:</strong> {label}</p>
                    <p><strong>Description:</strong> {description}</p>
                </div>
            )}
        </main>
    );
}

export default ImageUpload;