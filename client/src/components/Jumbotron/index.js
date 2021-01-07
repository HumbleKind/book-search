import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Banner() {
  return (
      <Jumbotron style={{ textAlign: "center" }}>
        <h1>Google Books : Search</h1>
        <p>
          Find and Save Books of Interest
        </p>
      </Jumbotron>
  );
};

export default Banner;
