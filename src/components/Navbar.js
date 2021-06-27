import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuContent = React.createRef();

  function handleNavClick() {
    menuContent.current.classList.toggle("hidden");
  }

  return (
    <nav className="w-screen primary-background fixed inset-x-0 top-0 z-10">
      {/* md and above */}

      <div className="w-full h-14 flex px-8 sm:px-14 md:px-24 justify-between items-center">
        <h2 className="text-2xl font-bold primary-text tracking-wide">
          Photo Vault
        </h2>
        <button
          className="sm:hidden primary-text"
          id="menu-btn"
          onClick={handleNavClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>

        {/* md and above */}

        <div className="hidden sm:flex space-x-9 primary-text text-lg font-semibold">
          <Link
            to="/"
            className="hover:text-bgray-900 transition ease-in-out duration-300"
          >
            All albumbs
          </Link>
          <Link
            to="/add"
            className="hover:text-bgray-900 transition ease-in-out duration-300"
          >
            Add photo
          </Link>
        </div>
      </div>
      {/* mobile tings */}
      <div>
        <div
          className="hidden sm:hidden border-t border-bgray-900 primary-text transition ease-in-out duration-500"
          ref={menuContent}
        >
          <Link
            to="/"
            className="block px-8 py-2 hover:text-bgray-900 transition ease-in-out duration-300"
          >
            All albumbs
          </Link>
          <Link
            to="/add"
            className="block px-8 py-2 hover:text-bgray-900 transition ease-in-out duration-300"
          >
            Add photo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
