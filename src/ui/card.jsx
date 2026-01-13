import styled, { css } from 'styled-components';
import { Separator } from '@ui/index';

/* header */
const CardHeaderStyled = styled.div`
  ${(props) => props.$customStyles && props.$customStyles}
`;

export const CardHeader = ({
  children,
  mb = 2,
  mbMeasurement = 'ex',
  separator = false,
  customStyles,
}) => {
  return (
    <CardHeaderStyled
      $customStyles={customStyles}
      style={{ marginBottom: mb > 0 ? `${mb}${mbMeasurement}` : '' }}>
      {children}
      {separator && (
        <Separator
          customStyles={css`
            margin-top: 0.75ex;
          `}
        />
      )}
    </CardHeaderStyled>
  );
};

/* titulo */
const TitleStyled = styled.div`
  max-width: max-content;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 0.8ex;
  color: var(--primary);
  ${(props) => props.$customStyles && props.$customStyles}
`;

export const CardTitle = ({ children, customStyles }) => {
  return <TitleStyled $customStyles={customStyles}>{children}</TitleStyled>;
};

/* descrição */
const DescriptionStyled = styled.p`
  font-size: var(--text-sm);
  color: var(--muted-foreground);
`;

export const CardDescription = ({ children, customStyles }) => {
  return <DescriptionStyled $customStyles={customStyles}>{children}</DescriptionStyled>;
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
  border-radius: 16px;
  border: 1px solid var(--card-border);
  box-shadow: var(--shadow-md);
  padding: 24px;
  ${(props) =>
    props.$hasHeader &&
    css`
      padding-top: 1.5ex;
    `}
  ${(props) => props.$customStyles && props.$customStyles}
`;

export const Card = ({ children, customStyles, hasHeader = true }) => {
  return (
    <CardStyled $customStyles={customStyles} $hasHeader={hasHeader}>
      {children}
    </CardStyled>
  );
};

/* conteúdo */
const ContentStyled = styled.div`
  padding-top: 0px;
  border-radius: 12px;
  ${(props) => props.$customStyles && props.$customStyles}
`;

export const CardContent = ({ children, customStyles }) => {
  return <ContentStyled $customStyles={customStyles}>{children}</ContentStyled>;
};

/* footer */
const FooterStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;

  &.with-border {
    padding-top: 1.5rem;
  }
`;

export const CardFooter = ({ children, customStyles }) => {
  return <FooterStyled $customStyles={customStyles}>{children}</FooterStyled>;
};
