// components/MobileHeader.tsx
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import MenuList from './menuList';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (name: string) => {
    setActiveMenu(activeMenu === name ? null : name);
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Logo</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl focus:outline-none"
        >
          &#9776;
        </button>
      </div>
      {isOpen && (
        <nav className="mt-2 space-y-4">
          {MenuList.map((menuItem) => (
            <div key={menuItem.name}>
              <div className="flex justify-between items-center">
                <Link href={menuItem.href} className="block text-lg hover:text-gray-300">
                  {menuItem.name}
                </Link>
                {menuItem.subMenu && (
                  <button
                    className="ml-2 text-xl"
                    onClick={() => toggleMenu(menuItem.name)}
                  >
                    {activeMenu === menuItem.name ? '-' : '+'}
                  </button>
                )}
              </div>
              {menuItem.subMenu && activeMenu === menuItem.name && (
                <div className="ml-4 space-y-2">
                  {menuItem.subMenu.map((subItem) => (
                    <Link key={subItem.name} href={subItem.href} className="block hover:text-gray-300">
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default MobileHeader;
