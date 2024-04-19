'use client'
import React from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function DiagnosisPage(){

    return(

        <main>

                <Card className="text-center">
                
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Image src="banana.jpg"xs = {2} md = {2} xl = {1} width={200} height={200} rounded/> 
                    </Card.Body>
                </Card>

                <Form.Group controlId="formFile" className="text-center">
                    <Form.Label>Upload a photo for diagnosis</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                    <Card className = "text-center">
                        <Card.Title>
                            Your Results
                            </Card.Title>

                        <Card.Body>
                            Some data about your results go here!
                        </Card.Body>
                    </Card>
        </main>
    )
}

export default DiagnosisPage;