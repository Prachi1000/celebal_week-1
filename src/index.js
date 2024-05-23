import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Infor from './Infor';
import reportWebVitals from './reportWebVitals';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';


// const approuter = createBrowserRouter([{
//   path: '/',
//   element: <App/>
// },
//   {
//     path: '/info',
//     element: <Infor/>
//   }

// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <RouterProvider router={approuter}/> */}
   <App/>
    </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
