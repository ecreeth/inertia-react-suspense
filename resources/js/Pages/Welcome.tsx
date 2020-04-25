import React, { useState } from 'react';

function Welcome(props) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className="text-xl text-black text-center font-bold">
        Welcome: {counter}
      </h1>
      <button
        className="border px-4 py-1 rounded text-center"
        onClick={() => setCounter(counter + 1)}
      >
        Add +
      </button>
    </div>
  );
}

export default Welcome;
