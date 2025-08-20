import React from "react";
import "../styles/juanM.css"; // Importamos los estilos

export default function JuanM() {
  return (
    <div className="resume-container">
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQFowpvw--seIw/profile-displayphoto-scale_400_400/B4DZjFGAEfGkAo-/0/1755653342012?e=1758758400&v=beta&t=mzWcYolLR4WuYCx9VyFkT76SAoKB30EvnqUuRgPF4Q8"
        alt="Foto de perfil"
        className="profile-pic"
      />

      {/* Encabezado */}
      <header className="resume-header">
        <h1>Juan David Mozo Joya</h1>
        <p className="title">Desarrollador Full Stack</p>
        <p className="contact">
          📧 juan.mozo@usantoto.edu.co | 📱 +57 313 435 9972 | 🌍 Tunja,
          Colombia
        </p>
        <a
          href="https://github.com/juanMozo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver perfil de GitHub
        </a>
        <span> | </span>

        <a
          href="https://www.linkedin.com/in/juan-mozo-217413335"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver perfil de LinkedIn
        </a>
      </header>

      {/* Perfil */}
      <section>
        <h2>Perfil</h2>
        <p>
          Estudiante de Ingeniería de Sistemas con pasión por la tecnología y la
          innovación. Cuento con formación sólida en desarrollo de software,
          aplicaciones web y gestión de bases de datos. Me destaco por mi
          pensamiento lógico, capacidad de análisis y enfoque orientado a la
          resolución de problemas complejos.
        </p>
        <p>
          He desarrollado habilidades clave como la programación, el trabajo en
          equipo, la investigación de nuevas tecnologías y la adaptación a
          entornos cambiantes. Busco aplicar mis conocimientos en proyectos
          reales, aportando valor e impulsando la transformación digital desde
          una perspectiva proactiva y de aprendizaje continuo.
        </p>
      </section>

      {/* Proyectos personales */}
      <section>
        <h2>
          <strong>Proyectos personales</strong>
        </h2>

        <div className="job">
          <h3>
            <strong>
              SISTEMA DE GESTIÓN DE TUTORIAS ESPECIALIZADAS EN LA UNIVERSIDAD
              SANTO TOMAS.
            </strong>
          </h3>
          <a
            href="https://github.com/juanMozo/tutoria_usta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Ver proyecto</strong>
          </a>
        </div>

        <div className="job">
          <h3>
            <strong>
              SISTEMA DE VOTACIONES EN LA UNIVERSIDAD SANTO TOMAS.
            </strong>
          </h3>
          <a
            href="https://github.com/RichardMolano/IntegradorNativeVotacionesBackend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Backend</strong>
          </a>
          <span style={{ margin: "0 8px" }}>|</span>
          <a
            href="https://github.com/RichardMolano/IntegradorNativeVotaciones/tree/richard/conection-front"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Frontend</strong>
          </a>
        </div>
      </section>
      <section>
        <h2>
          <strong>Educación</strong>
        </h2>
        <p>
          <strong>Bachillerato</strong>
        </p>
        <p>
          Institución educativa técnica Lucas Caballero Calderón - Tipacoque,
          Boyacá - 2021
        </p>
        <p>
          <strong>
            {" "}
            Técnico en contabilización de operaciones comerciales y financieras{" "}
          </strong>
        </p>
        <p>SENA CEGAFE - Tunja, Boyacá - 2021</p>
        <p>
          <strong>Ingeniería de Sistemas</strong>
        </p>
        <p>Universidad Santo Tomas - En curso - Finalización en 2026</p>
      </section>
      <section>
        <h2>Habilidades</h2>

        {/* Lenguajes de programación */}
        <div className="skills-subsection">
          <h3>Lenguajes de programación</h3>
          <ul className="skills">
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>TypeScript</li>
            <li>C#</li>
          </ul>
        </div>

        {/* Frameworks */}
        <div className="skills-subsection">
          <h3>Frameworks</h3>
          <ul className="skills">
            <li>React</li>
            <li>Angular</li>
            <li>NestJS</li>
            <li>Spring</li>
          </ul>
        </div>

        {/* Base de datos */}
        <div className="skills-subsection">
          <h3>Base de datos</h3>
          <ul className="skills">
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Idiomas</h2>
        <p>
          <strong>Español:</strong> Nativo
        </p>
        <p>
          <strong>Inglés:</strong> Intermedio (B1)
        </p>
      </section>
    </div>
  );
}
