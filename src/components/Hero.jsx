import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-cyan-700 via-sky-800 to-blue-900 text-white py-20 rounded-3xl shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-cyan-300/10 to-transparent blur-2xl" />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <img
          src={`${import.meta.env.BASE_URL}xavi.png`}
          alt="Xavier Vallès Vicedo"
          className="mx-auto w-40 h-40 rounded-full border-4 border-cyan-500 shadow-lg bg-white/60 backdrop-blur-lg"
        />
        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">Xavier Vallès Vicedo</h1>
        <p className="text-2xl mt-3 font-light text-cyan-100 drop-shadow">Backend & Fullstack Developer · .NET · React · SQL · Azure</p>
        <div className="flex justify-center gap-8 mt-8">
          <a href="mailto:XVV1988@GMAIL.COM" className="hover:text-cyan-300 transition">
            <FaEnvelope size={32} />
          </a>
          <a href="https://linkedin.com/in/xavier-vallès-vicedo-658a0b83" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition">
            <FaLinkedin size={32} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
