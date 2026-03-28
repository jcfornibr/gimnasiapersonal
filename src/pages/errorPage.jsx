import { NavLink } from "react-router-dom";
import { MdErrorOutline, MdHome, MdArrowBack } from "react-icons/md";

export const ErrorPage = () => {
  return (
    <main className="flex-1 bg-black min-h-screen flex items-center justify-center">
      <section className="relative overflow-hidden py-24 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl lg:text-[12rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-800 mb-4">
              404
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Página no encontrada
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
              Parece que te has{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-800">
                Perdido
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Esta página no existe o ha sido movida. No te preocupes, incluso
              los mejores atletas pierden el camino a veces.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <NavLink
              to="/"
              className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white font-bold h-14 px-10 rounded-lg text-lg transition-all shadow-lg shadow-red-700/20"
            >
              <MdHome className="w-5 h-5" />
              Volver al Inicio
            </NavLink>

            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 bg-transparent border border-white/20 hover:border-white/40 text-white font-bold h-14 px-10 rounded-lg text-lg transition-all cursor-pointer"
            >
              <MdArrowBack className="w-5 h-5" />
              Ir Atrás
            </button>
          </div>

          <p className="text-gray-500 text-xs mt-12">
            Desarrollado por{" "}
            <a
              href="https://nomos-solutions.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 font-semibold hover:text-red-500 transition-colors"
            >
              Nomos Solutions
            </a>
          </p>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>
    </main>
  );
};
