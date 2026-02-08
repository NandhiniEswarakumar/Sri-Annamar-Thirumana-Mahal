import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingCall() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '7867003495';

  return (
    <motion.div
      className="floating-call-container"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.button
        className="floating-call-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Call Us"
      >
        <span className="call-icon">📞</span>
      </motion.button>

      <motion.div
        className="floating-call-popup"
        initial={{ opacity: 0, y: 20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <p>Call Us</p>
        <a href={`tel:${phoneNumber}`} className="phone-link">
          {phoneNumber}
        </a>
      </motion.div>
    </motion.div>
  );
}
