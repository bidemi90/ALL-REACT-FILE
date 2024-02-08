import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './component/Main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import reportWebVitals from './reportWebVitals';
import Youtubenav from './component/Youtubenav';
import Youtubeaside from './component/Youtubeaside';
import Youtubeshowthevideo from './component/Youtubeshowthevideo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
   <>
    <BrowserRouter>
    <Youtubenav />
    <Youtubeaside />
    <App />
    </BrowserRouter>
   </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
