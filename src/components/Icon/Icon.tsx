import React from 'react';
import { IconType, IconBaseProps } from 'react-icons';
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaLinkedin,
  FaMapMarkerAlt,
  FaSuitcase,
  FaTableTennis,
} from 'react-icons/fa';

export interface IconProps {
  name: IconName;
  iconProps?: IconBaseProps;
}

export type IconName =
  | 'envelope'
  | 'externalLink'
  | 'linkedIn'
  | 'mapMarker'
  | 'suitcase'
  | 'tableTennis';

const iconMap: Record<IconName, IconType> = {
  envelope: FaEnvelope,
  externalLink: FaExternalLinkAlt,
  linkedIn: FaLinkedin,
  mapMarker: FaMapMarkerAlt,
  suitcase: FaSuitcase,
  tableTennis: FaTableTennis,
};

export const Icon: React.FC<IconProps> = ({ name, iconProps }) => {
  const _Icon = iconMap[name];
  return <_Icon size="32px" {...iconProps} />;
};
