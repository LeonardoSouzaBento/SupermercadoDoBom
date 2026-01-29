import { X } from 'lucide-react';
import { Button, Icon } from '.';
import { css } from 'styled-components';

const iconSizes = {
  'icon-sm': 'lg',
  icon: 'xl',
  'icon-lg': '2xl',
};

const CloseButton = ({ setOpenState, size, variant, styles, ...props }) => {
  return (
    <Button
      styles={css`
        border-radius: 999px;
        ${styles}
      `}
      variant={variant || 'secondary'}
      size={size || 'icon-sm'}
      onClick={() => {
        setOpenState(false);
      }}
      {...props}>
      <Icon LucideIcon={X} size={iconSizes[size] || 'lg'} />
    </Button>
  );
};

export { CloseButton };

