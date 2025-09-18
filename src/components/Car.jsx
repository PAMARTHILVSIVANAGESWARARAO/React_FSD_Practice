import React from 'react';
import './Car.css';

function Car(props) {
  return (
    <div className="car-box">
      <h1>Car Component Using Props</h1>
      <h2>I am a {props.brand}!</h2>
    </div>
  );
}

export default Car;
