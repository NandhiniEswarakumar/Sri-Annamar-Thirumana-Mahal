import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import PrimaryButton from '../components/PrimaryButton';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <div className="page-content">
      <SEO 
        title="Wedding Services - Mandapam Setup, Catering & Traditional Ceremonies | Sri Annamar Mahal"
        description="Complete wedding services including traditional mandapam setup, priest coordination, catering, nadaswaram music, and all facilities for South Indian weddings. Budget-friendly wedding packages available."
        keywords="wedding services, mandapam setup, wedding catering, priest coordination, nadaswaram music, traditional wedding ceremonies, South Indian wedding services, Tamil wedding rituals, wedding packages, affordable wedding services"
      />
      <SectionHeader
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        align="left"
        titleTag="h1"
      />
      <div className="card-grid">
        {t.servicesList.map((service) => (
          <motion.div key={service.title} className="glass-card" whileHover={{ y: -10 }}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <PrimaryButton to="/contact" variant="ghost">{t.requestDetails}</PrimaryButton>
          </motion.div>
        ))}
      </div>
      <div className="cta-inline">
        <div>
          <h3>{t.ctaTitle}</h3>
          <p>{t.ctaSubtitle}</p>
        </div>
        <PrimaryButton to="/contact">{t.bookConsultation}</PrimaryButton>
      </div>
    </div>
  );
}
