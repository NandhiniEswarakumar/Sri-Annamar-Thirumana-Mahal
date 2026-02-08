import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function Login() {
  const { language } = useLanguage();
  const t = translations[language].login;

  return (
    <div className="page-content auth-page">
      <div className="auth-card">
        <h2>{t.title}</h2>
        <p>{t.subtitle}</p>
        <form>
          <label>
            {t.email}
            <input type="email" placeholder={t.email} />
          </label>
          <label>
            {t.password}
            <input type="password" placeholder="••••••••" />
          </label>
          <PrimaryButton variant="gold" className="full-width">{t.loginButton}</PrimaryButton>
        </form>
        <span className="auth-footer">{t.noAccount} <a href="/signup">{t.signup}</a></span>
      </div>
    </div>
  );
}
