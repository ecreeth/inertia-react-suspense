import React from 'react';
import { Inertia } from '@inertiajs/inertia';

function Application({ initialPage, resolveComponent }) {
  const [page, setPage]: any = React.useState(null);

  React.useEffect(() => {
    Inertia.init({
      initialPage,
      resolveComponent,
      updatePage: (component, props) => {
        setPage({ component, props });
      }
    });
  }, []);

  return page && React.createElement(page.component, { props: page.props });
}

export default Application;
