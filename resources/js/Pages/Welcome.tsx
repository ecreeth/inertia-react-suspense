import React from 'react';
import { usePageContext } from '../services/PageContext';

const Welcome = () => {
  const { counter, dispatch } = usePageContext();
  return (
    <div>
      <h1 className="text-xl text-black text-center font-bold">
        Welcome: {counter}
      </h1>
      <button
        className="border px-4 py-1 rounded text-center"
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        Add +
      </button>
    </div>
  );
};

export default Welcome;
