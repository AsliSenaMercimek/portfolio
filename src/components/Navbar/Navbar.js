
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Asli Sena Mercimek</div>
      <ul className="navbar-links">
        <li><a href="#home">Ana Sayfa</a></li>
        <li><a href="#projects">Projeler</a></li>
        <li><a href="#skills">Yetkinlikler</a></li>
        <li><a href="#timeline">Deneyim</a></li>
        <li><a href="#contact">İletişim</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;