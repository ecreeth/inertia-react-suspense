import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Inertia } from '@inertiajs/inertia';
import { currentComponent, pageProps } from '../services/recoil/atoms';
import { Spinner } from '../components/index';

function MainContent({ initialPage, resolveComponent }) {
  const [page, setPage]: any = useRecoilState(currentComponent);
  const setPageProps: any = useSetRecoilState(pageProps);

  React.useEffect(() => {
    Inertia.init({
      initialPage,
      resolveComponent,
      updatePage: (component, props) => {
        setPage({ component });
        setPageProps({ props });
      }
    });
  }, []);

  return (
    page && (
      <React.Suspense fallback={<Spinner />}>
        {React.createElement(page.component)}
      </React.Suspense>
    )
  );
}
export default MainContent;
