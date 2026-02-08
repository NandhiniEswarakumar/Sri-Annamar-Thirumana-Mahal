import React from 'react';
import SectionHeader from '../components/SectionHeader';
import PrimaryButton from '../components/PrimaryButton';
import SEO from '../components/SEO';

export default function BookNow() {
  return (
    <div className="page-content">
      <SEO 
        title="Book Your Event - Wedding Hall Booking | Sri Annamar Mahal"
        description="Book Sri Annamar Thirumana Mahal for your wedding, reception, or special event. Fill out our booking form and we'll get back to you within 24 hours."
        keywords="book wedding hall, kalyana mandapam booking, marriage hall reservation, wedding venue booking, event booking, Sri Annamar Mahal booking"
      />
      <SectionHeader
        eyebrow="Event Booking"
        title="Book Your Special Event"
        subtitle="Fill out this form and we'll get back to you within 24 hours"
        align="center"
        titleTag="h1"
      />
      
      <div className="booking-section">
        <form className="booking-form">
          <label>
            Full Name *
            <input type="text" placeholder="Enter your name" required />
          </label>
          <label>
            Email Address *
            <input type="email" placeholder="your@email.com" required />
          </label>
          <label>
            Phone Number *
            <input type="tel" placeholder="+91 XXXXX XXXXX" required />
          </label>
          <label>
            Event Type *
            <select required>
              <option value="">Select Event Type</option>
              <option value="wedding">Wedding Ceremony</option>
              <option value="reception">Wedding Reception</option>
              <option value="engagement">Engagement Ceremony</option>
              <option value="birthday">Birthday Party</option>
              <option value="anniversary">Anniversary Celebration</option>
              <option value="other">Other Event</option>
            </select>
          </label>
          <label>
            Event Date *
            <input type="date" required />
          </label>
          <label>
            Expected Guests *
            <input type="number" placeholder="Number of guests" min="50" required />
          </label>
          <label>
            Services Required
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" value="catering" />
                <span>Catering</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" value="decoration" />
                <span>Decoration</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" value="photography" />
                <span>Photography</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" value="music" />
                <span>Music System</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" value="lighting" />
                <span>Lighting</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" value="parking" />
                <span>Parking</span>
              </label>
            </div>
          </label>
          <label>
            Additional Requirements
            <textarea rows="4" placeholder="Any special requests or questions..." />
          </label>
          <PrimaryButton type="submit">Submit Booking Request</PrimaryButton>
        </form>
      </div>
    </div>
  );
}
