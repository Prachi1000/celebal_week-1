import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Infor from './Infor';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { info } from './App';

const approuter = createBrowserRouter([{
  path: '/',
  element: <App/>
},
  {
    path: '/infor',
    element: <Infor/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={approuter}/>
   {/* <App/> */}
    </React.StrictMode>
);



reportWebVitals();
