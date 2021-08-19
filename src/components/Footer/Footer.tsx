import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.mod.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <div style={{ fontSize: '1.2rem' }}>Thanks for stopping by!</div>
    <div
      style={{
        display: 'flex',
        width: '7rem',
        justifyContent: 'space-between',
        padding: '3rem 0',
      }}
    >
      <a href="https://www.linkedin.com/in/ian-zhang/" style={{ color: 'inherit', textDecoration: 'none' }}>
        <FaLinkedin size="2rem" />
      </a>
      <a href="mailto:ianzh4ng@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
        <FaEnvelope size="2rem" />
      </a>
    </div>

    <div style={{ fontSize: '0.9rem' }}>Copyright Ian Zhang 2019 ©</div>
  </footer>
);
