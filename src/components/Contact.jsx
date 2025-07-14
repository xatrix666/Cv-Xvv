import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-cyan-700">Contacto</h2>
      <ul className="space-y-4 text-lg">
        <li>
          <FaEnvelope className="inline mr-2 text-cyan-600" />
          <a href="mailto:XVV1988@GMAIL.COM" className="hover:underline">XVV1988@GMAIL.COM</a>
        </li>
        <li>
          <FaPhone className="inline mr-2 text-cyan-600" />
          <span>645031323</span>
        </li>
        <li>
          <FaLinkedin className="inline mr-2 text-cyan-600" />
          <a href="https://linkedin.com/in/xavier-vallès-vicedo-658a0b83" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn: xavier-vallès-vicedo-658a0b83
          </a>
        </li>
      </ul>
    </section>
  );
}
