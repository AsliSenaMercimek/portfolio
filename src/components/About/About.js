import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <span className="about-subtitle">Hakkımda</span>
          <h2 className="about-title">Ben Kimim?</h2>
          <p className="about-desc">
            Ben Aslı Sena Mercimek, Yazılım Mühendisliği öğrencisiyim. Web ve mobil geliştirme
            odağında güncel teknolojileri kullanarak dijital çözümler üretiyorum. Geliştirme
            süreçlerinde hem işlevselliğe hem de kullanıcı deneyimine önem veriyorum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
