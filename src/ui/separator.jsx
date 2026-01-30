import styled, { css } from 'styled-components';

const SeparatorSc = styled.div`
  flex-shrink: 0;
  transition-property: border;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  ${({ $styles }) => $styles}

  ${({ $orientation }) => {
    switch ($orientation) {
      case 'horizontal':
        return css`
          width: 100%;
          height: 1px;
          border-bottom: 1px solid var(--border);
        `;
      case 'vertical':
        return css`
          width: 1px;
          border-right: 1px solid var(--border);
          align-self: stretch;
        `;
      default:
        return css`
          width: 100%;
          height: 1px;
        `;
    }
  }}

  ${({ $decorative }) =>
    $decorative &&
    css`
      pointer-events: none;
    `}
`;

export const Separator = ({
  orientation = 'horizontal',
  decorative = true,
  className,
  styles,
  ...rest
}) => {
  return (
    <SeparatorSc
      role={decorative ? 'none' : 'separator'}
      aria-orientation={!decorative ? orientation : undefined}
      $orientation={orientation}
      $decorative={decorative}
      $styles={styles}
      className={className}
      {...rest}
    />
  );
};

