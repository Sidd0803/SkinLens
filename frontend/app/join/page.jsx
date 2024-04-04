import React from 'react';
import './page.modules.css';

function JoinPage() {
  return (
    <div className="container">
      <h1>Create Account</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="skinProblems">Current Skin Problems:</label>
        <textarea id="skinProblems" name="skinProblems"></textarea>

        <label htmlFor="skincare">Current Skincare Routine:</label>
        <textarea id="skincare" name="skincare"></textarea>

        <label htmlFor="medications">Current Medications:</label>
        <textarea id="medications" name="medications"></textarea>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default JoinPage;
