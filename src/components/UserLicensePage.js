// src/components/UserLicensePage.js
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // Reuse the styling from ProductForm

const UserLicensePage = () => {
  const [licenseKey, setLicenseKey] = useState('');

  const handleActivateLicense = async () => {
    try {
      const response = await axios.post('http://localhost:5000/licenses/activate', {
        key: licenseKey,
      });
      console.log('License activated:', response.data);
    } catch (error) {
      console.error('Error activating license:', error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Activate License</h2>
      <form onSubmit={handleActivateLicense}>
        <label>License Key:</label>
        <input type="text" value={licenseKey} onChange={(e) => setLicenseKey(e.target.value)} />

        <button type="submit">Activate License</button>
      </form>

      <h2>Activated Licenses</h2>
      {/* Display activated licenses */}
    </div>
  );
};

export default UserLicensePage;
