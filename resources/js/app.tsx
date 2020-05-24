import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import Application from './components/InertiaApp';

const root: any = document.getElementById('app');

ReactDOM.render(
  <RecoilRoot initializeState={() => {}}>
    <Application
      initialPage={JSON.parse(root.dataset.page)}
      resolveComponent={name =>
        import(`./pages/${name}`).then(module => module.default)
      }
    />
  </RecoilRoot>,
  root
);
