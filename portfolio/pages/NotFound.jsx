import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100 px-3" style={{ backgroundColor: '#FEE9C6' }}>
      <h1 className="display-3 fw-bold">Hey Developers and Debuggers</h1>
      <h2 className="fs-3 mb-3">How is your programming journey so far?</h2>
      <p className="fs-4 mb-4">
        Let’s return back to the homepage.
      </p>
      <Link 
        to="/" 
        className="btn text-decoration-none text-body text-dark fw-medium d-flex justify-content-center mt-1 mb-4 mb-lg-3 py-2 px-3 px-lg-4 fs-5"
        style={{ borderRadius: '15px', backgroundColor: '#FFF', boxShadow: '5px -5px 0px black, -5px 5px 0px black',}}
      >
        BACK
      </Link>
    </div>
  );
}

export default NotFound;