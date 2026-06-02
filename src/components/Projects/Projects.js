import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'EvoPlatformer - 2D Oyun Projesi',
    description: 'Phaser.js ile geliştirilmiş, zengin animasyon kütüphanelerine ve evrim mekaniklerine sahip bir aksiyon-platform oyunu. Karakterin geliştikçe yeni yetenekler kazandığı dinamik bir oynanış sunar.',
    tech: ['Phaser.js', 'JavaScript', 'Web Audio API', 'HTML5 Canvas'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 2,
    title: 'KomşuÖdünç - Paylaşım Ekonomisi Platformu',
    description: 'Mahalle ölçeğinde yardımlaşmayı ve sürdürülebilirliği destekleyen, kullanıcıların birbirlerine güvenli şekilde eşya ödünç verip alabilmesini sağlayan mobil uyumlu web uygulaması.',
    tech: ['React', 'Supabase', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Portfolyom</span>
          <h2 className="section-title">Seçilmiş Çalışmalar</h2>
          <div className="section-divider"></div>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-card-top">
                <span className="project-number">0{project.id}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, index) => (
                    <span className="tech-tag" key={index}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-card-bottom">
                <div className="project-actions">
                  <a href={project.github} className="btn-project btn-github" target="_blank" rel="noopener noreferrer">
                    <span>GitHub</span>
                  </a>
                  <a href={project.demo} className="btn-project btn-demo" target="_blank" rel="noopener noreferrer">
                    <span>Canlı Demo &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
