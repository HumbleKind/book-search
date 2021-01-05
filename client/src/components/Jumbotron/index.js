import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Banner() {
  return (
      <Jumbotron style={{ textAlign: "center" }}>
        <h1>(React) Google Books Search</h1>
        <p>
          Search for and Save Books of Interest
        </p>
      </Jumbotron>
  );
};

export default Banner;
