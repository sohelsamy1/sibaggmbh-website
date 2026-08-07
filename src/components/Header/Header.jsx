import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUniversalAccess } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeMenu = () => {
    const closeButton = document.querySelector('.offcanvas .btn-close');
    if (closeButton) {
      closeButton.click();
    }
    setTimeout(() => {
      document.querySelectorAll('.offcanvas-backdrop').forEach(el => el.remove());
      document.body.classList.remove('offcanvas-open');
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    }, 150);
  };

  return (
    <header className="site-header">
      {/* টপ মারকিউ বার */}
      <div className="marquee-wrapper">
        <div className="container">
          <div className="marquee-container d-none d-md-block">
            <div className="marquee-content">
              <div className="marquee-group">
                <span className="marquee-item">🕒 Montag - Freitag: 08:00 - 18:00 Uhr</span>
                <span className="marquee-item">📞 24h Notdienst auf Anfrage</span>
                <span className="marquee-item">📱 Geschäftsführer D. Jovanovic +49 172 6302135</span>
                <span className="marquee-item">🏢 Hauptbüro 030 629 316 959</span>
                <span className="marquee-item">✉️ Info.sibaggmbh@web.de</span>
              </div>
              <div className="marquee-group">
                <span className="marquee-item">🕒 Montag - Freitag: 08:00 - 18:00 Uhr</span>
                <span className="marquee-item">📞 24h Notdienst auf Anfrage</span>
                <span className="marquee-item">📱 Geschäftsführer D. Jovanovic +49 172 6302135</span>
                <span className="marquee-item">🏢 Hauptbüro 030 629 316 959</span>
                <span className="marquee-item">✉️ Info.sibaggmbh@web.de</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* মেইন নেভিগেশন বার */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white main-navbar shadow-sm py-2">
        {/* container ব্যবহার করা হয়েছে যাতে সব স্ক্রিনে একই মার্জিন থাকে */}
        <div className="container">
          <div className="logo-area d-flex align-items-center">
            <Link to="/">
              <img src="/logo.webp" alt="S.I.B.A.G Logo" className="site-logo" />
            </Link>
          </div>

          <button 
            className="navbar-toggler border-0 pe-0" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasNavbar" 
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav gap-4 fw-bold small text-uppercase">
              <li className="nav-item"><Link to="/" className="nav-link">STARTSEITE</Link></li>
              <li className="nav-item"><Link to="/leistungen" className="nav-link">LEISTUNGEN</Link></li>
              <li className="nav-item"><Link to="/uber-uns" className="nav-link">ÜBER UNS</Link></li>
              <li className="nav-item"><Link to="/referenzen" className="nav-link">REFERENZEN</Link></li>
              <li className="nav-item"><Link to="/kontakt" className="nav-link">KONTAKT</Link></li>
            </ul>
          </div>

          <div className="nav-action d-none d-lg-flex align-items-center gap-3">
            {/* Accessibility Dropdown */}
            <div 
              className="position-relative py-2" 
              onMouseEnter={() => setIsDropdownOpen(true)} 
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
             <div 
                className="d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                style={{ 
                  width: '26px', 
                  height: '26px', 
                  backgroundColor: '#f8f9fa', 
                  cursor: 'pointer', 
                  border: '1px solid #dee2e6',
                  /* 👇 এখান থেকে ডানে এবং বামে মার্জিন পরিবর্তন করতে পারবেন 👇 */
                  marginLeft: '10px', 
                  marginRight: '20px' 
                }}
              >
                <FaUniversalAccess style={{ color: '#0f2c59', fontSize: '20px' }} />
              </div>
              {isDropdownOpen && (
                <div 
                  className="dropdown-menu-custom shadow position-absolute bg-white rounded py-2 border"
                  style={{ right: '0', top: '100%', minWidth: '230px', zIndex: 1000 }}
                >
                  <ul className="list-unstyled mb-0 small fw-bold text-start">
                    <li className="py-2 px-3 border-bottom">
                      <Link to="/leichte-sprache" style={{ textDecoration: 'none', color: '#0f2c59' }} onClick={() => setIsDropdownOpen(false)}>
                        Leichte Sprache
                      </Link>
                    </li>
                    <li className="py-2 px-3 border-bottom">
                      <Link to="/Gebärdensprache" style={{ textDecoration: 'none', color: '#0f2c59' }} onClick={() => setIsDropdownOpen(false)}>
                        Gebärdensprache
                      </Link>
                    </li>
                    <li className="py-2 px-3">
                      <Link to="/Barrierefreiheit" style={{ textDecoration: 'none', color: '#0f2c59' }} onClick={() => setIsDropdownOpen(false)}>
                        Barrierefreiheit
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link 
              to="/kontakt" 
              className="btn btn-quote px-3 py-2 text-white fw-bold text-nowrap" 
              style={{ backgroundColor: '#0f2c59', fontSize: '14px', position: 'relative', bottom: '2px' }}
            >
              GRATIS ANGEBOT →
            </Link>
          </div>
        </div>
      </nav>

      {/* মোবাইল স্লাইডার মেনু */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar">
        <div className="offcanvas-header bg-light border-bottom">
          <h5 className="offcanvas-title fw-bold" style={{ color: '#0f2c59' }}>S.I.B.A.G</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav flex-grow-1 pe-3 gap-2 fw-bold text-uppercase fs-6">
            <li className="nav-item"><Link to="/" className="nav-link" onClick={closeMenu}>STARTSEITE</Link></li>
            <li className="nav-item"><Link to="/leistungen" className="nav-link" onClick={closeMenu}>LEISTUNGEN</Link></li>
            <li className="nav-item"><Link to="/uber-uns" className="nav-link" onClick={closeMenu}>ÜBER UNS</Link></li>
            <li className="nav-item"><Link to="/referenzen" className="nav-link" onClick={closeMenu}>REFERENZEN</Link></li>
            <li className="nav-item"><Link to="/kontakt" className="nav-link" onClick={closeMenu}>KONTAKT</Link></li>
          </ul>

          {/* মোবাইল মেনুর ভেতরেও এক্সেসিবিলিটি অপশন যুক্ত করা হলো */}
          <div className="mt-3 pt-3 border-top">
            <div className="fw-bold mb-2 text-muted small">BARRIEREFREIHEIT</div>
            <ul className="list-unstyled ps-2 gap-2 d-flex flex-column">
              <li><Link to="/leichte-sprache" className="text-decoration-none text-dark" onClick={closeMenu}>• Leichte Sprache</Link></li>
              <li><Link to="/Gebärdensprache" className="text-decoration-none text-dark" onClick={closeMenu}>• Gebärdensprache</Link></li>
              <li><Link to="/Barrierefreiheit" className="text-decoration-none text-dark" onClick={closeMenu}>• Barrierefreiheit</Link></li>
            </ul>
          </div>

          <div className="mt-4">
            <Link to="/kontakt" className="btn w-100 fw-bold" style={{ backgroundColor: '#0f2c59', color: '#fff' }} onClick={closeMenu}>
              GRATIS ANGEBOT →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;