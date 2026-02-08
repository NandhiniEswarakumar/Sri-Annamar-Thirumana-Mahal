import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogImage,
  schema 
}) {
  const location = useLocation();

  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', description, true);
      updateMetaTag('twitter:description', description, true);
    }

    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    if (title) {
      updateMetaTag('og:title', title, true);
      updateMetaTag('twitter:title', title, true);
    }

    if (ogImage) {
      updateMetaTag('og:image', ogImage, true);
      updateMetaTag('twitter:image', ogImage, true);
    }

    // Update canonical URL
    const canonicalUrl = canonical || `${window.location.origin}${location.pathname}`;
    let linkElement = document.querySelector('link[rel="canonical"]');
    
    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'canonical');
      document.head.appendChild(linkElement);
    }
    
    linkElement.setAttribute('href', canonicalUrl);

    // Update OG URL
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('twitter:url', canonicalUrl, true);

    // Add structured data if provided
    if (schema) {
      const scriptId = 'structured-data-schema';
      let scriptElement = document.getElementById(scriptId);
      
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      
      scriptElement.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, canonical, ogImage, schema, location]);

  return null;
}
