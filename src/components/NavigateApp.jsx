import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import { FaAngleDown } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export function NavigateApp({ auth, logIn, logOut }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-20 top-0 ">
        <div className="max-w-7xl flex items-center justify-between mx-auto px-4 py-3 md:py-4">
          <NavLink to="/" className="flex items-center space-x-3">
            <span className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded self-center text-xl font-bold whitespace-nowrap text-white">
              Entrename IÁ!
            </span>
          </NavLink>

          <div className="hidden md:flex bg-dark-onix/80 backdrop-blur-sm  py-2 px-3 rounded-full border-2 border-onix md:items-center md:space-x-6 lg:space-x-8">
            <ul className="flex flex-row items-center space-x-6 lg:space-x-8 font-medium">
              <li>
                <NavLink
                  to="/"
                  className="block text-white py-2 px-3 rounded hover:text-gray-300 transition-colors"
                >
                  Inicio
                </NavLink>
              </li>

              {/* Dropdown */}
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex text-white items-center py-2 px-3 rounded hover:text-gray-300 cursor-pointer transition-colors"
                >
                  Temáticas{" "}
                  <FaAngleDown
                    className={`ml-1 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute z-10 mt-2 w-56 bg-white text-slate-900 rounded-lg shadow-lg">
                    <NavLink
                      to="/gymexercise"
                      className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Entrenamiento Personal
                    </NavLink>
                  </div>
                )}
              </li>

              <li>
                <NavLink
                  to="/nosotros"
                  className="block text-white py-2 px-3 rounded hover:text-gray-300 transition-colors"
                >
                  Nosotros
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contacto"
                  className="block text-white py-2 px-3 rounded hover:text-gray-300 transition-colors"
                >
                  Contacto
                </NavLink>
              </li>

              {auth && (
                <li>
                  <NavLink
                    to="/admin"
                    className="block text-white py-2 px-3 rounded hover:text-gray-300 transition-colors"
                  >
                    Admin
                  </NavLink>
                </li>
              )}

              <li>
                <button
                  onClick={() => (auth ? logOut() : logIn())}
                  className="bg-white text-gray-700 font-bold text-sm lg:text-base rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-6 lg:px-8 py-2.5 cursor-pointer"
                >
                  {auth ? "Log Out" : "Log In"}
                </button>
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-white text-2xl rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all"
          >
            <span className="sr-only">
              {menuOpen ? "Cerrar menú" : "Abrir menú"}
            </span>
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-onix/90 backdrop-blur-sm py-2 px-3  border-gray-700">
            <ul className="flex flex-col w-full p-4 font-medium space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="block text-white py-2 px-3 rounded hover:bg-gray-700 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Inicio
                </NavLink>
              </li>

              {/* Dropdown Mobile */}
              <li>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex text-white items-center w-full py-2 px-3 rounded hover:bg-gray-700 cursor-pointer transition-colors"
                >
                  Temáticas{" "}
                  <FaAngleDown
                    className={`ml-1 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="mt-2 ml-4">
                    <NavLink
                      to="/gymexercise"
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
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
                  className="block text-white py-2 px-3 rounded hover:bg-gray-700 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Nosotros
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contacto"
                  className="block text-white py-2 px-3 rounded hover:bg-gray-700 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Contacto
                </NavLink>
              </li>

              {auth && (
                <li>
                  <NavLink
                    to="/admin"
                    className="block text-white py-2 px-3 rounded hover:bg-gray-700 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Admin
                  </NavLink>
                </li>
              )}

              {/* Boton login mobile */}
              <li className="border-t-2 border-gray-700 pt-4 mt-2">
                <button
                  onClick={() => {
                    auth ? logOut() : logIn();
                    setMenuOpen(false);
                  }}
                  className="w-full bg-white text-gray-700 font-bold text-sm rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-4 py-2.5 cursor-pointer"
                >
                  {auth ? "Log Out" : "Log In"}
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
