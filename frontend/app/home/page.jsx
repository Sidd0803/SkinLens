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
            <h1>Hello, name {' '}
              <Image src="SkinLensLogo.png" width = "100" height = "100" roundedCircle/>
            </h1>
            </Col>
          </Row>
        </Container>
    </div>
    <div style={{textAlign: 'center'}}>
          <Button href="Log" size="lg" >Log</Button> {' '}
          <Button as="input" type="submit" value="Contact Doctor" size="lg" />{' '}
          <Button href="diagnosis" size="lg" >Get a Diagnosis</Button> 
    </div>
    <div style={{ paddingTop: '20px', textAlign: 'center' }}>
      <Card className="text-center" style={{ width: '200px', height: '200px', margin: '0 auto'}}>
        <Card.Body>
          <Card.Title>Recent Doctor's Recommendations and Notes</Card.Title>
           <Card.Text>
          some recs and advice here
          </Card.Text>
        </Card.Body>
    </Card>
    </div>


    </main>
  );
}

export default HomePage;
