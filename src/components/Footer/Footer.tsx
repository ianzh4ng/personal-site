import React from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Footer.mod.scss';
import i18n from 'src/content/content';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerText}>{i18n.footerText}</div>
    <div className={styles.iconBar}>
      <a
        href="mailto:ianzh4ng@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          name="envelope"
          iconProps={{
            onClick: () => {
              gtag('event', 'click', { event_category: 'Hit Mail' });
            },
          }}
        />
      </a>
      <a
        href="https://github.com/ianzh4ng"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          name="github"
          iconProps={{
            onClick: () => {
              gtag('event', 'click', { event_category: 'View GitHub' });
            },
          }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/ian-zhang/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          name="linkedIn"
          iconProps={{
            onClick: () => {
              gtag('event', 'click', { event_category: 'View LinkedIn' });
            },
          }}
        />
      </a>
    </div>
    <div className={styles.copyright}>{i18n.copyright}</div>
  </footer>
);
