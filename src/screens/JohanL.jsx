import '../styles/JohanL.css';

function JohanL() {
   const data = {
    nombre: "Johan Andrei Lopez Higuera",
    rol: "Estudiante de Ingeniería de Sistemas",
bio: " Soy estudiante de octavo semestre de Ingeniería de Sistemas en la Universidad Santo Tomás. Me apasiona el desarrollo tanto backend como frontend en Web y móvil, documentación de proyectos y documentación de Calidad de software, y busco desarrollarme profesionalmente en una empresa que me permita aplicar mis conocimientos, habilidades y valores",
    fotoUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGvBP6j_4ejBA/profile-displayphoto-scale_400_400/B4DZg.QJLcHAAk-/0/1753391079263?e=1758758400&v=beta&t=eKaQxqTrngVZLUbGrmSwv7-J9cfNNepnrDMJuW39pCs",
    habilidades: [
      "JavaScript", "TypeScript", "React", "Node.js", "PostgreSQL", "Git", "Nest.js", "Python", "Angular"
    ],
    proyectos: [
      {
        titulo: "Sistema de votaciones",
        descripcion: "App full-stack para gestionar votaciones para la universidad santo tomas.",
        tech: ["Nest.js", "TypeScript", "React", "PostgreSQL", "Angular"],
        repoB: "https://github.com/RichardMolano/IntegradorNativeVotacionesBackend",
        repoF: "https://github.com/RichardMolano/IntegradorNativeVotaciones/tree/richard/connection-front"
      }
    ],
    contacto: {
      email: "johan.lopez@usantoto.edu.co",
      telefono: "+57 315 435 5326",
      linkedin: "https://www.linkedin.com/in/johan-andrei-lopez-h-267415335",
      github: "https://github.com/LDraako135"
    }
  };

  return (
    <main className="pf-wrapper">
      {/* Header */}
      <header className="pf-header">
        <img className="pf-avatar" src={data.fotoUrl} alt={`Foto de ${data.nombre}`} />
        <div className="pf-title">
          <h1>{data.nombre}</h1>
          <p className="pf-role">{data.rol}</p>
          <p className="pf-bio">{data.bio}</p>
        </div>
      </header>

      {/* Habilidades */}
      <section className="pf-section">
        <h2>Habilidades</h2>
        <ul className="pf-chips">
          {data.habilidades.map((h) => (
            <li key={h} className="pf-chip">{h}</li>
          ))}
        </ul>
      </section>

      {/* Proyectos */}
      <section className="pf-section">
        <h2>Proyectos</h2>
        <div className="pf-grid" style={{ justifyContent: "center" }}>
          {data.proyectos.map((p) => (
            <article key={p.titulo} className="pf-card">
              <div className="pf-card-body">
                <h3 className="pf-card-title">{p.titulo}</h3>
                <p className="pf-card-desc">{p.descripcion}</p>
                <ul className="pf-tags">
                  {p.tech.map((t) => (
                    <li key={t} className="pf-tag">{t}</li>
                  ))}
                </ul>
              </div>
              <div className="pf-card-actions">
                <a href={p.repoB} target="_blank" rel="noreferrer" className="pf-btn pf-btn-ghost">Código Backend</a>
                <a href={p.repoF} target="_blank" rel="noreferrer" className="pf-btn pf-btn-ghost">Código Frontend</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="pf-section">
        <h2>Contacto</h2>
        <ul className="pf-contact">
          <li><span className="pf-k">Correo:</span> <a href={`mailto:${data.contacto.email}`}>{data.contacto.email}</a></li>
          <li><span className="pf-k">Teléfono:</span> <a href={`tel:${data.contacto.telefono}`}>{data.contacto.telefono}</a></li>
          <li><span className="pf-k">LinkedIn:</span> <a href={data.contacto.linkedin} target="_blank" rel="noreferrer">{data.contacto.linkedin}</a></li>
          <li><span className="pf-k">GitHub:</span> <a href={data.contacto.github} target="_blank" rel="noreferrer">{data.contacto.github}</a></li>
        </ul>
      </section>
    </main>
  );
}

export default JohanL;
