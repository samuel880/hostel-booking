import React, { useState } from 'react';
import './UserProfile.css';
const UserProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to save the profile data to a database or perform any other actions.
    console.log('Profile Submitted:', formData);
  };

  return (
    <div className='userprofile'>
      <h2>Create Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Bio:
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Create Profile</button>
      </form>

      {formData.name && (
        <div>
          <h2>Your Profile</h2>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Bio:</strong> {formData.bio}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;