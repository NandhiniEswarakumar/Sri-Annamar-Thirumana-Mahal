import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  const navItems = [
    { to: '/', label: t.home },
    { to: '/about', label: t.about },
    { to: '/services', label: t.services },
    { to: '/gallery', label: t.gallery },
    { to: '/pricing', label: t.pricing },
    { to: '/contact', label: t.contact },
  ];

  return (
    <header className="nav-wrapper">
      <div className="nav-blur" />
      <nav className="nav">
        <div className="logo">
          <span className="logo-mark">{t.logoTitle}</span>
          <span className="logo-sub"></span>
        </div>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <button className="language-toggle" onClick={toggleLanguage} aria-label="Toggle language">
            <span className="lang-option">{language === 'en' ? 'English' : 'தமிழ்'}</span>
            <span className="lang-switch">
              <span className={`switch-indicator ${language === 'ta' ? 'active' : ''}`} />
            </span>
            <span className="lang-option">{language === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>
          <NavLink to="/login" onClick={() => setOpen(false)} className="ghost-link">
            {t.login}
          </NavLink>
          <PrimaryButton to="/signup" variant="cream" className="nav-cta" onClick={() => setOpen(false)}>
            {t.bookDate}
          </PrimaryButton>
        </div>
      </nav>
    </header>
  );
}
