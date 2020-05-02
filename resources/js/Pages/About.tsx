import React from 'react';

const About = props => {
  return (
    <div>
      <h1 className="text-xl text-black text-center font-bold">About</h1>
      <p>{props.foo}</p>
    </div>
  );
};

export default About;
