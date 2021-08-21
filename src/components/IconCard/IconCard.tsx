import React from 'react';
import styles from './IconCard.mod.scss';
import { Icon, IconName } from '../Icon/Icon';

export interface IconCardProps {
  iconName: IconName;
}

export const IconCard: React.FC<IconCardProps> = ({ iconName, children }) => (
  <div className={styles.iconCard}>
    <Icon name={iconName} iconProps={{ className: styles.icon }} />
    <div className={styles.textContent}>{children}</div>
  </div>
);
