'use client'
import React, {useEffect, useState} from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { database} from '../firebase';
import { storage } from "../firebase";

import {ref, onValue, push, update} from '@firebase/database';

import {
    getDownloadURL,
    ref as storageRef,
    uploadBytes,
  } from "firebase/storage";

import {fetchAllData}  from '../firebaseMethods';

const testingID = "-NviBayQlBNn6zFkYQGc/-NviBayQlBNn6zFkYQGd";

const DiagnosisPage = () => {
 
    const [diagnosisResult, setDiagnosisResult] = useState('');
    const [imageUpload, setImageUpload] = useState('');
    const [userName, setUserName] = useState('');
    const [userID, setUserID] = useState('');

    const allUserData = fetchAllData(database);

    console.log(allUserData);

    
    const handleUploadImage = () => {
        if (imageUpload === null) {
          toastifyError("Please select an image");
          return;
        }
        const imageRef = ref(storage,  'user/-NviBayQlBNn6zFkYQGc/-NviBayQlBNn6zFkYQGd/images}');
    
        uploadBytes(imageRef, imageUpload)
          .then((snapshot) => {
            getDownloadURL(snapshot.ref)
              .then((url) => {
                saveData(url);
              })
              .catch((error) => {
                toastifyError(error.message);
              });
          })
          .catch((error) => {
            toastifyError(error.message);
          });
      };


    useEffect(() => {
        const imagesRef = ref(database, 'users/NviBayKoUKxjr3zxYlx/images');

        const imagesListener = imagesRef.on('child_added', (imagesRef, (snapshot) => {
            const imageData = snapshot.val();
            if (imageData) {
                const { result } = imageData;
                setDiagnosisResult(result);
            }
        }));
    
        return () => {
            imagesListener();
        };
    }, []);




    return(

        <main>

                <Card className="text-center">
                
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Image src="banana.jpg"xs = {2} md = {2} xl = {1} width={200} height={200} rounded/> 
                    </Card.Body>
                </Card>

                <Form.Group controlId="formFile" className="text-center" onSubmit={handleUploadImage}>
                    <Form.Label>Upload a photo for diagnosis</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                    <Card className = "text-center">
                        <Card.Title>
                           {diagnosisResult}
                            </Card.Title>

                        <Card.Body>
                            Some data about your results go here!
                        </Card.Body>
                    </Card>
        </main>
    )
}

export default DiagnosisPage;