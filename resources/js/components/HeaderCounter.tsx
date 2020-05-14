import React from 'react';
import { useRecoilValue } from 'recoil';
import { counterState } from '../services/recoil/atoms';

function HeaderCounter() {
  const counter = useRecoilValue(counterState);

  return (
    <div>
      <a
        href="#"
        className="block flex items-center font-extrabold text-gray-100"
      >
        Counter Value: {counter}
      </a>
    </div>
  );
}

export default HeaderCounter;
