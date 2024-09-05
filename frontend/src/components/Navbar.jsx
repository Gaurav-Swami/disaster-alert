import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="shadow-lg text-black py-4 px-12 fixed w-full bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <span className="text-2xl font-bold">ALERTIFY</span>

        <ul className="flex space-x-8 text-lg">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">HOME</Link>
          </li>
          <li>
            <Link to="/alerts" className="hover:text-yellow-400 transition-colors duration-300">ALERTS</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400 transition-colors duration-300">ABOUT US</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
