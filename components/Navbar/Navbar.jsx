import { Menu } from '@headlessui/react';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import ResponsiveNavLink from './ResponsiveNavLink';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex py-2 items-center justify-between px-4 text-yellow-600 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <a href="#" className="font-medium mr-6 hover:text-white">
        Udin Photograph
      </a>

      <ul className="hidden   md:flex justify-center gap-8 ">
        <li className="text-white font-semibold hover:text-yellow-500">
          <a href="#home">Home</a>
        </li>
        <li className="text-white font-semibold hover:text-yellow-500">
          <a href="#about">About</a>
        </li>
        <li className="text-white font-semibold hover:text-yellow-500">
          <a href="#menu">Menu</a>
        </li>
        <li className="text-white font-semibold hover:text-yellow-500">
          <a href="#awards">Awards</a>
        </li>
        <li className="text-white font-semibold hover:text-yellow-500">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="">
        <a href="#" className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-1 px-4 border border-yellow-300 hover:border-transparent">
          Booking Sekarang -{'>'}
        </a>
      </div>
      <div className="md:hidden">
        <div onClick={() => setOpen(false)} className={`${open ? 'block' : 'hidden'} bg-transparent absolute w-full h-full inset-0`}></div>
        <button onClick={() => setOpen((open) => !open)} className="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
        <div className={`${open ? 'block' : 'hidden'} bg-white absolute right-0 mr-10 top-0 mt-4 py-1 rounded-lg w-56 overflow-hidden`}>
          <ResponsiveNavLink href="#">Home</ResponsiveNavLink>
          <ResponsiveNavLink href="#">Articles</ResponsiveNavLink>
          <ResponsiveNavLink href="#">Gallery</ResponsiveNavLink>
          <ResponsiveNavLink href="#">About</ResponsiveNavLink>
          <ResponsiveNavLink href="#">Contact</ResponsiveNavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
