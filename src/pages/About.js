import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import PrimaryButton from '../components/PrimaryButton';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="page-content">
      <SEO 
        title="About Sri Annamar Mahal - Traditional Wedding Venue | South Indian Marriage Hall"
        description="Learn about Sri Annamar Thirumana Mahal - a traditional Tamil wedding venue established in 2021. Spacious kalyana mandapam with all facilities for authentic South Indian weddings near Ittlapatti."
        keywords="about Sri Annamar Mahal, traditional wedding venue, Tamil wedding hall, South Indian marriage hall, kalyana mandapam Ittlapatti, authentic wedding venue, traditional mandapam, wedding hall history"
      />
      <SectionHeader
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        align="left"
        titleTag="h1"
      />
      <div className="split-layout">
        <motion.div className="split-text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p>{t.para1}</p>
          <p>{t.para2}</p>
          <p>{t.para3}</p>
          <p>{t.para4}</p>
          <div className="hero-actions">
            <PrimaryButton to="/contact">{t.visitUs}</PrimaryButton>
            <PrimaryButton to="/gallery" variant="ghost">{t.viewMandapam}</PrimaryButton>
          </div>
        </motion.div>
        <motion.div className="split-media" whileHover={{ rotateY: 6, rotateX: 2 }}>
          <img
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80"
            alt="Traditional South Indian Wedding"
          />
        </motion.div>
      </div>
    </div>
  );
}
