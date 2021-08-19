import React from 'react';
import { IconCard, TextLink } from 'src/components';
import { FaMapMarkerAlt, FaSuitcase, FaTableTennis } from 'react-icons/fa';
import styles from './ContentSection.mod.scss';
import i18n from 'src/content/content';

export const ContentSection = () => (
  <section className={styles.contentSection}>
    <IconCard Icon={FaSuitcase}>
      <div>
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
      </div>
    </IconCard>
    <IconCard Icon={FaTableTennis}>
      <div>{i18n.hobbyText}</div>
    </IconCard>
    <IconCard Icon={FaMapMarkerAlt}>
      <div>
        <div>{i18n.locationText1}</div>
        <div>{i18n.locationText2}</div>
      </div>
    </IconCard>
  </section>
);
