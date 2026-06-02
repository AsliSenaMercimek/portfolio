import './Timeline.css';

const timelineData = [
  {
    type: 'experience',
    date: '2025 - Günümüz',
    title: 'Stajyer Yazılım Mühendisi',
    subtitle: 'Yapay Zeka ve Frontend Odaklı Geliştirme',
    desc: 'Büyük ölçekli web uygulamalarının arayüz tasarımlarının optimize edilmesi ve yapay zeka destekli süreçlerin entegrasyonu üzerine pratik deneyim.'
  },
  {
    type: 'education',
    date: '2024 - 2025',
    title: 'Yoğun Yapay Zeka / AI Masterclass',
    subtitle: 'İleri Seviye LLM Entegrasyonu ve Model İnce Ayar (Finetuning)',
    desc: 'LLM mimarileri, prompt mühendisliği ve otonom yazılım geliştirme araçlarının etkin kullanımı üzerine uygulamalı eğitimler.'
  },
  {
    type: 'education',
    date: '2022 - Günümüz',
    title: 'Yazılım Mühendisliği Lisansı',
    subtitle: 'Üniversite Eğitimi',
    desc: 'Veri yapıları, algoritmalar, nesne yönelimli programlama, veritabanı yönetim sistemleri ve yazılım mimarileri üzerine temel akademik çalışmalar.'
  }
];

function Timeline() {
  return (
    <section className="timeline-section" id="timeline">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Özgeçmiş</span>
          <h2 className="section-title">Eğitim & Deneyim</h2>
          <div className="section-divider"></div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <div className="timeline-badge">
                <div className="badge-inner"></div>
              </div>
              <div className="timeline-card">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-subtitle">{item.subtitle}</h4>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
