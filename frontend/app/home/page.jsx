'use client'
import React from 'react';
import Navigation from '../components/nav';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function HomePage() {
  // Fake data for current routine and products


  return (
    <main >
    <Navigation/>
 
    <div className="container" style={{ paddingTop: '70px' }}>
       
        <Container>
          <Row>
            <Col lg = {6}>
            <h1 style={{ color: '#84ACA9'}} >Hello, Alex {' '}
              <Image src="SkinLensLogo.jpg" width = "50" height = "50" roundedCircle style={{ marginLeft: '20px'}} />
            </h1>
            </Col>
          </Row>
        </Container>
    </div>
    <div style={{textAlign: 'center'}}>
          <Button href="diagnosis" size="m" style={{ backgroundColor: '#84ACA9', borderRadius: '50px' }} >Get a Diagnosis</Button>{' '} 
          <Button href="doctors/contact" size="m" style={{ backgroundColor: '#84ACA9', borderRadius: '50px'}} >Contact Doctor</Button>{' '}
          <Button href="log/progression" size="m" style={{ backgroundColor: '#84ACA9', borderRadius: '50px'}} >Log</Button> 
    </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2 style={{fontSize: '24px'}}>Your current medications</h2>
        <div>
          <Image src="meds.png" width="50" height="50" roundedCircle />
          <span style={{ marginLeft: '20px', fontSize: '20px', color: 'black' }}> Vismodegib</span>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Image src="moisturizer.png" width="50" height="50" roundedCircle />
          <span style={{ marginLeft: '20px', fontSize: '20px', color: 'black' }}>Fluorouracil </span>
        </div>
      </div>


    <div style={{ paddingTop: '20px', textAlign: 'center' }}>
    <h2 style={{fontSize: '24px'}}>Recent Doctor's Recommendations and Notes</h2>
      <Card className="text-center" style={{ width: '400px', height: '500px', margin: '0 auto', backgroundColor: '#84ACA9', color: 'black'}}>
        <Card.Body style = {{color: 'white'}}>
          <Card.Title></Card.Title>
          <div style={{ marginBottom: '20px' }}>
              <Button variant="outline-dark" size="sm" style={{ borderRadius: '20px', marginRight: '10px' }}>Notes from Dr. Bellamy N</Button>
              <p style={{ textAlign: 'left' }}>
              Hello Alex,
              Thank you for sending over the picture of your mole. From the initial observation, it appears to have some irregularities in shape and color, which we should examine more closely. I recommend scheduling a detailed in-person evaluation to ensure everything is thoroughly assessed. Please use our app to book an appointment at your earliest convenience. It's important we address this soon to determine the appropriate next steps.
    
              Best regards, Dr. Bellamy N
              </p>
            </div>
        </Card.Body>
    </Card>
    </div>


    </main>
  );
}

export default HomePage;
