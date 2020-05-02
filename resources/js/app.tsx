import React from 'react';
import ReactDOM from 'react-dom';
import { Inertia } from '@inertiajs/inertia';

import Header from './components/Header';
import Aside from './components/Aside';
import Spinner from './components/Spinner';
import PageContext from './PageContext';
import { reducer, initialState } from './reducer';

const app: HTMLDivElement | any = document.getElementById('app');

function App() {
  const initialPage = JSON.parse(app.dataset.page);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    Inertia.init({
      initialPage,
      resolveComponent: name => React.lazy(() => import(`./pages/${name}`)),
      updatePage: (component, props, { preserveState }) => {
        dispatch({
          type: 'SET_PAGE',
          page: {
            component,
            key: preserveState ? state.page.key : Date.now(),
            props
          }
        });
      }
    });
  }, []);

  let children =
    state.page.component &&
    React.createElement(state.page.component, { ...state.page });

  return (
    <PageContext.Provider value={{ ...state.page.props, state, dispatch }}>
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
