import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="kontakt" className="site-footer py-5">
      <div className="container">
        <div className="row g-4 text-center text-md-start justify-content-between">
          
          {/* ১. লোগো এবং ইমারজেন্সি BOX */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start">
            <img src="/logo.webp" alt="SIBAG Logo" className="footer-logo mb-4" />
            
            <div className="emergency-box d-flex align-items-center p-2 border rounded mb-3">
              <div className="emergency-num fw-bold me-3">24/7</div>
              <div className="text-start emergency-text">
                <span className="fw-bold">NOTDIENST</span><br />
                <span>AUF ANFRAGE</span>
              </div>
            </div>

            {/* সোশ্যাল মিডিয়া আইকনগুলো */}
            <div className="social-icons-wrapper">
              <a href="#" className="social-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>

          {/* ২. LEISTUNGEN */}
          <div className="col-6 col-md-2">
            <h6 className="footer-heading text-uppercase fw-bold mb-3">LEISTUNGEN</h6>
            <ul className="list-unstyled ps-0">
              <li className="mb-1"><a href="#leistungen" className="footer-link">Gebäudereinigung</a></li>
              <li className="mb-1"><a href="#leistungen" className="footer-link">Baureinigung</a></li>
              <li className="mb-1"><a href="#leistungen" className="footer-link">Bauleistungen</a></li>
              <li className="mb-1"><a href="#leistungen" className="footer-link">Facility Service</a></li>
            </ul>
          </div>

          {/* ৩. UNTERNEHMEN */}
          <div className="col-6 col-md-2">
            <h6 className="footer-heading text-uppercase fw-bold mb-3">UNTERNEHMEN</h6>
            <ul className="list-unstyled ps-0">
              <li className="mb-1"><a href="#uber-uns" className="footer-link">Über uns</a></li>
              <li className="mb-1"><a href="#referenzen" className="footer-link">Referenzen</a></li>
              <li className="mb-1"><a href="#kontakt" className="footer-link">Karriere</a></li>
              <li className="mb-1"><a href="#kontakt" className="footer-link">Kontakt</a></li>
            </ul>
          </div>

          {/* ৪. KONTAKT */}
          <div className="col-12 col-md-3">
            <h6 className="footer-heading text-uppercase fw-bold mb-3">KONTAKT</h6>
            <ul className="list-unstyled ps-0 contact-list">
              <li className="mb-2 d-flex align-items-start justify-content-center justify-content-md-start gap-2">
                <span>📞</span> <span>+49 172 6302135</span>
              </li>
              <li className="mb-2 d-flex align-items-start justify-content-center justify-content-md-start gap-2">
                <span>✉️</span> <span>Info.sibaggmbh@web.de</span>
              </li>
              <li className="mb-2 d-flex align-items-start justify-content-center justify-content-md-start gap-2">
                <span>📍</span> <span>Ebersstraße 61, 10827 Berlin</span>
              </li>
            </ul>
             
            {/* ট্যাক্স আইডি সেকশন */}
            <div className="tax-info-section">
              <div className="tax-row">
                Umsatz ID Nr:&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-white">DE463530931</span>
              </div>
              <div className="tax-row">
                Steuern Nr: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-white">29/533/31003</span>
              </div>
              <div className="tax-row">
                HRB: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-white">288 177 B</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;