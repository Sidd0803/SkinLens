'use client'
import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
    const [file, setFile] = useState(null);
    const [label, setLabel] = useState('');
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
        if (!file) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        fetch('http://127.0.0.1:5000', {
        method: 'POST',
        body: formData,
        mode: "no-cors"
      
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        setLabel(data.label); 
    })
    .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>Upload an Image</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            {imagePreviewUrl && <img src={imagePreviewUrl} alt="Image preview" style={{ maxWidth: '50%', height: 'auto' }}/>}
            {label && <p>Label: {label}</p>}
        </div>
    );
}

export default ImageUpload;