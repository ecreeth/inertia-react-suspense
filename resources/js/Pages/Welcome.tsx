import React from 'react';
import PageContext from '../PageContext';

function Welcome(props) {
  const { state, dispatch } = React.useContext(PageContext);
  return (
    <div>
      <h1 className="text-xl text-black text-center font-bold">
        Welcome: {state.counter}
      </h1>
      <button
        className="border px-4 py-1 rounded text-center"
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        Add +
      </button>
    </div>
  );
}

export default Welcome;