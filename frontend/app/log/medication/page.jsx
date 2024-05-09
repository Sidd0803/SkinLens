'use client'
import React, { useState } from 'react';
import Navigation from '../../components/nav';
import styles from './page.modules.css'; // Assuming CSS Modules are being used correctly
import { Stack, Button, Card } from 'react-bootstrap';

function LogPage() {
  const [showNotes, setShowNotes] = useState(false);

  const toggleNotes = () => {
    setShowNotes(!showNotes);
  };

  return (
    <div className={styles.pageContainer}>
      <Navigation />
      <h1 className="titleStyle">My Data Logs</h1>
      <h1 className="titleStyle2">Current Medications</h1>
      <div className="p-2" style={{ marginBottom: '20px', minHeight: '200px' }}>
        {!showNotes && (
          <Button variant="primary" onClick={toggleNotes}>Notes</Button>
        )}
        {showNotes && (
          <Card style={{ width: '20rem', marginTop: '10px', backgroundColor: '#84ACA9' }}>
            <Card.Body>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Card.Title className="titleStyle3">Notes</Card.Title>
                <Button
                  variant="link"
                  style={{
                    padding: '0',
                    marginRight: 'auto',
                    color: 'gray',
                    fontSize: '1rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textDecoration: 'none'
                  }}
                  onClick={toggleNotes}
                >
                  x
                </Button>
              </div>
              <textarea 
                className="form-control"
                placeholder="Type your notes here..."
                rows="5"
              ></textarea>
            </Card.Body>
          </Card>
        )}
      </div>
      <div className="p-2" style={{ marginBottom: '20px', minHeight: '225px' }}>  
        <Button variant="primary">
          <a href="/log/progression" style={{ textDecoration: 'none', color: 'inherit' }}>My Skin Concerns</a>
        </Button>
      </div>
    </div>
  );
}

export default LogPage;
