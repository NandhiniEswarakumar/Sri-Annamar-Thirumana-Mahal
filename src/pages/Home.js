import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import PrimaryButton from '../components/PrimaryButton';
import SEO from '../components/SEO';
import { galleryImages } from '../data/gallery';
import mahalImage from '../assests/mahal.jpg';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const countdownTarget = new Date('2026-06-20T16:00:00');

function useCountdown(target) {
  const calculate = useCallback(() => {
    const diff = Math.max(target.getTime() - new Date().getTime(), 0);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }, [target]);

  const [timeLeft, setTimeLeft] = useState(calculate());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(timer);
  }, [calculate]);

  return timeLeft;
}

export default function Home() {
  const [index, setIndex] = useState(0);
  const { days, hours, minutes, seconds } = useCountdown(countdownTarget);
  const { language } = useLanguage();
  const t = translations[language].home;

  const slides = useMemo(() => [
    { image: mahalImage, ...t.slides[0] },
    { image: mahalImage, ...t.slides[1] },
    { image: mahalImage, ...t.slides[2] },
  ], [t.slides]);

  const services = t.services;
  const packages = t.packages;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[index];
  const previewGallery = useMemo(() => galleryImages.slice(0, 4), []);

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sri Annamar Thirumana Mahal - Best Wedding Hall & Kalyana Mandapam",
    "description": "Spacious wedding hall and kalyana mandapam with all facilities for South Indian weddings. Budget-friendly marriage hall with parking facilities near Ittlapatti.",
    "url": "https://sriannamarmahal.com"
  };

  return (
    <div className="home">
      <SEO 
        title="Sri Annamar Thirumana Mahal - Best Wedding Hall Near Me | Kalyana Mandapam"
        description="Spacious wedding hall and kalyana mandapam with all facilities for South Indian weddings. Budget-friendly marriage hall with parking facilities. Book your dream Tamil wedding venue today!"
        keywords="Sri Annamar Mahal, wedding venues near me, marriage halls near me, kalyana mandapam near me, wedding halls, South Indian wedding, Tamil wedding hall, budget friendly mahal, spacious mahal, marriage mahal with parking facilities, wedding hall booking, affordable wedding venue, traditional mandapam"
        schema={seoSchema}
      />
      <section className="hero">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.title}
            className="hero-slide"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{ backgroundImage: `url(${activeSlide.image})` }}
          >
            <div className="hero-overlay" />
            <div className="hero-content">
              <motion.span
                className="hero-eyebrow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t.eyebrow}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                {activeSlide.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {activeSlide.subtitle}
              </motion.p>
              <div className="hero-actions">
                <PrimaryButton to="/contact">{t.bookKalyanam}</PrimaryButton>
                <PrimaryButton to="/gallery" variant="ghost">{t.viewMandapam}</PrimaryButton>
              </div>
              <div className="hero-indicators">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`indicator ${idx === index ? 'active' : ''}`}
                    onClick={() => setIndex(idx)}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="section luxury-grid">
        <SectionHeader
          eyebrow={t.servicesEyebrow}
          title={t.servicesTitle}
          subtitle={t.servicesSubtitle}
          titleTag="h2"
        />
        <div className="card-grid">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="glass-card"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <PrimaryButton to="/services" variant="ghost">{t.explore}</PrimaryButton>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section countdown-section">
        <div className="countdown-card">
          <div>
            <span className="section-eyebrow">{t.countdownEyebrow}</span>
            <h4>{t.countdownTitle}</h4>
            <p>{t.countdownSubtitle}</p>
          </div>
          <div className="countdown-grid">
            {[
              { label: t.countdownLabels.days, value: days },
              { label: t.countdownLabels.hours, value: hours },
              { label: t.countdownLabels.minutes, value: minutes },
              { label: t.countdownLabels.seconds, value: seconds },
            ].map((item) => (
              <div key={item.label} className="countdown-item">
                <span>{String(item.value).padStart(2, '0')}</span>
                <small>{item.label}</small>
              </div>
            ))}
          </div>
          <PrimaryButton to="/contact" variant="cream">{t.bookAuspiciousDate}</PrimaryButton>
        </div>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow={t.galleryEyebrow}
          title={t.galleryTitle}
          subtitle={t.gallerySubtitle}
          titleTag="h3"
        />
        <div className="gallery-grid">
          {previewGallery.map((item) => (
            <div key={item.src} className="gallery-tile">
              <img src={item.src} alt={item.title} />
              <div className="gallery-overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="center-action">
          <PrimaryButton to="/gallery" variant="ghost">{t.viewFullGallery}</PrimaryButton>
        </div>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow={t.pricingEyebrow}
          title={t.pricingTitle}
          titleTag="h3"
        />
        <div className="pricing-grid">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.title}
              className={`pricing-card ${idx === 1 ? 'featured' : ''}`}
              whileHover={{ y: -10 }}
            >
              <h4>{pkg.title}</h4>
              <h5>{pkg.price}</h5>
              <h4>{pkg.price}</h4>
              <ul>
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <PrimaryButton to="/contact">{t.bookConsultation}</PrimaryButton>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section location-section">
        <div className="location-card">
          <div className="location-icon">📍</div>
          <h3>Visit Us</h3>
          <p className="location-address">{translations[language].contact.address}</p>
          <div className="location-details">
            <p><strong>Phone:</strong> +91 7867003495</p>
            <p><strong>Email:</strong> eswarakumar4@gmail.com</p>
          </div>
          <PrimaryButton to="/contact" variant="ghost">View on Map</PrimaryButton>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h5>{t.ctaTitle}</h5>
          <p>{t.ctaSubtitle}</p>
          <div className="hero-actions">
            <PrimaryButton to="/signup">{t.checkAvailability}</PrimaryButton>
            <PrimaryButton to="/contact" variant="ghost">{t.callUs}</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
