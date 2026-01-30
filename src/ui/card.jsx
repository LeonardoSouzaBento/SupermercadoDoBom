import styled, { css } from 'styled-components';
import { Separator } from '@ui/index';

/* header */
const CardHeaderSc = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => props.$styles && props.$styles}
`;

export const CardHeader = ({
  children,
  mb = 2,
  mbMeasurement = 'ex',
  separator = false,
  styles,
  ...props
}) => {
  return (
    <CardHeaderSc
      data-class="card-header"
      $styles={styles}
      style={{ marginBottom: mb > 0 ? `${mb}${mbMeasurement}` : '' }}
      {...props}>
      {children}
      {separator && (
        <Separator
          styles={css`
            margin-top: 0.75ex;
          `}
        />
      )}
    </CardHeaderSc>
  );
};

/* titulo */
const TitleSc = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 0.8ex;
  color: var(--primary);
  ${(props) => props.$styles && props.$styles}
`;

export const CardTitle = ({ children, styles, ...props }) => {
  return (
    <TitleSc $styles={styles} {...props}>
      {children}
    </TitleSc>
  );
};

/* descrição */
const DescriptionSc = styled.div`
  font-size: var(--text-sm);
  color: var(--muted-foreground);
`;

export const CardDescription = ({ children, styles, ...props }) => {
  return (
    <DescriptionSc $styles={styles} {...props}>
      {children}
    </DescriptionSc>
  );
};

/* card */
const CardSc = styled.div`
  width: auto;
  height: auto;
  box-sizing: border-box;
  background: var(--card-background);
  color: var(--card-foreground);
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid var(--card-border);
  box-shadow: var(--shadow-md);
  padding: 24px;
  ${(props) =>
    props.$hasHeader &&
    css`
      padding-top: 18px;
    `}
  ${(props) => props.$styles && props.$styles}
`;

export const Card = ({ children, styles, hasHeader = true, ...props }) => {
  return (
    <CardSc $styles={styles} $hasHeader={hasHeader} {...props}>
      {children}
    </CardSc>
  );
};

/* conteúdo */
const ContentSc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 0px;
  border-radius: 12px;
  position: relative;
  ${(props) => props.$styles && props.$styles};
`;

export const CardContent = ({ children, styles, ...props }) => {
  return (
    <ContentSc $styles={styles} {...props}>
      {children}
    </ContentSc>
  );
};

/* footer */
const FooterSc = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;

  &.with-border {
    padding-top: 15px;
  }
`;

export const CardFooter = ({ children, styles, ...props }) => {
  return (
    <FooterSc $styles={styles} {...props}>
      {children}
    </FooterSc>
  );
};
