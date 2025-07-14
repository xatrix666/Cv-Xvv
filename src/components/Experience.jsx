import { motion } from "framer-motion";

const jobs = [
  {
    company: "Plexus",
    role: "Backend Developer",
    period: "Mayo 2024 – Actualidad",
    desc: [
      "Resolución de incidencias y desarrollo de proyectos para Iberostar.",
      "Stack: .Net Framework, Javascript, CSS, jQuery, MVC, API REST, SQL Server, PostgreSQL, Git, Azure."
    ]
  },
  {
    company: "Itequia",
    role: "Fullstack Developer",
    period: "Marzo 2022 – Dic 2023",
    desc: [
      "Mantenimiento y desarrollo de nuevas funcionalidades para Celsa.",
      "Stack: .Net Framework, Razor, Javascript, CSS, jQuery, Clean Architecture, MVC, EntityFramework, API REST, SQL Server, Git, Automapper, OpenXML, EPPlus."
    ]
  },
  {
    company: "Infomed",
    role: "Fullstack Developer",
    period: "Jul 2020 – Mar 2021",
    desc: [
      "Aplicaciones para gestión de clínicas dentales.",
      "Stack: Angular, .Net Core, EntityFramework, IdentityServer, pasarela Ingénico, Clean Architecture, SQL Server, Git, Markdown, Jira, Docker."
    ]
  },
  {
    company: "Travelport",
    role: "Fullstack Developer",
    period: "Feb 2017 – Jun 2020",
    desc: [
      "Proyectos TES, Marketplace y Rail.",
      "TES: microservicios .Net Core, WebAPI, ReactJS, SAFE, Azure, Jira, SQL.",
      "Marketplace: migración AngularJS a ReactJS, SCRUM.",
      "Rail: microservicios .Net Core, WCF, SCRUM, ReactJS."
    ]
  },
  {
    company: "Vueling",
    role: "Fullstack Developer",
    period: "May 2015 – Feb 2017",
    desc: [
      "Frontend y backend de la web de Vueling.",
      "Stack: C#, Javascript, SQL, Skysales, XML, XSLT, Razor, HTML, WebServices, MVC."
    ]
  },
  {
    company: "Accenture",
    role: "Developer",
    period: "Ene 2014 – Ene 2015",
    desc: [
      "Mantenimiento y mejoras para IBM MessageSight.",
      "Webs de comercio online con IBM WebSphere Commerce.",
      "Inventarios con IBM Sterling Order Management."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-cyan-800 text-center drop-shadow">Experiencia Profesional</h2>
      <ol className="relative border-l-4 border-cyan-400">
        {jobs.map((job, idx) => (
          <motion.li
            key={job.company + idx}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="mb-10 ml-6 bg-white/70 backdrop-blur-lg rounded-xl shadow-lg p-6 relative"
          >
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-400 rounded-full ring-8 ring-white"></span>
            <h3 className="text-xl font-semibold text-cyan-700">{job.role} <span className="text-cyan-900">@ {job.company}</span></h3>
            <time className="block mb-2 text-sm text-gray-500">{job.period}</time>
            <ul className="list-disc ml-6 text-gray-800">
              {job.desc.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
