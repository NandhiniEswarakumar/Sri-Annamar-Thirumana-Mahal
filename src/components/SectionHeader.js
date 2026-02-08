import React from 'react';

export default function SectionHeader({ 
  eyebrow, 
  title, 
  subtitle, 
  align = 'center',
  titleTag = 'h2' // Allow customization of heading level
}) {
  const TitleTag = titleTag;
  
  return (
    <div className={`section-header section-${align}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <TitleTag className="section-title">{title}</TitleTag>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
