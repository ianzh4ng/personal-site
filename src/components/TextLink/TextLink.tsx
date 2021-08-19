import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export interface TextLinkProps {
  href: string;
  external?: boolean;
}

export const TextLink: React.FC<TextLinkProps> = ({
  href,
  external,
  children,
}) => (
  <a
    className="textLink"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'underline', color: 'inherit' }}
  >
    {children}
    {external && (
      <FaExternalLinkAlt
        size="0.7rem"
        style={{ marginLeft: '0.2em', marginBottom: '0.15rem' }}
      />
    )}
  </a>
);
