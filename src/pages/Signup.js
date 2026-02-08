import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function Signup() {
  const { language } = useLanguage();
  const t = translations[language].signup;

  return (
    <div className="page-content auth-page">
      <div className="auth-card">
        <h2>{t.title}</h2>
        <p>{t.subtitle}</p>
        <form>
          <label>
            {t.name}
            <input type="text" placeholder={t.name} />
          </label>
          <label>
            {t.email}
            <input type="email" placeholder={t.email} />
          </label>
          <label>
            {t.phone}
            <input type="text" placeholder={t.phone} />
          </label>
          <label>
            {t.password}
            <input type="password" placeholder={t.password} />
          </label>
          <PrimaryButton variant="gold" className="full-width">{t.signupButton}</PrimaryButton>
        </form>
        <span className="auth-footer">{t.haveAccount} <a href="/login">{t.login}</a></span>
      </div>
    </div>
  );
}
