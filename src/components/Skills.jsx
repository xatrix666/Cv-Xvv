const skills = [
    "React", ".NET", "SQL Server", "PostgreSQL", "Azure", "Javascript", "CSS", "jQuery", "Clean Architecture", "Docker", "EntityFramework", "MVC", "Git"
  ];
  
  const softSkills = [
    "Trabajo en equipo", "Productivo", "Adaptación a cambios", "Facilidad de aprendizaje", "Catalán nivel C", "Inglés B1"
  ];
  
  export default function Skills() {
    return (
      <section className="py-12 max-w-3xl mx-auto rounded-2xl shadow-xl bg-white/70 backdrop-blur-lg">
        <h2 className="text-3xl font-bold mb-6 text-cyan-800 text-center">Habilidades Técnicas</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {skills.map(skill => (
            <span key={skill} className="bg-cyan-100 text-cyan-800 px-5 py-2 rounded-full font-semibold shadow hover:bg-cyan-200 transition text-lg">{skill}</span>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4 text-cyan-700 text-center">Aptitudes y Soft Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {softSkills.map(skill => (
            <span key={skill} className="bg-cyan-50 text-cyan-900 px-4 py-2 rounded-full font-medium border border-cyan-200 text-base">{skill}</span>
          ))}
        </div>
      </section>
    );
  }
  