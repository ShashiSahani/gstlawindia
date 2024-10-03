// components/DesktopHeader.tsx
"use client"

import React from 'react';
import Link from 'next/link';
import MenuList from './menuList';

const DesktopHeader = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>
        <nav className="space-x-8 relative">
          {MenuList?.map((menuItem) => (
            <div key={menuItem.name} className="inline-block relative group">
              <Link href={menuItem.href} className="hover:text-red-300">
               <span className='text-black'>{menuItem.name}</span> 
              </Link>
              {menuItem.subMenu && (
                <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-gray-700 p-2 rounded">
                  {menuItem.subMenu.map((subItem) => (
                    <Link key={subItem.name} href={subItem.href} className="block hover:text-gray-300 p-2">
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default DesktopHeader;
