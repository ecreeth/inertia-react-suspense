import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { Inertia } from '@inertiajs/inertia';
import Application from './components/InertiaApp';

const root: any = document.getElementById('app');
const data: any = JSON.parse(root.dataset.page);

function MainLayout({ resolveComponent, children, initialPage }) {
  const [page, setPage]: any = React.useState(null);
  const { layout } = initialPage.props;

  React.useEffect(() => {
    Inertia.init({
      initialPage: { component: layout, props: {}, version: null },
      resolveComponent,
      updatePage: (component, props) => {
        console.log('render MainLayout');
        setPage({ component, props });
      }
    });
  }, []);

  return (
    page &&
    React.createElement(page.component, {
      props: page.props,
      children: children
    })
  );
}

function App() {
  return (
    <RecoilRoot initializeState={() => {}}>
      <MainLayout
        initialPage={data}
        resolveComponent={name => require(`./shared/layouts/${name}`).default}
      >
        <Application
          initialPage={data}
          resolveComponent={name =>
            import(`./pages/${name}`).then(module => module.default)
          }
        />
      </MainLayout>
    </RecoilRoot>
  );
}

ReactDOM.render(<App />, root);
