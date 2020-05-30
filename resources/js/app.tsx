// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import Application from './inertia-react/App';

const root: any = document.getElementById('app');
const data: any = JSON.parse(root.dataset.page);

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Application
        initialPage={data}
        resolveComponent={name =>
          import(`./pages/${name}`).then(module => module.default)
        }
      />
    </RecoilRoot>
  </React.StrictMode>,
  root
);
