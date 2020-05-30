import React from 'react';
import { Link } from '@/inertia-react/index';
import HeaderCounter from './HeaderCounter';

const links = [
  { id: 1, url: '/', name: 'Home' },
  { id: 2, url: '/about', name: 'About' },
  { id: 3, url: '/contact', name: 'Contact' }
];

function Header() {
  return (
    <div>
      <nav className="bg-gray-900">
        <div className="container mx-auto flex items-center justify-between py-6 pl-1">
          <HeaderCounter />
          <div className="hidden w-full flex-grow lg:flex justify-end lg:items-center lg:w-auto uppercase font-light">
            {links.map(link => (
              <Link
                key={link.id}
                href={link.url}
                className="text-gray-100 text-sm hover:text-blue-600 mr-5 cursor-pointer"
              >
                <span>#&nbsp;</span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
