import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export const NavigateApp = ({ logIn, logOut, auth }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="bg-red-600 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Brand */}
          <NavLink
            to="/"
            className="text-xl font-bold text-cyan-400 hover:text-cyan-300"
          >
            Entrename IÁ!
          </NavLink>

          {/* Mobile menu button */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-slate-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <NavLink to="/" className="hover:text-cyan-300 font-bold">
              Inicio
            </NavLink>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-cyan-300"
              >
                Temáticas
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md bg-white text-slate-900 shadow-lg">
                  <NavLink
                    to="/gymexercise"
                    className="block px-4 py-2 hover:bg-slate-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Entrenamiento Personal
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/nosotros" className="hover:text-cyan-300">
              Nosotros
            </NavLink>

            <NavLink to="/contacto" className="hover:text-cyan-300">
              Contacto
            </NavLink>

            {auth && (
              <NavLink to="/admin" className="hover:text-cyan-300">
                Admin
              </NavLink>
            )}

            <button
              onClick={() => (auth ? logOut() : logIn())}
              className="rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-400"
            >
              {auth ? 'Log Out' : 'Log In'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-800 px-4 pb-4 space-y-2">
          <NavLink to="/" className="block hover:text-cyan-300">
            Inicio
          </NavLink>

          <NavLink to="/gymexercise" className="block hover:text-cyan-300">
            Entrenamiento Personal
          </NavLink>

          <NavLink to="/nosotros" className="block hover:text-cyan-300">
            Nosotros
          </NavLink>

          <NavLink to="/contacto" className="block hover:text-cyan-300">
            Contacto
          </NavLink>

          {auth && (
            <NavLink to="/admin" className="block hover:text-cyan-300">
              Admin
            </NavLink>
          )}

          <button
            onClick={() => (auth ? logOut() : logIn())}
            className="w-full rounded-md bg-cyan-500 px-4 py-2 font-semibold text-slate-900 hover:bg-cyan-400"
          >
            {auth ? 'Log Out' : 'Log In'}
          </button>
        </div>
      )}
    </nav>
  )
}
