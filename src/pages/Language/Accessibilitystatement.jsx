import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Accessibilitystatement.css';

const Accessibilitystatement = () => {
  return (
    <>
      <Helmet>
        <title>Erklärung zur Barrierefreiheit | S.I.B.A.G Facility Service GmbH</title>
        <meta name="description" content="Erfahren Sie die offizielle Erklärung zur Barrierefreiheit der S.I.B.A.G Facility Service GmbH gemäß BITV 2.0 für einen barrierefreien Zugang." />
      </Helmet>

      <div className="accessibility-page container py-5">
        <div 
          className="content-section p-4 p-md-5 rounded shadow-sm" 
          style={{ 
            color: '#0f2c59', 
            backgroundColor: '#f8f9fa', 
            border: '1px solid #dee2e6' 
          }}
        >
          {/* 👇 মেইন টাইটেলের নিচে সবুজ রঙের আন্ডারলাইন যুক্ত করা হলো 👇 */}
          <h1 className="mb-4 fw-bold pb-2" style={{ color: '#0f2c59', borderBottom: '2px solid #82b440' }}>
            Erklärung zur Barrierefreiheit
          </h1>
          <h3 className="h4 mb-4" style={{ color: '#0f2c59', opacity: 0.85 }}>Die wichtigsten Informationen in Leichter Sprache</h3>
          
          <p className="lead fw-semibold">
            Die S.I.B.A.G Facility Service GmbH ist bemüht, ihre Website im Einklang mit den nationalen Rechtsvorschriften zur Umsetzung der Richtlinie (EU) 2016/2102 des Europäischen Parlaments barrierefrei zugänglich zu machen.
          </p>
          
          <p>
            Diese Internetseite ist derzeit <strong>nur teilweise barrierefrei</strong>. Wir arbeiten kontinuierlich daran, unsere digitalen Angebote für alle Nutzerinnen und Nutzer zu verbessern und die Anforderungen der BITV 2.0 (Barrierefreie-Informationstechnik-Verordnung) bestmöglich zu erfüllen.
          </p>

          <h2 className="mt-5 h4 fw-bold pb-2" style={{ color: '#0f2c59', borderBottom: '2px solid #82b440' }}>
            Bedien- und Bedienelemente
          </h2>
          <p>
            Einige Bedienelemente, wie Logos oder verlinkte Grafiken, verfügen derzeit noch nicht durchgehend über aussagekräftige Alternativtexte.
          </p>
          <p>
            <strong>Warum sind Alternativtexte wichtig?</strong> Sie beschreiben den Inhalt oder die Funktion von Bildern und Grafiken. Dies ist insbesondere für Menschen mit Sehbehinderung von großer Bedeutung, da Screenreader (Vorlesegeräte) diese Texte erfassen und hörbar machen können.
          </p>

          <h2 className="mt-5 h4 fw-bold pb-2" style={{ color: '#0f2c59', borderBottom: '2px solid #82b440' }}>
            Struktur und Überschriften
          </h2>
          <p>
            Teilweise sind Überschriften auf unseren Seiten optisch lediglich als fett markierter Text gestaltet. 
          </p>
          <p>
            Für eine barrierefreie Nutzung ist es jedoch erforderlich, Überschriften technisch korrekt zu definieren. Nur so können assistive Technologien wie Screenreader für blinde oder sehbehinderte Menschen die Struktur der Seite fehlerfrei erkennen und eine strukturierte Navigation ermöglichen. Wir optimieren diese Bereiche fortlaufend.
          </p>

          <div className="mt-5 p-4 rounded shadow-sm" style={{ backgroundColor: '#ffffff', borderLeft: '4px solid #82b440', border: '1px solid #dee2e6' }}>
            <h4 className="h5 fw-bold" style={{ color: '#0f2c59' }}>Feedback und Kontakt</h4>
            <p className="mb-0">
              Sollten Ihnen Mängel in Bezug auf die Barrierefreiheit auf unserer Website auffallen, können Sie uns gerne kontaktieren. Wir freuen uns über Ihr Feedback, um unseren Service weiter zu verbessern.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessibilitystatement;