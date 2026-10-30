import React from 'react';
import { Link } from 'react-router-dom';

function HomeService() {
  // ==========================================
  // IMAGE HEIGHT CONTROL: Apni ekhane '180px' er jaygay 
  // nijer moto barate ba komate parben (e.g., '160px', '200px')
  // ==========================================
  const imgHeight = '210px'; 
  const iconTop = '185px'; // imgHeight onujayi adjust kora holo

  const services = [
    { title: 'GEBÄUDEREINIGUNG', image: '/card1.webp', icon: '🏢', points: ['Unterhaltsreinigung', 'Büroreinigung', 'Treppenhausreinigung', 'Praxisreinigung', 'Industriereinigung', 'Sonderreinigung'] },
    { title: 'BAUREINIGUNG', image: '/card2.webp', icon: '🏗️', points: ['Baugrobreinigung', 'Bauzwischenreinigung', 'Bauendreinigung', 'Baustellenreinigung', 'Entsorgung von Bauschutt'] },
    { title: 'BAULEISTUNGEN', image: '/card3.webp', icon: '🛠️', points: ['Rohbauarbeiten', 'Schalungsarbeiten', 'Betonarbeiten', 'Eisenflechten & Bewehrung', 'Maurerarbeiten', 'Allgemeine Bauarbeiten'] },
    { title: 'FACILITY SERVICE', image: '/card4.webp', icon: '🏠', points: ['Hausmeisterservice', 'Objektbetreuung', 'Kleinreparaturen', 'Winterdienst', 'Außenanlagenpflege', 'Kontrollgänge'] }
  ];

  return (
    <section id="leistungen" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <span className="text-uppercase fw-bold" style={{ color: '#8cc63f', fontSize: '13px', letterSpacing: '1px' }}>UNSERE LEISTUNGEN</span>
          <h2 className="fw-bold mt-1 mb-4" style={{ color: '#0f2c59', fontSize: '28px' }}>KOMPETENZ IN JEDEM BEREICH</h2>
          <div className="mx-auto" style={{ width: '45px', height: '3px', backgroundColor: '#8cc63f' }}></div>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              {/* Card container-e overflow-hidden ebong rounded-3 jog kora hoyeche */}
              <div className="card h-100 border-0 shadow-sm bg-light d-flex flex-column position-relative overflow-hidden rounded-3">
                
                {/* ইমেজ সেকশন */}
                <div className="w-100 bg-white d-flex align-items-center justify-content-center overflow-hidden" style={{ height: imgHeight }}>
                  <img src={service.image} alt={service.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
                
                {/* গোল আইকন */}
                <div className="position-absolute d-flex align-items-center justify-content-center" 
                     style={{ top: iconTop, left: '50%', transform: 'translateX(-50%)', width: '50px', height: '50px', backgroundColor: '#0f2c59', color: '#fff', borderRadius: '50%', fontSize: '20px', border: '3px solid #f8f9fa', zIndex: 1 }}>
                  {service.icon}
                </div>

                <div className="card-body pt-5 d-flex flex-column">
                  <h5 className="fw-bold text-center mb-4 mt-2" style={{ color: '#0f2c59', fontSize: '15px' }}>{service.title}</h5>
                  <ul className="list-unstyled mb-4" style={{ paddingLeft: '5px' }}>
                    {service.points.map((point, pIndex) => (
                      <li key={pIndex} className="mb-2" style={{ fontSize: '13px', color: '#333' }}>
                        <span className="me-2" style={{ color: '#8cc63f' }}>✓</span> {point}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <Link to="/leistungen" className="btn w-100 fw-bold d-flex align-items-center justify-content-center" 
                      style={{ 
                        backgroundColor: '#8cc63f', 
                        color: '#fff', 
                        padding: '10px 15px', 
                        borderRadius: '4px',
                        fontSize: '14px'
                      }}>
                      MEHR ERFAHREN <span className="ms-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeService;