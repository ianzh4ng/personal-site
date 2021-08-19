import React from 'react';
import styles from './IconCard.mod.scss';
import { IconType } from 'react-icons';

export interface IconCardProps {
  Icon: IconType;
}

export const IconCard: React.FC<IconCardProps> = ({ Icon, children }) => (
  <div className={styles.iconCard}>
    <Icon className={styles.icon} />
    {children}
  </div>
);
