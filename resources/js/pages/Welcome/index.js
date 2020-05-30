import React, { Suspense } from 'react';
import Layout from '@/shared/layouts/Admin';
const MainContent = React.lazy(() => import('./MainContent'));

function Welcome() {
  return (
    <Layout>
      <Suspense fallback={<span>Loading...</span>}>
        <MainContent />
      </Suspense>
    </Layout>
  );
}

export default Welcome;
