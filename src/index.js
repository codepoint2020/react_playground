import React from 'react';
import ReactDOM from 'react-dom/client';
// import Test from './Test';
import Todo1 from './Todo1';
// import CreateElems from './CreateElems';
// import App from './App';

import './bootstrap.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todo1 />
    {/* <Test /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
