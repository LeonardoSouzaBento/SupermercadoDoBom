import React from 'react';

const iconSizes = {
  xs: '0.937em',
  sm: '0.968em',
  md: '1em',
  lg: '1.033em',
  h6: '1.067em',
  h5: '1.138em',
  h4: '1.215em',
  h3: '1.383em',
  xl: '1.067em', // h6
  "2xl": '1.138em', // h5
  "3xl": '1.215em', // h4
  "4xl": '1.383em', // h3
};

export const Icon = ({ size, LucideIcon, strokeValue, styles }) => {
  return (
    <LucideIcon
      size={iconSizes[size] || size || '1em'}
      strokeWidth={strokeValue || 2.8}
      style={styles || {}}
    />
  );
};
