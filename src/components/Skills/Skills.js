import './Skills.css';

const skillsData = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Phaser.js']
  },
  {
    category: 'Backend & Database',
    items: ['SQL', 'Supabase', 'Veritabanı Yönetimi', '3NF & ERD Modelleme']
  },
  {
    category: 'Tools & Workflows',
    items: ['Git', 'GitHub', 'Cursor', 'Lovable']
  }
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Yetenekler</span>
          <h2 className="section-title">Teknik Beceriler</h2>
          <div className="section-divider"></div>
        </div>

        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div className="skills-card" key={index}>
              <h3 className="skills-category-title">{skillGroup.category}</h3>
              <div className="skills-list">
                {skillGroup.items.map((item, itemIdx) => (
                  <div className="skill-item" key={itemIdx}>
                    <span className="skill-dot"></span>
                    <span className="skill-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
