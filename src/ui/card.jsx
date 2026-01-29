import styled, { css } from 'styled-components';
import { Separator } from '@ui/index';

/* header */
const CardHeaderStyled = styled.div`
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
    <CardHeaderStyled
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
    </CardHeaderStyled>
  );
};

/* titulo */
const TitleStyled = styled.div`
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
    <TitleStyled $styles={styles} {...props}>
      {children}
    </TitleStyled>
  );
};

/* descrição */
const DescriptionStyled = styled.p`
  font-size: var(--text-sm);
  color: var(--muted-foreground);
`;

export const CardDescription = ({ children, styles, ...props }) => {
  return (
    <DescriptionStyled $styles={styles} {...props}>
      {children}
    </DescriptionStyled>
  );
};

/* card */
const CardStyled = styled.div`
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
      padding-top: 1.5ex;
    `}
  ${(props) => props.$styles && props.$styles}
`;

export const Card = ({ children, styles, hasHeader = true, ...props }) => {
  return (
    <CardStyled $styles={styles} $hasHeader={hasHeader} {...props}>
      {children}
    </CardStyled>
  );
};

/* conteúdo */
const ContentStyled = styled.div`
  padding-top: 0px;
  border-radius: 12px;
  ${(props) => props.$styles && props.$styles}
`;

export const CardContent = ({ children, styles, ...props }) => {
  return (
    <ContentStyled $styles={styles} {...props}>
      {children}
    </ContentStyled>
  );
};

/* footer */
const FooterStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;

  &.with-border {
    padding-top: 15px;
  }
`;

export const CardFooter = ({ children, styles, ...props }) => {
  return (
    <FooterStyled $styles={styles} {...props}>
      {children}
    </FooterStyled>
  );
};

