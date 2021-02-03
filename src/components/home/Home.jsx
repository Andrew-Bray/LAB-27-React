import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>This is my home page</h2>
      <h3> Why don't you go to 
        <Link to="/list"> my collection of x-files characters?</Link>
      </h3>
    </div>
  );
};

export default Home;


