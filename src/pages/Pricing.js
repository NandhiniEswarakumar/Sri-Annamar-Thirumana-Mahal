import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import PrimaryButton from '../components/PrimaryButton';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function Pricing() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const tiers = t.home.packages;

  return (
    <div className="page-content">
      <SEO 
        title="Wedding Packages & Pricing - Budget Friendly Marriage Hall | Sri Annamar Mahal"
        description="Affordable wedding packages starting from ₹35,000. Budget-friendly marriage hall with flexible booking options for Tamil weddings. Compare our spacious wedding hall packages and book your kalyana mandapam today."
        keywords="wedding packages, wedding pricing, affordable wedding hall, budget friendly marriage hall, wedding hall booking prices, kalyana mandapam rates, Tamil wedding packages, marriage hall cost, wedding venue pricing, economical wedding hall"
      />
      <SectionHeader
        eyebrow={t.pricing.eyebrow}
        title={t.pricing.title}
        subtitle={t.pricing.subtitle}
        align="left"
        titleTag="h1"
      />
      <div className="pricing-grid">
        {tiers.map((tier, idx) => (
          <motion.div
            key={tier.title}
            className={`pricing-card ${idx === 1 ? 'featured' : ''}`}
            whileHover={{ y: -10 }}
          >
            <span className="pricing-eyebrow">{tier.title}</span>
            <h2>{tier.price}</h2>
            <ul>
              {tier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <PrimaryButton to="/contact">{t.pricing.bookNow}</PrimaryButton>
          </motion.div>
        ))}
      </div>
      <div className="cta-inline">
        <div>
          <h3>{t.pricing.ctaTitle}</h3>
          <p>{t.pricing.ctaSubtitle}</p>
        </div>
        <PrimaryButton to="/contact">{t.pricing.contactUs}</PrimaryButton>
      </div>
    </div>
  );
}
