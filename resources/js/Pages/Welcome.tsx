import React from 'react';
import { useRecoilState } from 'recoil';
import { counterState } from '../services/recoil/atoms';
import Layout from '../shared/Layout';

function MainContent() {
  const [counter, setCounter] = useRecoilState(counterState);
  return (
    <div>
      <h1 className="text-xl text-white text-center font-bold">
        Counter Value: {counter}
      </h1>
      <button
        className="border border-gray-900 px-4 py-1 text-white rounded text-center"
        onClick={() => setCounter(counter + 1)}
      >
        Add +1
      </button>
    </div>
  );
}

function Welcome() {
  return (
    <Layout>
      <MainContent />
    </Layout>
  );
}

export default Welcome;
