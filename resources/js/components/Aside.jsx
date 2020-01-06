import React from 'react';

const menus = [
  {
    id: 1,
    title: 'Configuraciones',
    links: [
      'Pages',
      'Users',
      'Products',
      'Articles',
      'Categories',
      'Multimedia'
    ]
  },
  {
    id: 2,
    title: 'Seguridad',
    links: ['Roles', 'Permisos']
  },
  {
    id: 3,
    title: 'Subscripciones',
    links: ['Planes', 'Invoices', 'Information']
  }
];

export default () => (
  <div className="w-1/4 md:w-2/6 font-light mb-5">
    {menus.map(menu => (
      <div className="mb-5 bg-white rounded" key={menu.id}>
        <div className="border-b border-gray-200">
          <div className="text-black font-light uppercase text-sm py-5 px-5">
            {menu.title}
          </div>
        </div>

        {menu.links.map(link => (
          <div key={link}>
            <a className="block py-3 px-5" href="#">
              <div className="text-gray-700">
                <i className="icon ion-ios-wallet mr-2 text-gray-600 inline-block"></i>
                {link}
              </div>
            </a>
          </div>
        ))}
      </div>
    ))}
  </div>
);
