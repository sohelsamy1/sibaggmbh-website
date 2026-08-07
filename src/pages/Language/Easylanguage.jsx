import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './EasyLanguage.css';

const EasyLanguage = () => {
  return (
    <>
      <Helmet>
        <title>Leichte Sprache - Übersicht | S.I.B.A.G Facility Service GmbH</title>
        <meta name="description" content="Alle wichtigen Informationen über unsere Gebäudereinigung und Bauleistungen einfach und verständlich in Leichter Sprache erklärt." />
      </Helmet>

      <div className="accessibility-page container py-5">
        {/* মেইন কন্টেন্ট সেকশন বক্স */}
        <div 
          className="content-section p-4 p-md-5 rounded shadow-sm mb-5" 
          style={{ 
            color: '#0f2c59', 
            backgroundColor: '#f8f9fa', 
            border: '1px solid #dee2e6' 
          }}
        >
          <h1 className="mb-3 fw-bold pb-2" style={{ color: '#0f2c59', borderBottom: '2px solid #82b440' }}>
            Leichte Sprache
          </h1>
          <h4 className="fw-semibold mb-4" style={{ color: '#0f2c59', opacity: 0.85 }}>
            Herzlich willkommen bei der S.I.B.A.G Facility Service GmbH
          </h4>
          
          <p className="lead">
            Wir sind Ihr zuverlässiger Partner für Gebäudereinigung, Baureinigung und professionelle Bauleistungen in Berlin und Umgebung.
          </p>
          <p>
            Um unseren Service für alle Menschen gleichermaßen verständlich und zugänglich zu machen, finden Sie hier die wichtigsten Informationen über unser Unternehmen und unsere Angebote auch in Leichter Sprache sowie in Gebärdensprache.
          </p>
          <p className="mb-0 fw-semibold">
            Wählen Sie einfach eines der untenstehenden Themen aus, um detaillierte Informationen zu erhalten.
          </p>
        </div>

        {/* কার্ড সেকশন */}
        <div className="row">
          {/* কার্ড ১: বারিয়েনফ্রিহাইট */}
          <div className="col-md-6 mb-4">
            <div 
              className="card h-100 shadow-sm border-0 rounded overflow-hidden" 
              style={{ borderTop: '4px solid #82b440 !important' }}
            >
              <img src="/Language/Language1.webp" alt="Erklärung zur Barrierefreiheit" className="card-img-top" style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body p-4 d-flex flex-column justify-content-between" style={{ backgroundColor: '#ffffff' }}>
                <div>
                  <h3 className="h4 fw-bold mb-3">
                    <Link to="/Barrierefreiheit" className="text-decoration-none" style={{ color: '#0f2c59' }}>
                      Erklärung zur Barrierefreiheit
                    </Link>
                  </h3>
                  <p className="text-muted mb-4">
                    Erfahren Sie hier alle wichtigen Informationen in Leichter Sprache zum Thema Barrierefreiheit auf unserer Website und wie wir diese kontinuierlich verbessern.
                  </p>
                </div>
                <div>
                  <Link 
                    to="/Barrierefreiheit" 
                    className="btn btn-sm fw-bold px-3 py-2 text-white" 
                    style={{ backgroundColor: '#82b440', border: 'none' }}
                  >
                    MEHR ERFAHREN →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* কার্ড ২: গেবার্ডেনস্প্রাচে */}
          <div className="col-md-6 mb-4">
            <div 
              className="card h-100 shadow-sm border-0 rounded overflow-hidden"
            >
              <img src="/Language/Language2.webp" alt="Gebärdensprache" className="card-img-top" style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body p-4 d-flex flex-column justify-content-between" style={{ backgroundColor: '#ffffff' }}>
                <div>
                  <h3 className="h4 fw-bold mb-3">
                    <Link to="/Gebärdensprache" className="text-decoration-none" style={{ color: '#0f2c59' }}>
                      Gebärdensprache
                    </Link>
                  </h3>
                  <p className="text-muted mb-4">
                    Hier stellen wir Ihnen sämtliche Informationen und Inhalte unseres Unternehmens ausführlich und verständlich in Gebärdensprache zur Verfügung.
                  </p>
                </div>
                <div>
                  <Link 
                    to="/Gebärdensprache" 
                    className="btn btn-sm fw-bold px-3 py-2 text-white" 
                    style={{ backgroundColor: '#82b440', border: 'none' }}
                  >
                    MEHR ERFAHREN →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EasyLanguage;