import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import { Header, Aside, MainContent } from './components/index';

const app: any = document.getElementById('app');

function App() {
  return (
    <RecoilRoot initializeState={() => {}}>
      <div className="font-sans m-0 antialiased leading-none bg-gray-600">
        <Header />
        <section className="container mx-auto">
          <div className="flex w-full min-w-full rounded-sm mt-4">
            <Aside />
            <main className="p-4 w-full bg-gray-800 ml-4 font-light mb-5 rounded shadow-lg">
              <MainContent
                initialPage={JSON.parse(app.dataset.page)}
                resolveComponent={name =>
                  React.lazy(() => import(`./pages/${name}`))
                }
              />
            </main>
          </div>
        </section>
      </div>
    </RecoilRoot>
  );
}

ReactDOM.render(<App />, app);
