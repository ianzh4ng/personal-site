import React from 'react';
import { IconCard, TextLink } from 'src/components';
import styles from './ContentSection.mod.scss';
import i18n from 'src/content/content';

export const ContentSection = () => (
  <section className={styles.contentSection}>
    <IconCard iconName="suitcase">
      <div>{i18n.jobText1}</div>
      <div>
        {i18n.jobText2}
        <TextLink
          href="https://drive.google.com/file/d/1hRZlWG9PBJkx4ERYPccFb17JZkisyB82/view?usp=sharing"
          external
        >
          {i18n.jobText3}
        </TextLink>
      </div>
    </IconCard>
    <IconCard iconName="tableTennis">
      <div>{i18n.hobbyText1}</div>
      <div>{i18n.hobbyText2}</div>
    </IconCard>
    <IconCard iconName="mapMarker">
      <div>{i18n.locationText1}</div>
      <div>{i18n.locationText2}</div>
    </IconCard>
  </section>
);
