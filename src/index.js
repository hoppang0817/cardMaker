import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import AuthService from './service/auth_service';

const authService = new AuthService();
const baseName = '/cardMaker';

ReactDOM.render(
  <React.StrictMode>
    <App baseName={baseName} authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
