import React from 'react';
import { Link } from '@ecreeth/inertia-react';

const menus = [
  {
    id: 1,
    title: 'Configuraciones',
    links: [
      { id: 1, url: '/config/users', name: 'Pages' },
      { id: 2, url: '/config/users', name: 'Users' },
      { id: 3, url: '/config/users', name: 'Products' },
      { id: 4, url: '/config/users', name: 'Articles' },
      { id: 5, url: '/config/users', name: 'Categories' },
      { id: 6, url: '/config/users', name: 'Multimedia' }
    ]
  },
  {
    id: 3,
    title: 'Subscripciones',
    links: [
      { id: 7, url: '/config/users', name: 'Planes' },
      { id: 8, url: '/config/users', name: 'Invoices' },
      { id: 9, url: '/config/users', name: 'Information' }
    ]
  }
];

const Aside = () => (
  <div className="w-1/4 md:w-2/6 h-full bg-gray-800 rounded font-light mb-5">
    <div className="bg-gray-900 h-10 rounded m-3 mb-4" />
    {menus.map(menu => (
      <div className="mb-5" key={menu.id}>
        <div className="border-t border-b border-gray-900">
          <div className="text-white font-light uppercase text-sm py-5 px-5">
            {menu.title}
          </div>
        </div>

        {menu.links.map(link => (
          <Link
            key={link.id}
            href={link.url}
            className="text-white block py-3 px-5"
          >
            <div className="text-white">
              <span>#&nbsp;</span>
              {link.name}
            </div>
          </Link>
        ))}
      </div>
    ))}
  </div>
);

export default Aside;
