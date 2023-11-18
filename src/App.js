// src/App.js
import React from 'react';
import ProductForm from './components/ProductForm';
import UserLicensePage from './components/UserLicensePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>License Manager</h1>
      <ProductForm />
      <UserLicensePage />
    </div>
  );
}

export default App;
