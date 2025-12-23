import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/header.css';
import { FaAngleDown } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export function NavigateApp({ auth, logIn, logOut }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-onix w-full z-20 top-0 border-b border-default shadow-lg">
      <div className="max-w-7xl flex items-center justify-between mx-auto px-4 py-3 md:py-4">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center space-x-3"
        >
          <span className="bg-linear-to-r from-red-500 to-red-600 p-1 self-center text-xl font-bold whitespace-nowrap">
            Entrename IÁ!
          </span>
        </NavLink>

        {/* Derecha */}
        <div className="flex md:order-2 items-center space-x-2 md:space-x-3">
          {/* Boton login desktop */}
          <button
            onClick={() => (auth ? logOut() : logIn())}
            className="hidden md:flex bg-white items-center text-gray-700 font-bold justify-center gap-x-2 text-sm lg:text-base rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-6 lg:px-8 py-2.5 cursor-pointer"
          >
            {auth ? "Log Out" : "Log In"}
          </button>

          {/* Boton hamburguesa mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-white text-2xl rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all"
          >
            <span className="sr-only">{menuOpen ? "Cerrar menú" : "Abrir menú"}</span>
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Menu */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute md:relative top-full left-0 w-full md:w-auto md:flex md:order-1 bg-onix md:bg-transparent border-t md:border-t-0 border-gray-700`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 lg:space-x-8 w-full md:w-auto p-4 md:p-0 font-medium">

            <li>
              <NavLink
                to="/"
                className="block text-white py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </NavLink>
            </li>

            {/* Dropdown */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex text-white items-center w-full py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300 cursor-pointer transition-colors"
              >
                Temáticas <FaAngleDown className={`ml-1 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="md:absolute relative z-10 md:mt-2 w-full md:w-56  bg-white text-slate-900 shadow-lg">
                  <NavLink
                    to="/gymexercise"
                    className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Entrenamiento Personal
                  </NavLink>
                </div>
              )}
            </li>

            <li>
              <NavLink
                to="/nosotros"
                className="block text-white py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Nosotros
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contacto"
                className="block text-white py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </NavLink>
            </li>

            {auth && (
              <li>
                <NavLink
                  to="/admin"
                  className="block text-white py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Admin
                </NavLink>
              </li>
            )}

            {/* Boton login mobile */}
            <li className="md:hidden border-t border-gray-700 pt-4 mt-2">
              <button
                onClick={() => {
                  auth ? logOut() : logIn();
                  setMenuOpen(false);
                }}
                className="w-full bg-white flex items-center text-gray-700 font-bold justify-center gap-x-2 text-sm rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-4 py-2.5 cursor-pointer"
              >
                {auth ? "Log Out" : "Log In"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
