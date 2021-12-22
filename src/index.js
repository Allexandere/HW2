import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';

import "./styles/variables.css"
import "./styles/fonts.css";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

