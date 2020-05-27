import React from 'react';
import { Inertia } from '@inertiajs/inertia';

function Application({ initialPage, resolveComponent }) {
  const [page, setPage]: any = React.useState(null);

  React.useEffect(() => {
    Inertia.init({
      initialPage,
      resolveComponent,
      updatePage: (component, props, { preserveState }) => {
        setPage({
          component,
          props,
          key: preserveState ? page.key : Date.now()
        });
      }
    });
  }, [initialPage, resolveComponent]);

  if (!page) {
    return null;
  }

  return React.createElement(page.component, {
    props: page.props,
    key: page.key
  });
}

export default Application;
