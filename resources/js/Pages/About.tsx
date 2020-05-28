import React from 'react';
import Layout from '../shared/layouts/Admin';

function About() {
  console.log('Render [About] Page');
  return (
    <Layout>
      <div>
        <h1 className="text-xl text-white text-center font-bold">About</h1>
      </div>
    </Layout>
  );
}

export default About;
