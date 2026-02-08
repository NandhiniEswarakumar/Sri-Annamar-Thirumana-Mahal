import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';
import { galleryImages } from '../data/gallery';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function Gallery() {
  const [active, setActive] = useState(null);
  const { language } = useLanguage();
  const t = translations[language].gallery;

  return (
    <div className="page-content">
      <SEO 
        title="Wedding Gallery - Tamil Wedding Photos | Sri Annamar Mahal Ittlapatti"
        description="View beautiful photos of Tamil weddings and South Indian ceremonies celebrated at Sri Annamar Thirumana Mahal. See our spacious wedding hall, traditional mandapam decorations, and wedding arrangements."
        keywords="wedding gallery, Tamil wedding photos, South Indian wedding pictures, kalyana mandapam photos, wedding hall images, traditional mandapam decoration, wedding venue photos, marriage hall gallery"
      />
      <SectionHeader
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        align="left"
        titleTag="h1"
      />
      <div className="gallery-grid">
        {galleryImages.map((item) => (
          <button
            key={item.src}
            className="gallery-tile"
            onClick={() => setActive(item)}
            type="button"
          >
            <img src={item.src} alt={item.title} />
            <div className="gallery-overlay">
              <span>{item.title}</span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="lightbox-close" onClick={() => setActive(null)} type="button">
              ✕
            </button>
            <motion.img
              src={active.src}
              alt={active.title}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            />
            <p>{active.title}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
