import React from 'react';

function LoginLayout({ children }) {
  return (
    <div className="font-sans m-0 antialiased leading-none bg-gray-600">
      <section className="container mx-auto">
        <div className="flex w-full min-w-full rounded-sm mt-4">
          <main className="p-4 w-full bg-gray-800 ml-4 font-light mb-5 rounded shadow-lg">
            {children}
          </main>
        </div>
      </section>
    </div>
  );
}

export default LoginLayout;
