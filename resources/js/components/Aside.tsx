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
  // {
  //   id: 2,
  //   title: 'Seguridad',
  //   links: ['Roles', 'Permisos']
  // },
  {
    id: 3,
    title: 'Subscripciones',
    links: ['Planes', 'Invoices', 'Information']
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
          <div key={link}>
            <a className="block py-3 px-5" href="#">
              <div className="text-white">
                <span>#&nbsp;</span>
                {link}
              </div>
            </a>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Aside;
