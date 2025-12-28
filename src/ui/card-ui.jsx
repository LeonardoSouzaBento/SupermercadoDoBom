import styled, { css } from 'styled-components';

export const CardStyled = styled.div`
  background: var(--card);
  color: var(--card-foreground);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 0.25rem;
  border: 1px solid var(--card-border);
  box-shadow: var(--shadow-md);
  ${(props) => (props.$hasHeader ? 'padding: 18px 24px;' : 'padding: 24px;')}
  ${(props) => props.$customStyles && props.$customStyles}
`;

export const TitleStyled = styled.h3`
  color: var(--primary);
`;

export const ActionStyled = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  justify-self: end;
  align-self: flex-start;
`;

export const ContentStyled = styled.div`
  padding: 0 1.5rem;
`;

export const FooterStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;

  &.with-border {
    padding-top: 1.5rem;
  }
`;

const HeaderStyled = styled.div`
  width: 100%;
  height: 3.6rem;
  padding-bottom: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
  ${(props) => props.$customStyles && props.$customStyles}
  ${(props) =>
    props.$separator &&
    css`
      border-bottom: 1px solid var(--border);
    `}
`;

const WrapperTitleStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 0.8rem;
  color: var(--primary);
`;

const DescriptionStyled = styled.p`
  font-size: var(--text-sm);
  color: var(--muted-foreground);
`;

export const CardHeader = ({ icon, title, description, separator = true, customStyles }) => {
  return (
    <HeaderStyled $separator={separator} $customStyles={customStyles}>
      <WrapperTitleStyled>
        {icon}
        <TitleStyled>{title}</TitleStyled>
      </WrapperTitleStyled>
      {description && <DescriptionStyled>{description}</DescriptionStyled>}
    </HeaderStyled>
  );
};

export const Card = ({ children, customStyles, hasHeader = true }) => {
  return (
    <CardStyled $customStyles={customStyles} $hasHeader={hasHeader}>
      {children}
    </CardStyled>
  );
};

export const CardContent = ({ children, customStyles }) => {
  return <ContentStyled $customStyles={customStyles}>{children}</ContentStyled>;
};

export const CardFooter = ({ children, customStyles }) => {
  return <FooterStyled $customStyles={customStyles}>{children}</FooterStyled>;
};
