import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h3>{t.nav.logoTitle}</h3>
          <p>{t.footer.tagline}</p>
        </div>
        <div>
          <h4>{t.footer.quickLinks}</h4>
          <ul>
            <li><Link to="/about">{t.nav.about}</Link></li>
            <li><Link to="/services">{t.footer.services}</Link></li>
            <li><Link to="/gallery">{t.nav.gallery}</Link></li>
            <li><Link to="/pricing">{t.nav.pricing}</Link></li>
          </ul>
        </div>
        <div>
          <h4>{t.footer.contact}</h4>
          <ul>
            <li>eswarakumar4@gmail.com</li>
            <li>+91 7867003495</li>
            <li>{t.contact.address}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t.footer.copyright}</span>
        <span>{t.footer.tagline}</span>
      </div>
    </footer>
  );
}
