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
 
    <div className="container" style={{ paddingTop: '20px' }}>
       
        <Container>
          <Row>
            <Col xs = {3} md = {4} lg = {6}>
            <h1 style={{ color: '#84ACA9' }} >Hello, name {' '}
              <Image src="SkinLensLogo.png" width = "100" height = "100" roundedCircle style={{ marginLeft: '20px' }} />
            </h1>
            </Col>
          </Row>
        </Container>
    </div>
    <div style={{textAlign: 'center'}}>
          <Button href="Log" size="lg" style={{ backgroundColor: '#84ACA9', borderRadius: '50px'}} >Log</Button> {' '}
          <Button as="input" type="submit" value="Contact Doctor" size="lg" style={{ backgroundColor: '#84ACA9', borderRadius: '50px' }} />{' '}
          <Button href="diagnosis" size="lg" style={{ backgroundColor: '#84ACA9', borderRadius: '50px' }} >Get a Diagnosis</Button> 
    </div>

    <div style={{ paddingTop: '50px', textAlign: 'center' }}>
        <h2 style={{fontSize: '24px'}}>Your current routine</h2>
        <div style={{ color: 'silver', marginBottom: '20px', fontSize: '20px' }}>
          <span>AM </span>
          <span style={{ marginRight: '10px' }}>⬤</span>
          <span style={{ marginRight: '10px' }}>⬤</span>
          <span style={{ marginRight: '10px' }}>⬤</span>
          <span>⬤</span>
        </div>
        <div style={{ color: '#84ACA9', marginBottom: '30px', fontSize: '20px' }}>
          <span>PM </span>
          <span style={{ marginRight: '10px' }}>⬤</span>
          <span style={{ marginRight: '10px' }}>⬤</span>
          <span style={{ marginRight: '10px' }}>⬤</span>
          <span>⬤</span>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2 style={{fontSize: '24px'}}>Your current medications</h2>
        <div>
          <Image src="meds.png" width="50" height="50" roundedCircle />
          <span style={{ marginLeft: '20px', fontSize: '20px', color: 'black' }}> text here</span>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Image src="moisturizer.png" width="50" height="50" roundedCircle />
          <span style={{ marginLeft: '20px', fontSize: '20px', color: 'black' }}>text here </span>
        </div>
      </div>


    <div style={{ paddingTop: '20px', textAlign: 'center' }}>
    <h2 style={{fontSize: '24px'}}>Recent Doctor's Recommendations and Notes</h2>
      <Card className="text-center" style={{ width: '500px', height: '300px', margin: '0 auto', backgroundColor: '#84ACA9', color: 'black'}}>
        <Card.Body style = {{color: 'white'}}>
          <Card.Title></Card.Title>
          <div style={{ marginBottom: '20px' }}>
              <Button variant="outline-dark" size="sm" style={{ borderRadius: '20px', marginRight: '10px' }}>Notes from Dr Sam</Button>
              <p style={{ textAlign: 'left' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum augue odio, eget tempus ipsum pretium nec. Duis eget ante vel elit posuere volutpat nec non magna.
              </p>
            </div>
            <div>
              <Button variant="outline-dark" size="sm" style={{ borderRadius: '20px', marginRight: '10px' }}>Action items</Button>
              <ul style={{ textAlign: 'left', marginTop: '10px' }}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
        </Card.Body>
    </Card>
    </div>


    </main>
  );
}

export default HomePage;
