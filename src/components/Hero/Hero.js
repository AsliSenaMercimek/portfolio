import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">Merhaba, ben</p>
        <h1 className="hero-name">Asli Sena Mercimek</h1>
        <h2 className="hero-title">Yazılım Mühendisliği Öğrencisi</h2>
        <p className="hero-desc">
          Frontend geliştirme ve modern web teknolojilerine tutkuyla bağlı,
          kullanıcı deneyimini ön planda tutan bir geliştirici adayıyım.
          Sıkılınca kod yazıyorum.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Projelerimi gör</a>
          <a href="#contact" className="btn btn-outline">İletişime geç</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;