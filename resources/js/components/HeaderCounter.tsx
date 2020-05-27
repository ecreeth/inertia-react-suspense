import React from 'react';
import { useRecoilValue } from 'recoil';
import { counterState } from '../services/recoil/atoms';

export default React.memo(function HeaderCounter() {
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
});
