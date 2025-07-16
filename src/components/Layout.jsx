import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden overscroll-x-none bg-gradient-to-br from-cyan-100 via-blue-50 to-blue-200">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex gap-6 overflow-x-auto no-scrollbar whitespace-nowrap overscroll-x-contain">
            <NavLink to="/" end>Inicio</NavLink>
            <NavLink to="/experience">Experiencia</NavLink>
            <NavLink to="/skills">Habilidades</NavLink>
            <NavLink to="/projects">Proyectos</NavLink>
            <NavLink to="/contact">Contacto</NavLink>
          </div>
        </nav>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-cyan-900 text-white text-center py-4 mt-8 rounded-t-2xl shadow-inner">
        © {new Date().getFullYear()} Xavier Vallès Vicedo
      </footer>
    </div>
  );
}
