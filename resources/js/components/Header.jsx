import React from 'react';
import Link from '@/Link';
import PageContext from '@/PageContext';

const links = [
  { id: 1, url: '/', name: 'Home' },
  {
    id: 2,
    url: '/about',
    name: 'About',
    icon: 'ios-information-circle-outline'
  },
  { id: 3, url: '/contact', name: 'Contact' }
];

export default () => {
  const { page } = React.useContext(PageContext);
  return (
    <header>
      <nav className="bg-white border-b">
        <div className="container mx-auto flex items-center justify-between py-4 pl-1">
          <div>
            <a
              href="#"
              className="block flex items-center font-extrabold text-gray-700"
            >
              <img
                src="https://raw.githubusercontent.com/ecreeth/tailwind-admin/master/logo.jpg"
                className="h-10"
                alt="Logo"
              />
              eCreeth: {page}
            </a>
          </div>
          <div className="hidden w-full flex-grow lg:flex justify-end lg:items-center lg:w-auto uppercase font-light">
            {links.map(link => (
              <Link
                key={link.id}
                href={link.url}
                className="text-gray-800 text-sm hover:text-blue-600 mr-5 cursor-pointer"
              >
                <span>#&nbsp;</span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
