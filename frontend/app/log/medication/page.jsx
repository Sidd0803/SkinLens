'use client'
import React, { useState } from 'react';
import Navigation from '../../components/nav';
import styles from './page.modules.css'; // Assuming CSS Modules are being used correctly
import { Stack, Button, Card } from 'react-bootstrap';


function LogPage() {
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
    <div className={styles.pageContainer}> {/* Added CSS Module class here */}
      <Navigation/>
      <h1 className="titleStyle">My Data Logs</h1>
      <h1 className="titleStyle2">Current Medications</h1>
      <div className="p-2" style={{ marginBottom: '20px', minHeight: '200px' }}>  
        {!showCards.card1 && (
            <Button variant="primary" onClick={() => toggleCard('card1')}>Notes</Button>
          )}
          {showCards.card1 && (
            <Card style={{ width: '20rem', marginTop: '10px', backgroundColor: '#84ACA9', display: showCards.card1 ? 'block' : 'none' }}>
              <Card.Body>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '175%'}}>
              <Card.Title className="titleStyle3" style={{ flexShrink: 1, maxWidth: '85%' }}>Notes</Card.Title>
                <Button
                      variant="link"
                      style={{
                        padding: '0',
                        marginRight: 'auto', 
                        color: 'gray',
                        fontSize: '1rem',
                        backgroundColor: 'transparent',  // Ensures the background is transparent
                        border: 'none',  // Removes any border
                        textDecoration: 'none'  // Removes underline from the link
                      }}
                      onClick={() => toggleCard('card1')}
                    >
                    x
                    </Button>
                </div>
                <textarea 
                  className="form-control" // Bootstrap class for styling
                  placeholder="Type your notes here..."
                  rows="5" // Adjust the number of rows as needed
                ></textarea>
              </Card.Body>
            </Card>
          )}
        </div>
        <h1 className="titleStyle2">Current Skin Concerns</h1>
        <div className="p-2" style={{ marginBottom: '20px', minHeight: '225px' }}>  
        <Button variant="primary">add skin concern</Button>
        </div>
    </div>
  );
}

export default LogPage;