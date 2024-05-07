import React, { useState } from 'react';
import { storage } from './firebase-config'; // Adjust the path as necessary
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = e => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.error('Upload failed:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          setUrl(downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      {progress > 0 ? <progress value={progress} max="100" /> : null}
      <br />
      {url ? <img src={url} alt="Uploaded" height="150" /> : null}
    </div>
  );
};

export default FileUpload;