import React from 'react';
import { Icon } from '../Icon/Icon';
import styles from './TextLink.mod.scss';

export interface TextLinkProps {
  href: string;
  external?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export const TextLink: React.FC<TextLinkProps> = ({
  href,
  external,
  onClick,
  children,
}) => (
  <a
    className={styles.textLink}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
  >
    {children}
    {external && (
      <Icon
        name="externalLink"
        iconProps={{ className: styles.externalIcon }}
      />
    )}
  </a>
);
