import './julianS.css';

function JulianS() {
  return (
    <div className="perfil-wrapper">
      <section className="perfil-foto">
        <img 
          src="https://media.licdn.com/dms/image/v2/D4D03AQFUkvL-h-mUNw/profile-displayphoto-scale_200_200/B4DZjEMROmG8AY-/0/1755638208156?e=1758758400&v=beta&t=4pYBxzidvuchKSdIhhzCJTa85f6kItS4LuO9k9eXVjg" 
          alt="Foto de perfil" 
        />
      </section>

      <section className="perfil-presentacion">
        <h2>Julain David Sanchez Amado</h2>
        <p>
         Estudiante de octavo semestre de Ingeniería de Sistemas en la Universidad Santo Tomás, seccional Tunja. Durante mi formación he desarrollado una base sólida en bases de datos, diseño web y desarrollo de software.
        </p>
      </section>

<section className="perfil-habilidades">
  <h3>Habilidades</h3>

  <div className="habilidadesTecnicas">
    <h4>Habilidades Técnicas</h4>
    <ul>
      <li>Python</li>
      <li>JavaScript</li>
      <li>TypeScript</li>
      <li>SQL</li>
    </ul>
  </div>

  <div className="habilidadesBlandas">
    <h4>Habilidades Blandas</h4>
    <ul>
      <li>Resolución de problemas  </li>
      <li>Trabajo en equipo</li>
      <li>Adaptabilidad </li>
    </ul>
  </div>
</section>

      <section className="perfil-proyectos">
        <h3>Proyectos</h3>
        <div className="proyecto">
          <h4>SISTEMA DE VOTACIONES PARA LA UNIVERSIDAD SANTO TOMAS</h4>
          <p>El objetivo de este proyecto consistió en desarrollar una plataforma de votación institucional. La aplicación contempla 
distintos niveles de usuario: los administradores gestionan todo el sistema y los usuarios registrados; el personal 
administrativo configura los procesos electorales y registra a los candidatos; estos últimos pueden publicar sus propuestas 
dentro del sistema, mientras que los votantes participan emitiendo su voto de forma sencilla y segura.</p>
        </div>
        <div className="proyecto">
          <h4>SISTEMA DE GESTION DE TUTORIAS  </h4>
          <p>El objetivo del proyecto consistió en el desarrollo de una plataforma para gestionar y asignar tutorías académicas de forma 
eficiente. Los estudiantes pueden solicitarlas automáticamente, y los docentes administrar su disponibilidad y registrar los 
encuentros. </p>
        </div>
      </section>

      <section className="perfil-contacto">
        <h3>Contacto</h3>
        <p><strong>Ubicacion</strong> Tunja, Boyaca</p>
        <p><strong>Email:</strong> julian.sancheza@usantoto.edu.co</p>
        <p><strong>Teléfono:</strong> +57 322 873 2073</p>
        <p><strong>LinkedIn:</strong> https://www.linkedin.com/in/julian-sanchez-1b3950205/</p>
        <p>
          
        </p>
      </section>
    </div>
  );
}

export default JulianS;
