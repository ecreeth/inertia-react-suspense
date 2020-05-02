import React from 'react';
import ReactDOM from 'react-dom';
import { Inertia } from '@inertiajs/inertia';

import Header from './components/Header';
import Aside from './components/Aside';
import Spinner from './components/Spinner';
import PageContext from './PageContext';

const app: HTMLDivElement | any = document.getElementById('app');

function App() {
  const initialPage = JSON.parse(app.dataset.page);
  const [counter, setCounter] = React.useState(0);
  const [page, setPage]: any = React.useState({
    component: null,
    key: null,
    props: {}
  });

  React.useEffect(() => {
    Inertia.init({
      initialPage,
      resolveComponent: name => React.lazy(() => import(`./pages/${name}`)),
      updatePage: (component, props, { preserveState }) => {
        setPage({
          component,
          key: preserveState ? page.key : Date.now(),
          props
        });
      }
    });
  }, []);

  let children =
    page.component && React.createElement(page.component, { ...page });

  return (
    <PageContext.Provider value={{ ...page.props, counter, setCounter }}>
      <div className="font-sans m-0 antialiased leading-none">
        <Header />
        <section className="container mx-auto">
          <div className="flex w-full min-w-full rounded-sm mt-4">
            <Aside />
            <main className="p-4 w-full bg-white ml-4 font-light mb-5 rounded shadow-lg">
              <React.Suspense fallback={<Spinner />}>{children}</React.Suspense>
            </main>
          </div>
        </section>
      </div>
    </PageContext.Provider>
  );
}

ReactDOM.render(<App />, app);
