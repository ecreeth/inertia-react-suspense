import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import Application from '@/inertia-react/App';

const root = document.getElementById('app');
const data = JSON.parse(root.dataset.page);

ReactDOM.unstable_createRoot(root).render(
  <React.StrictMode>
    <RecoilRoot>
      <Application
        initialPage={data}
        resolveComponent={name =>
          import(`./pages/${name}`).then(module => module.default)
        }
      />
    </RecoilRoot>
  </React.StrictMode>
);
