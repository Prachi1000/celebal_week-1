import React from 'react'
// import { info } from './App';
import { useLocation } from 'react-router-dom';

const Infor = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <h1>Another Page</h1>
      {state && (
        <div>
          <p>Name: {state.name}</p>
          <p>Email: {state.email}</p>
        </div>
      )}
    </div>
  );
}

export default Infor;


