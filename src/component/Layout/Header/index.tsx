// pages/index.tsx
"use client"
import React, { useEffect, useState } from 'react';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';


const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler on mount to check initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MobileHeader /> : <DesktopHeader/>}
      <main className="p-4">
        <h1 className="text-4xl font-bold text-center mt-10">Welcome to Our Website</h1>
        <p className="text-center mt-4 text-lg">
          This is a responsive website header example using Tailwind CSS and Next.js.
        </p>
      </main>
    </>
  );
};

export default Header;
