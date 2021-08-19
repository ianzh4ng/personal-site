import React from 'react';
import { Header, ContentSection, Footer } from 'src/components';
import styles from './App.mod.scss';

export const App = () => (
  <div className={styles.app}>
    <Header />
    <ContentSection />
    <Footer />
  </div>
);
