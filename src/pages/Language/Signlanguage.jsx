import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Signlanguage.css';

const Signlanguage = () => {
  return (
    <>
      <Helmet>
        <title>Gebärdensprache & Inklusion | S.I.B.A.G Facility Service GmbH</title>
        <meta name="description" content="Entdecken Sie unsere Erklärvideos in Deutscher Gebärdensprache (DGS) für eine barrierefreie und inklusive Navigation auf unserer Website." />
      </Helmet>

      <div className="sign-language-page container py-5">
        <div 
          className="content-section p-4 p-md-5 rounded shadow-sm" 
          style={{ 
            color: '#0f2c59', 
            backgroundColor: '#f8f9fa', 
            border: '1px solid #dee2e6' 
          }}
        >
          <h1 className="mb-4 fw-bold pb-2" style={{ color: '#0f2c59', borderBottom: '2px solid #82b440' }}>
            Gebärdensprache & Barrierefreiheit
          </h1>
          
          <h4 className="fw-semibold mb-4" style={{ color: '#0f2c59', opacity: 0.85 }}>
            Inklusive und barrierefreie Navigation bei der S.I.B.A.G Facility Service GmbH
          </h4>

          <p className="lead fw-semibold">
            Die S.I.B.A.G Facility Service GmbH steht für Chancengleichheit, Inklusion und umfassende Unterstützung für alle Nutzerinnen und Nutzer.
          </p>
          
          <p>
            Auf dieser Seite finden gehörlose und schwerhörige Menschen spezielle Erklärvideos in Deutscher Gebärdensprache (DGS). Diese Videos veranschaulichen detailliert, wie Sie sich auf unserer Plattform orientieren und unsere Dienstleistungen im Bereich Gebäudereinigung und Bauleistungen einfach nutzen können.
          </p>

          <p>
            Zusätzlich bieten wir wichtige Inhalte auch in Leichter Sprache an, um komplexe Themen für Menschen mit Lernschwierigkeiten oder geringeren Sprachkenntnissen verständlich aufzubereiten.
          </p>

          <p>
            Unser oberstes Ziel ist es, unsere digitalen Inhalte für jeden Menschen uneingeschränkt zugänglich zu machen – völlig unabhängig von körperlichen oder sprachlichen Barrieren.
          </p>

          <div className="mt-5 p-4 rounded shadow-sm" style={{ backgroundColor: '#ffffff', borderLeft: '4px solid #82b440', border: '1px solid #dee2e6' }}>
            <h5 className="fw-bold mb-2" style={{ color: '#0f2c59' }}>Ein wichtiger Schritt zur digitalen Inklusion</h5>
            <p className="mb-0 text-muted">
              Mit diesen Angeboten möchten wir sicherstellen, dass unsere Website für alle Besucherinnen und Besucher barrierefrei, transparent und benutzerfreundlich bleibt.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signlanguage;