import React from 'react';
import Navigation from '../components/nav';


function HomePage() {
  // Fake data for current routine and products


  return (
    <main >
    <Navigation/>
 
    <div className="container">
       
        
      <h1>Welcome to Your Skin Care Management App</h1>

    <div>
      <p>
      Log New Skincare, Medication, or Progress <button className="log-button" href = "/log">Log</button>
      </p>
      </div>

      <section>
        <h2>Your Current Routine and Products</h2>
        <ul>
          {currentRoutine.map((item, index) => (
            <li key={index}>
              <strong>{item.product}</strong> - {item.timeOfDay}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Your Most Recent Progress Pictures</h2>
        <div className="progress-pictures">
          {progressPictures.map((pic, index) => (
            <div key={index} className="progress-picture">
              <img src={pic.image} alt={`Progress ${index + 1}`} />
              <p>Date: {pic.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>


    </main>
  );
}

export default HomePage;
