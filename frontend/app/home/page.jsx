'use client'
import React from 'react';
import Navigation from '../components/nav';
import './home.css';


function HomePage() {
  return (
    <main>
      <Navigation />

      <div className="container">
        <div className="header">
          <h1>Hello, Alex <img src="SkinLensLogo.jpg" width="25" height="25" alt="logo" /></h1>
        </div>

        <div className="button-container">
          <a href="diagnosis" className="button">Get a Diagnosis</a>
          <a href="doctors/contact" className="button">Contact Doctor</a>
          <a href="log/progression" className="button">Log</a>
        </div>
        <div className="med-container">
  <h2>Your current medications</h2>
  <div className="med-item">
    <img src="meds.png" width="50" height="50" alt="meds" />
    <span>Vismodegib</span>
  </div>
  <div className="med-item">
    <img src="moisturizer.png" width="50" height="50" alt="moisturizer" />
    <span>Fluorouracil</span>
  </div>
</div>

        <div className="notes-container">
          <h2>Recent Doctor's Recommendations and Notes</h2>
          <div className="card">
  <div className="note-button-container">
    <button className="note-button">Notes from Dr. Mensah T.</button>
  </div>
  <p>
              Hello Alex,<br /> <br />
              As I mentioned in the appointment, your mole had some irregularities in shape and color, which should be monitored closely.
              I recommend scheduling another in-person evaluation within the next 2 weeks to ensure everything is thoroughly assessed.
              In the meantime, you should continue taking the medication I prescribed.<br /> <br />
              Best regards,<br />
              Dr. Mensah T.
            </p>
</div>

        </div>
      </div>
    </main>
  );
}

export default HomePage;
