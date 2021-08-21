import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.mod.scss';
import i18n from 'src/content/content';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerText}>{i18n.footerText}</div>
    <div className={styles.iconBar}>
      <a href="https://www.linkedin.com/in/ian-zhang/">
        <FaLinkedin size="2rem" />
      </a>
      <a href="mailto:ianzh4ng@gmail.com">
        <FaEnvelope size="2rem" />
      </a>
    </div>

    <div className={styles.copyright}>{i18n.copyright}</div>
  </footer>
);
