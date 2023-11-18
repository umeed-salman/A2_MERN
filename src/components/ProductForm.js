// src/components/ProductForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // Create this file to add some basic styling to the form

const ProductForm = () => {
  const [name, setName] = useState('');
  const [version, setVersion] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('http://localhost:5000/products/add', {
        name,
        version,
        description,
      });
      console.log('Product added:', response.data);
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleAddProduct}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Version:</label>
        <input type="text" value={version} onChange={(e) => setVersion(e.target.value)} />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
