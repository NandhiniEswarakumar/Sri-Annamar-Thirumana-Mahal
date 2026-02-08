import React from 'react';
import SectionHeader from '../components/SectionHeader';
import PrimaryButton from '../components/PrimaryButton';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const navTitle = translations[language].nav.logoTitle;

  return (
    <div className="page-content">
      <SEO 
        title="Contact Us - Book Wedding Hall | Sri Annamar Mahal Ittlapatti"
        description="Contact Sri Annamar Thirumana Mahal to book your wedding venue. Located near Theerthamalai Pirivu Road, Ittlapatti. Call +91 7867003495 for wedding hall booking and inquiries."
        keywords="contact wedding hall, book kalyana mandapam, wedding venue booking, marriage hall contact, Sri Annamar Mahal contact, Ittlapatti wedding hall, Theerthamalai wedding venue, wedding hall inquiry, book marriage hall"
      />
      <SectionHeader
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        align="left"
        titleTag="h1"
      />
      <div className="contact-grid">
        <div className="contact-card">
          <h2>{navTitle}</h2>
          <p>{t.address}</p>
          <p>eswarakumar4@gmail.com</p>
          <p>+91 7867003495</p>
          <div className="contact-pill">{t.byAppointment}</div>
        </div>
        <form className="contact-form">
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
            {t.message}
            <textarea rows="4" placeholder={t.message} />
          </label>
          <PrimaryButton>{t.send}</PrimaryButton>
        </form>
      </div>
      
      <div className="map-section">
        <h2>Find Us Here</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.5768!2d78.5484508!3d12.1768718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac678f9d421beb%3A0x1ec15f13395d7370!2sSri%20Annamar%20Mahal!5e0!3m2!1sen!2sin!4v1707142800000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sri Annamar Mahal Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
