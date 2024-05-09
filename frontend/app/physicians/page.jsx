import React from 'react';
import Navigation from '../components/nav';
import './page.modules.css';

function MyPhysicians() {
  const physicians = [
    {
      name: "Dr. Bellamy N",
      specialty: "Dermatologist",
      reviews: 135,
      rating: 4.5,
      image: "Doc1.jpg",  // Manually specifying the image path
      note: "Hi [name], I've been looking at your progress pictures for the moles on the palm of your left hand. I suspect that there is something there we need to look into further. I suggest you send a message to your oncologist and then schedule a follow up with me afterwards."
    },
    {
      name: "Dr. Mensah T",
      specialty: "Oncologist",
      reviews: 130,
      rating: 4.3,
      image: "Doc2.jpg",  // Manually specifying the image path
      note: "Please review your recent lab results carefully and contact me to discuss your treatment options. It's important we address these findings promptly to adjust your treatment plan if necessary. Your health and timely care are my utmost priority."
    }
  ];

  return (
    <div className="page-container">
      <Navigation />
      <div className="physicians-container">
        <h2 className="page-title">My Physicians</h2>
        {physicians.map((physician) => (
          <div key={physician.name} className="physician-card">
            <div className="physician-info">
              <img src={physician.image} alt={`${physician.name}`} className="physician-photo" />
              <div className="physician-details">
                <h3>{physician.name}</h3>
                <p>{physician.specialty}</p>
                <p>{`${physician.rating} (${physician.reviews} reviews)`}</p>
                <div className="physician-actions">
                  <button className="button">Schedule an appointment</button>
                  <button className="button">Send a message</button>
                </div>
              </div>
            </div>
            {physician.note && (
              <div className="physician-note">
                <label>New note</label>
                <p>{physician.note}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPhysicians;
