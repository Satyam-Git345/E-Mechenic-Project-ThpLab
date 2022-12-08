import React from 'react';

import ReactDOM from 'react-dom/client';
// import './index.css';
import 'antd/dist/reset.css';
import './App.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"/>




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <BrowserRouter>
            <App/>
      </BrowserRouter>
  </React.StrictMode>
);
