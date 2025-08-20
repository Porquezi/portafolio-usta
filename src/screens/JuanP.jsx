import '../styles/JuanP.css';

function JuanP() {
  return (
    <div className="cv-wrapper">
      {/* Encabezado */}
      <header className="cv-header">
        <div className="cv-photo">
          <img  
            src="https://media.licdn.com/dms/image/v2/D4E03AQHTvmRvTEWSOQ/profile-displayphoto-scale_200_200/B4EZgQk101GoAY-/0/1752624751015?e=1758153600&v=beta&t=xyn_q8mApWwxk9hEP2c8c_1pP66UkxOcbOe_HhjKs3Y" 
            alt="Foto de perfil" 
          />
        </div>
        <div className="cv-title">
          <h1>Juan Manuel Poveda Rodríguez</h1>
          <h2>Desarrollador Full Stack / Ingeniero en Formación(ING Sistemas)</h2>
          <p><strong>Email:</strong> juanm.povedar@usantoto.edu.co</p>
          <p><strong>Teléfono:</strong> +57 304 626 7726</p>
          <p><strong>Ubicación:</strong> Tunja, Colombia</p>
          <p>
            <a href="https://www.linkedin.com/in/juan-manuel-poveda-rodriquez-956415335/" target="_blank" rel="noreferrer">LinkedIn</a> |{" "}
            <a href="https://github.com/JuanManuelPovedaR" target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </div>
      </header>

      <main className="cv-content">
        {/* Perfil */}
        <section className="cv-section">
          <h3>Perfil</h3>
          <p>
            Estudiante de Ingeniería en Sistemas con experiencia en desarrollo Full Stack, análisis de datos y creación de soluciones tecnológicas adaptadas a necesidades reales. 
            Apasionado por la innovación, el aprendizaje constante y el trabajo en equipo.
          </p>
        </section>

        {/* Educación */}
        <section className="cv-section">
          <h3>Educación</h3>
          <div className="cv-item">
            <h4>Universidad Santo Tomás — Tunja</h4>
            <p>Ingeniería en Sistemas (01/2022 — 07/2025)</p>
            <p>Promedio acumulado: <strong>4.2 / 5.0</strong></p>
          </div>
        </section>

        {/* Experiencia en proyectos */}
        <section className="cv-section">
          <h3>Experiencia en Proyectos</h3>
          <div className="cv-item">
            <h4>Simulación Montecarlo – Flex Drive (USTA Tunja)</h4>
            <p>Modelo estadístico en Python para analizar el comportamiento de inscripción de usuarios, usando Google Colab, NumPy, Pandas, Seaborn y Matplotlib.</p>
          </div>
          <div className="cv-item">
            <h4>Sistema de Gestión de Tutorías – USTA</h4>
            <p>Plataforma web para asignar y gestionar tutorías académicas en programas de pregrado.</p>
          </div>
          <div className="cv-item">
            <h4>Sistema de Votaciones – USTA</h4>
            <p>App de votaciones con React Native, NestJS y Supabase, con roles de usuario y control de procesos electorales.</p>
          </div>
          <div className="cv-item">
            <h4>Sistema de Ventas y Gestión Hotelera — Hotel El Famoso Santa Rosa</h4>
            <p>Sistema integral en Excel para control de ventas, reservas, inventario y facturación.</p>
          </div>
          <div className="cv-item">
            <h4>Lolfi Bot – Discord</h4>
            <p>Bot en Python para gestión de roles, música y seguridad en Discord, usando discord.py.</p>
          </div>
          <div className="cv-item">
            <h4>Sitio Web – Peluquería en Tunja</h4>
            <p>Web responsiva con HTML, CSS, JavaScript y Bootstrap para una peluquería local.</p>
          </div>
        </section>

        {/* Habilidades */}
        <section className="cv-section">
          <h3>Habilidades Técnicas</h3>
          <p><strong>Lenguajes:</strong> Python, JavaScript, TypeScript, SQL, CSS, Java</p>
          <p><strong>Frameworks / Herramientas:</strong> React Native, NestJS, Supabase, Bootstrap, discord.py, NumPy, Pandas, Matplotlib, Seaborn, Postman</p>
        </section>

        {/* Cursos */}
        <section className="cv-section">
          <h3>Cursos Técnicos Relevantes</h3>
          <ul>
            <li>Fundamentos de Programación — Google Grasshopper</li>
            <li>Comunicación en inglés — SENA (Nivel A2)</li>
            <li>Cybersecurity Camp — UPTC</li>
          </ul>
        </section>

        {/* Idiomas */}
        <section className="cv-section">
          <h3>Idiomas</h3>
          <p><strong>Español:</strong> Nativo (Lectura, Escritura, Habla)</p>
          <p><strong>Inglés:</strong> Intermedio (Lectura, Escritura, Habla)</p>
        </section>

        {/* Certificados */}
        <section className="cv-section">
          <h3>Certificados y Enlaces</h3>
          <p>
            <a 
              href="https://usantotomaseduco-my.sharepoint.com/:f:/g/personal/juanm_povedar_usantoto_edu_co/EgcQOESIKmsdHi3atZ7Z1y0wB-Q6ILt0_vLWEbTgmmzMIRA?e=wKUSXQ" 
              target="_blank" 
              rel="noreferrer"
            >
              Ver Certificados
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

export default JuanP;
