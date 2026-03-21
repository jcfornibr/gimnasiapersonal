import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export function NavigateApp({ auth, logIn, logOut }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#121113] backdrop-blur-md px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-3">
            <h2 className="text-white text-xl font-bold leading-tight tracking-tight">RepWise <span className="text-red-500 text-sm uppercase tracking-widest">Fit</span></h2>
          </NavLink>

          <div className="hidden md:flex items-center gap-10">
            <NavLink
              to="/"
              className="text-sm font-medium hover:text-red-500 transition-colors text-white/80"
            >
              Inicio
            </NavLink>

            <NavLink
              to="/gymexercise"
              className="text-sm font-medium hover:text-red-500 transition-colors text-white/80"
            >
              Coach IA
            </NavLink>

            <NavLink
              to="/nosotros"
              className="text-sm font-medium hover:text-red-500 transition-colors text-white/80"
            >
              Nosotros
            </NavLink>

            <NavLink
              to="/contacto"
              className="text-sm font-medium hover:text-red-500 transition-colors text-white/80"
            >
              Contacto
            </NavLink>

            {auth && (
              <NavLink
                to="/admin"
                className="text-sm font-medium hover:text-red-500 transition-colors text-white/80"
              >
                Admin
              </NavLink>
            )}

            <button
              onClick={() => (auth ? logOut() : logIn())}
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-6 py-2 rounded transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              {auth ? "Log Out" : "Log In"}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-300 text-2xl rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all"
          >
            <span className="sr-only">
              {menuOpen ? "Cerrar menú" : "Abrir menú"}
            </span>
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-linear-to-br from-dark-onix to-onix backdrop-blur-sm border-t border-white/10 mt-2">
            <div className="flex flex-col w-full p-4 space-y-2">
              <NavLink
                to="/"
                className="text-sm font-medium text-white/80 hover:text-red-500 py-2 px-3 rounded transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </NavLink>

              <NavLink
                to="/gymexercise"
                className="text-sm font-medium text-white/80 hover:text-red-500 py-2 px-3 rounded transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Coach IA
              </NavLink>

              <NavLink
                to="/nosotros"
                className="text-sm font-medium text-white/80 hover:text-red-500 py-2 px-3 rounded transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Nosotros
              </NavLink>

              <NavLink
                to="/contacto"
                className="text-sm font-medium text-white/80 hover:text-red-500 py-2 px-3 rounded transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </NavLink>

              {auth && (
                <NavLink
                  to="/admin"
                  className="text-sm font-medium text-white/80 hover:text-red-500 py-2 px-3 rounded transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Admin
                </NavLink>
              )}

              {/* Boton login mobile */}
              <div className="border-t border-white/10 pt-4 mt-2">
                <button
                  onClick={() => {
                    auth ? logOut() : logIn();
                    setMenuOpen(false);
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-6 py-2 rounded transition-all transform hover:scale-105 active:scale-95"
                >
                  {auth ? "Log Out" : "Log In"}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
