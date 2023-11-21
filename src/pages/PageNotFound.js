import React from 'react';
import { NavLink } from 'react-router-dom';

function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <h2>
        Go Back <NavLink to="/">Home</NavLink>
      </h2>
    </div>
  );
}

export default PageNotFound;
