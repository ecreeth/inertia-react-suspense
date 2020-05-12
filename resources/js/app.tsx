import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { Inertia } from '@inertiajs/inertia';

import { PageProvider } from './services/PageContext';
import { Header, Aside, Spinner } from './components';
import { reducer, initialState } from './services/reducer';

const app: any = document.getElementById('app');

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    Inertia.init({
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => React.lazy(() => import(`./pages/${name}`)),
      updatePage: (component, props) => {
        dispatch({
          type: 'SET_PAGE',
          component,
          props
        });
      }
    });
  }, []);

  return (
    <PageProvider value={{ ...state, dispatch }}>
      <div className="font-sans m-0 antialiased leading-none dark:bg-gray-600">
        <Header />
        <section className="container mx-auto">
          <div className="flex w-full min-w-full rounded-sm mt-4">
            <Aside />
            <main className="p-4 w-full bg-white dark:bg-gray-800 ml-4 font-light mb-5 rounded shadow-lg">
              <React.Suspense fallback={<Spinner />}>
                {state.component && React.createElement(state.component)}
              </React.Suspense>
            </main>
          </div>
        </section>
      </div>
    </PageProvider>
  );
}

ReactDOM.render(<App />, app);
