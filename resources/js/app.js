import React, { Suspense, createElement } from 'react';
import ReactDOM from 'react-dom';
import { Inertia } from '@inertiajs/inertia';

import Aside from 'Components/Aside';
import Header from 'Components/Header';
import PageContext from '@/PageContext';
import ErrorBoundary from '@/ErrorBoundary';

const app = document.getElementById('app');

function App() {
  const [page, setPage] = React.useState({});

  React.useEffect(() => {
    Inertia.init({
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => React.lazy(() => import(`@/Pages/${name}`)),
      updatePage: (component, props, { preserveState }) => {
        setPage({
          props,
          component,
          key: preserveState ? page.key : Date.now()
        });
      }
    });
  }, []);

  if (!page.component) {
    return null;
  }

  let children = createElement(
    page.component,
    { key: page.key, props: page.props },
    null
  );

  return (
    <ErrorBoundary>
      <PageContext.Provider value={page.props}>
        <div className="font-sans m-0 antialiased leading-none">
          <Header />
          <section className="container mx-auto">
            <div className="flex w-full min-w-full rounded-sm mt-4">
              <Aside />
              <main className="p-4 w-full bg-white ml-4 font-light mb-5 rounded border border-gray-200">
                <Suspense fallback={<span>Loading...</span>}>
                  {children}
                </Suspense>
              </main>
            </div>
          </section>
        </div>
      </PageContext.Provider>
    </ErrorBoundary>
  );
}

ReactDOM.createRoot(app).render(<App />);
