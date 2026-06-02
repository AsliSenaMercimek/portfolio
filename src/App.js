import Navbar from './components/Navbar/Navbar'; 
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Timeline from './components/Timeline/Timeline';
import Contact from './components/Contact/Contact';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero /> 
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
      <footer className="footer" style={{
        textAlign: 'center',
        padding: '40px 20px',
        backgroundColor: 'var(--color-bg-main)',
        borderTop: '1px solid rgba(84, 26, 26, 0.05)',
        color: 'var(--color-secondary)',
        fontSize: '0.9rem',
        fontWeight: '500'
      }}>
        <p>&copy; {new Date().getFullYear()} Asli Sena Mercimek. Tüm Hakları Saklidir.</p>
        <p style={{ marginTop: '8px', opacity: 0.7 }}>Minimalist ve modern tasarımla geliştirilmiştir.</p>
      </footer>
    </div>
  );
}

export default App;