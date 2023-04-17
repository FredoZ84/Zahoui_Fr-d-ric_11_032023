import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './Header'
import Slogan from './Slogan'
import Gallery from './Gallery'
import Footer from "./Footer"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
      <Slogan />
      <Gallery />
      <Footer />
  </React.StrictMode>
)