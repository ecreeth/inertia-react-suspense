import React from 'react';
import { usePageContext } from '../services/PageContext';

const Welcome = () => {
  const { counter, dispatch } = usePageContext();
  return (
    <div>
      <h1 className="text-xl dark:text-white text-center font-bold">
        Counter Value: {counter}
      </h1>
      <button
        className="border dark:border-gray-900 px-4 py-1 dark:text-white rounded text-center"
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
       Add +1
      </button>
    </div>
  );
};

export default Welcome;
