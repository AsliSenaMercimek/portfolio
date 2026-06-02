import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Bağlantıda Kalalım</span>
          <h2 className="section-title">İletişim</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-grid">
          {/* Left Column: Personal info & socials */}
          <div className="contact-info">
            <h3 className="contact-info-title">Bana Ulaşın</h3>
            <p className="contact-info-desc">
              Projeler hakkında konuşmak, iş birliği yapmak veya sadece merhaba demek için mesaj gönderebilir ya da sosyal medya üzerinden bağlantı kurabilirsiniz.
            </p>

            <div className="contact-details">
              <a href="mailto:aslisenamercimek@gmail.com" className="contact-detail-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>aslisenamercimek@gmail.com</span>
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/AsliSenaMercimek" target="_blank" rel="noopener noreferrer" className="social-link-item" aria-label="GitHub">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/asl%C4%B1-sena-mercimek-4b3999362/" target="_blank" rel="noopener noreferrer" className="social-link-item" aria-label="LinkedIn">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a href="https://medium.com/@aslisena1923" target="_blank" rel="noopener noreferrer" className="social-link-item" aria-label="Medium">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="contact-form-container">
            {submitted ? (
              <div className="form-success">
                <p>Mesajınız başarıyla gönderildi! Teşekkürler.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Adınız Soyadınız</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-posta Adresiniz</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@mail.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  Gönder
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
