'use client'
import React from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Navigation from "../components/nav";

// 84ACA9

function DiagnosisPage(){

    return(
        <main>
        <Navigation/>
        <div class = 'border-0'>

                <Card className="text-center border-0">
                
                    <Card.Body>
                        <Image src="banana.jpg"xs = {2} md = {2} xl = {1} width={400} height={350} rounded/> 
                    </Card.Body>
                </Card>

                <div className="text-center col-xs-2 border-0">
                <Form.Group controlId="formFile" className="col-xs-2 border-0" style={{ width: '400px', margin: '0 auto' }}>
                    <Form.Label>Upload a photo for diagnosis</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                </div>

                    <Card className = "text-center border-0">
                        <Card.Title>
                            Your Classification Results
                        </Card.Title>

                        <Card.Body>
                        <div style={{ width: '400px', 
                                      height: '300px', 
                                      backgroundColor: '#84ACA9', 
                                      margin: '0 auto', display: 'flex', 
                                      justifyContent: 'center', 
                                      alignItems: 'center', 
                                      borderRadius: '10px'}}>
                       Loading results.....
                      </div>
                        </Card.Body>
                    </Card>
        </div>
        </main>

    )
}

export default DiagnosisPage;