export default function Projects() {
    return (
      <section className="py-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-cyan-700">Proyectos Destacados</h2>
        <ul className="space-y-6">
          <li className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-cyan-800">TES (Travelport)</h3>
            <p>Microservicios en .Net Core, WebAPI, desarrollo web con ReactJS, integración con Azure y metodología SAFE.</p>
          </li>
          <li className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-cyan-800">Marketplace (Travelport)</h3>
            <p>Migración de AngularJS a ReactJS, nuevos componentes, SCRUM.</p>
          </li>
          <li className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-cyan-800">Gestión Clínicas Dentales (Infomed)</h3>
            <p>Aplicación completa con Angular, .Net Core, IdentityServer, Docker y SQL Server.</p>
          </li>
          <li className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-cyan-800">Web Vueling</h3>
            <p>Desarrollo frontend y backend, integración de sistemas de reservas y pagos.</p>
          </li>
        </ul>
      </section>
    );
  }
  