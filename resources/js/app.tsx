import React from 'react';
import ReactDOM from 'react-dom';
import { Inertia } from '@inertiajs/inertia';

import PageContext from './services/PageContext';
import { Header, Aside, Spinner } from './components';
import { reducer, initialState } from './services/reducer';

const app: any = document.getElementById('app') as HTMLElement;

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    Inertia.init({
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => React.lazy(() => import(`./pages/${name}`)),
      updatePage: (component, props) => {
        dispatch({
          type: 'SET_PAGE',
          page: {
            component,
            props
          }
        });
      }
    });
  }, []);

  return (
    <PageContext.Provider value={{ ...state, dispatch }}>
      <div className="font-sans m-0 antialiased leading-none">
        <Header />
        <section className="container mx-auto">
          <div className="flex w-full min-w-full rounded-sm mt-4">
            <Aside />
            <main className="p-4 w-full bg-white ml-4 font-light mb-5 rounded shadow-lg">
              <React.Suspense fallback={<Spinner />}>
                {state.page.component &&
                  React.createElement(state.page.component)}
              </React.Suspense>
            </main>
          </div>
        </section>
      </div>
    </PageContext.Provider>
  );
}

ReactDOM.render(<App />, app);
