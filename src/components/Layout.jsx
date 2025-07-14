import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-cyan-100 via-blue-50 to-blue-200">
      <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-md shadow-lg">
        <nav className="container mx-auto flex gap-8 py-4 px-4">
          <NavLink to="/" className="text-cyan-800 font-bold text-lg tracking-wide" end>
            Inicio
          </NavLink>
          <NavLink to="/experience" className="text-cyan-700 hover:text-cyan-500 transition">Experiencia</NavLink>
          <NavLink to="/skills" className="text-cyan-700 hover:text-cyan-500 transition">Habilidades</NavLink>
          <NavLink to="/projects" className="text-cyan-700 hover:text-cyan-500 transition">Proyectos</NavLink>
          <NavLink to="/contact" className="text-cyan-700 hover:text-cyan-500 transition">Contacto</NavLink>
        </nav>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-cyan-900 text-white text-center py-4 mt-8 rounded-t-2xl shadow-inner">
        © {new Date().getFullYear()} Xavier Vallès Vicedo
      </footer>
    </div>
  );
}
