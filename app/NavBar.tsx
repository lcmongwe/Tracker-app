'use client'

import React from "react";
import Link from "next/link";
import { FaBug } from "react-icons/fa";
import { usePathname } from "next/navigation";
import classnames from 'classnames'

const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath);

  const links = [
    { label: 'Dashboard', href: '/' },
     {label: 'Issues', href: '/issues'},
    
  ]
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {/* <li>
           <Link className="text-zinc-500 hover:text-sky-900 transition-colors" href="/">Dashboard</Link>
       </li>
        <li>
         <Link href="/issues">Issues</Link>
        </li> */}
        {links.map((link) => (
          <Link
            key={link.href}
            className={
              // `${
              // link.href === currentPath ? "text-blue-900 text-lg" : 'text - zinc - 500'
              // } hover:text-sky-900 transition-colors`
              classnames({
            'text-blue-900 text-lg': link.href===currentPath,
                'text-zinc-500': link.href !== currentPath,
             'hover:text-sky-900 transition-colors': true
      
      
              })
            }
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
