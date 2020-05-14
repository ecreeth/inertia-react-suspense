import React from 'react';
import { useRecoilState } from 'recoil';
import { counterState } from '../services/atom/index';

const Welcome = () => {
  const [counter, setCounter] = useRecoilState(counterState);
  return (
    <div>
      <h1 className="text-xl dark:text-white text-center font-bold">
        Counter Value: {counter}
      </h1>
      <button
        className="border dark:border-gray-900 px-4 py-1 dark:text-white rounded text-center"
        onClick={() => setCounter(counter + 1)}
      >
        Add +1
      </button>
    </div>
  );
};

export default Welcome;
