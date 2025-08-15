import './juanP.css';


function JuanP() {
  return (
    <div className="cv-wrapper">
      {/* Encabezado con foto y nombre */}
      <header className="cv-header">
        <div className="cv-photo">
          
        </div>
        <div className="cv-title">
          <h1>Juan Manuel Poveda Rodríguez</h1>
          <h2>Desarrollador Full Stack / Ingeniero en Formación</h2>
           <img  
           className="cv-photo" 
           src="https://media.licdn.com/dms/image/v2/D4E03AQHTvmRvTEWSOQ/profile-displayphoto-scale_200_200/B4EZgQk101GoAY-/0/1752624751015?e=1758153600&v=beta&t=xyn_q8mApWwxk9hEP2c8c_1pP66UkxOcbOe_HhjKs3Y" 
             alt="Foto de perfil" />
        </div>
      </header>

      <main className="cv-content">
        {/* Proyectos Extra Académicos */}
        <section className="cv-section">
          <h3>Proyectos Extra Académicos</h3>
          <p>
            <a 
              href="https://usantotomaseduco-my.sharepoint.com/:f:/g/personal/juanm_povedar_usantoto_edu_co/Eqc0ESlKmsdHj3qtZ7Z1y0wB-Q6ILt0_vLWEbTqmmzMIRA?e=wKUSXQ" 
              target="_blank" 
              rel="noreferrer"
            >
              Certificados / Repositorios / Enlaces
            </a>
          </p>
        </section>

        {/* Proyectos Académicos Destacados */}
        <section className="cv-section">
          <h3>Proyectos Académicos Destacados</h3>
          
          <div className="cv-item">
            <h4>Simulación Montecarlo – Flex Drive (USTA Tunja)</h4>
            <p>Desarrollo de modelo estadístico en Python para analizar el comportamiento de inscripción de usuarios, usando Google Colab, NumPy, Pandas, Seaborn y Matplotlib.</p>
          </div>

          <div className="cv-item">
            <h4>Sistema de Votaciones – USTA</h4>
            <p>Desarrollo Full Stack de app de votaciones con React Native, NestJS y Supabase; implementación de lógica de negocio y roles de usuario para una experiencia ágil y segura.</p>
          </div>

          <div className="cv-item">
            <h4>Lolfi Bot – Discord</h4>
            <p>Desarrollo de bot en Discord con Python, usando discord.py, para la gestión de roles, sistemas de música y funciones de seguridad. Integración de comandos personalizados, control de permisos y moderación automatizada.</p>
          </div>

          <div className="cv-item">
            <h4>Sitio Web – Peluquería en Tunja</h4>
            <p>Diseño y desarrollo de página web responsiva para una peluquería local en Tunja, utilizando HTML, CSS, JavaScript y Bootstrap.</p>
          </div>
        </section>

        {/* Objetivo Profesional */}
        <section className="cv-section">
          <h3>Objetivo Profesional</h3>
          <p>
            Mi objetivo es desarrollarme como ingeniero de software, 
            participando en proyectos innovadores que aporten soluciones 
            tecnológicas de alto impacto y fomenten el aprendizaje constante.
          </p>
        </section>
      </main>
    </div>
  );
}

export default JuanP;
