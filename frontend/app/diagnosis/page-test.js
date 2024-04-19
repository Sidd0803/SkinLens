// 'use client'
// import React, { useEffect, useState } from 'react';
// import { ref, push } from 'firebase/database';
// import {database}  from '../firebase';
// import {
//     getDownloadURL,
//     ref as storageRef,
//     uploadBytes,
//   } from "firebase/storage";

// // ---- NEED TO HARD CODE A USER ID FOR NOW ----


// function DiagnosisPage() {
//     const [diagnosisResult, setDiagnosisResult] = useState('');
//     const [imageUpload, setImageUpload] = useState('');
//     const [userName, setUserName] = useState('');


//     useEffect(() => {
//         const imagesRef = database.ref(database, 'users/ userid / images');

//         const imagesListener = imagesRef.on('child_added', (imagesRef, (snapshot) => {
//             const imageData = snapshot.val();
//             if (imageData) {
//                 const { result } = imageData;
//                 setDiagnosisResult(result);
//             }
//         }));
    
//         return () => {
//             imagesListener();
//         };
//     }, []);

//     const handleUploadImage = () => {
//         if (imageUpload === null) {
//           toastifyError("Please select an image");
//           return;
//         }
//         const imageRef = ref(storage, 'user/userid /images}');
    
//         uploadBytes(imageRef, imageUpload)
//           .then((snapshot) => {
//             getDownloadURL(snapshot.ref)
//               .then((url) => {
//                 saveData(url);
//               })
//               .catch((error) => {
//                 toastifyError(error.message);
//               });
//           })
//           .catch((error) => {
//             toastifyError(error.message);
//           });
//       };



    
    
//     return (
//         <div>
//             <h1>Welcome, {userName}!</h1>
//             <form onSubmit={handleUploadImage}>
//                 <label htmlFor="Image">Select image:</label>
//                 <input type="file" id="" name="Image" accept="image/*" onChange={(e) => {setImageUpload(e.target.files[0]);}} />
//                 <input type="submit" value="Submit" />
//             </form>

//             <p>{diagnosisResult}</p>

//         </div>
//     );
// }





// export default DiagnosisPage;



//  old and bad handling of image upload to clean out // delete

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     const formData = new FormData();
    //     formData.append('image', event.target.elements.Image.files[0]);
    
    //     try {
    //         const imageRef = push(ref(database, 'images'));
    //         const snapshot = await uploadBytesResumable(imageRef, formData.get('image'));
    //         console.log('Image uploaded successfully:', snapshot);
    //     } catch (error) {
    //         console.error('Error uploading image:', error);
    //     }
    // };



//  need fetch methods for all types of data --> done



   // useEffect(() => {
    //     const generateFakeUserData = async () => {
    //         const userRef = push(ref(database, 'users'));
    //         const userData = {
    //             email: 'user@example.com',
    //             name: 'John Doe',
    //             password: 'password123',
    //             medications: ['Medication A', 'Medication B'],
    //             physicians: [{
    //                 name: 'Physician 1',
    //                 rating: 4.5,
    //                 specialty: 'Specialty A'
    //             }],
    //             logs: [{
    //                 timestamp: new Date(),
    //                 physician: 'Physician 1',
    //                 message: 'Log message here'
    //             }],
    //             chats: [{
    //                 chat_id: 'chat1',
    //                 timestamp: new Date(),
    //                 physician: 'Physician 1',
    //                 message: 'Chat message here'
    //             }],
    //             data: [{
    //                 timestamp: new Date(),
    //                 personal_notes: 'Personal notes here',
    //                 diagnosis: 'Diagnosis here',
    //                 diagnosis_images: [{
    //                     result: 'Diagnosis result',
    //                     encoded_image_str: 'Encoded image string here'
    //                 }]
    //             }]
    //         };

    //         push(userRef, userData);
    //         console.log('Generated data for user');
    //     };

    //     generateFakeUserData();
    // }, []);
