'use client'
import React, { useState } from 'react';
import Navigation from '../../components/nav';
import styles from './page.modules.css'; // Assuming CSS Modules are being used correctly
import { Button, Card, Image, Stack, Modal, Form } from 'react-bootstrap';

function ProgressionPage() {
    const defaultImage = '../../genericlesion.jpeg';
    const [entries, setEntries] = useState([
        { id: 1, date: '5/4/2024', imageName: defaultImage, description: 'Initial Description', typeName: 'Initial Type' }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [newTypeName, setNewTypeName] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newImage, setNewImage] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setNewImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const addNewLog = () => {
        const newEntry = {
            id: entries.length + 1,
            date: new Date().toLocaleDateString(),
            imageName: newImage || defaultImage,
            description: newDescription,
            typeName: newTypeName
        };
        setEntries([...entries, newEntry]);
        setShowModal(false); // Close modal after adding
        setNewTypeName('');  // Reset input fields
        setNewDescription('');
        setNewImage('');
    };

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        setNewImage(''); // Reset the image when modal is closed without adding an entry
    };

    return (
        <div className={styles.pageContainer}>
            <Navigation />
            <h1 className="titleStyle">My Skin Concerns</h1>
            <Stack gap={5}>
                {entries.map((entry, index) => (
                    <Stack key={index} direction="horizontal" gap={3}>
                        <div className="titleStyle4">{entry.date}</div>
                        <div className="p-2">
                            <Image src={entry.imageName} roundedCircle style={{ width: '100px', height: '100px' }} />
                        </div>
                        <div className="p-2">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="titleStyle5">{entry.typeName}</Card.Title>
                                    <Card.Text className="textStyle3">
                                        {entry.description}
                                    </Card.Text>
                                    <Button variant="primary" className="small-button" onClick={() => setEntries(entries.filter(e => e.id !== entry.id))}>Delete</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Stack>
                ))}
                <Button variant="primary" className="small-button" onClick={handleShowModal}>Add New Log</Button>
            </Stack>

            {/* Modal for New Log Input */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Log</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="typeName">
                            <Form.Label>Type Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter type name" value={newTypeName} onChange={e => setNewTypeName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter description" value={newDescription} onChange={e => setNewDescription(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="imageUpload">
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control type="file" onChange={handleImageChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addNewLog}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ProgressionPage;