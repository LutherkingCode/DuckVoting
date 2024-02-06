import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import ducks from '../data/duckList'



const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link to="/" className="text-white mr-4">Home</Link>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex">
              {ducks.map((duck) => (
                <li key={duck} className="mr-6">
                  <Link to={`/ducks/${duck.name}`} className="text-white">{duck.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="block lg:hidden">
            <button className="text-white" onClick={toggleMenu}>Menu</button>
          </div>
        </div>
      </nav>
      <div className={`container mx-auto ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="bg-gray-800 text-white p-4 lg:hidden">
          {ducks.map((duck) => (
            <li key={duck.id} className="mb-2">
              <Link to={`/ducks/${duck.name}`} onClick={() => setMenuOpen(false)}>{duck.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-200">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
