'use client'
import React, { useState } from 'react';
import Navigation from '../components/nav';
import './page.modules.css'
import { Stack, Button, Card } from 'react-bootstrap';


function LoginPage() {
  const [showCards, setShowCards] = useState({
    card1: false,
    card2: false,
    card3: false
  });

  const toggleCard = (cardKey) => {
    setShowCards(prevState => ({
      ...prevState,
      [cardKey]: !prevState[cardKey]
    }));
  };


  return (
    <div> 
      <Navigation/>
      <Stack direction="vertical" gap={3}>
        <div className="p-2">
        <Button variant="primary" onClick={() => toggleCard('card1')}>Note 1</Button>
          {showCards.card1 && (
            <Card style={{ width: '18rem', marginTop: '20px' }}>
              <Card.Body>
                <Card.Title>Note 1</Card.Title>
                <textarea 
                  className="form-control" // Bootstrap class for styling
                  placeholder="Type your notes here..."
                  rows="5" // Adjust the number of rows as needed
                ></textarea>
              </Card.Body>
            </Card>
          )}
        </div>
        <div className="p-2">
        <Button variant="primary" onClick={() => toggleCard('card2')}>Note 2</Button>
          {showCards.card2 && (
            <Card style={{ width: '18rem', marginTop: '20px' }}>
              <Card.Body>
                <Card.Title>Note 2</Card.Title>
                <textarea 
                  className="form-control" // Bootstrap class for styling
                  placeholder="Type your notes here..."
                  rows="5" // Adjust the number of rows as needed
                ></textarea>
              </Card.Body>
            </Card>
          )}
        </div>
        <div className="p-2">
        <Button variant="primary" onClick={() => toggleCard('card3')}>Note 3</Button>
          {showCards.card3 && (
            <Card style={{ width: '18rem', marginTop: '20px' }}>
              <Card.Body>
                <Card.Title>Note 3</Card.Title>
                <textarea 
                  className="form-control" // Bootstrap class for styling
                  placeholder="Type your notes here..."
                  rows="5" // Adjust the number of rows as needed
                ></textarea>
              </Card.Body>
            </Card>
          )}
        </div>
      </Stack>
    </div>
  );
}

export default LoginPage;


{/* <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Notes</Card.Title>
          <textarea 
          className="form-control" // Bootstrap class for styling
          placeholder="Type your notes here..."
          rows="5" // Adjust the number of rows as needed
        ></textarea>
        </Card.Body>
      </Card>   */}