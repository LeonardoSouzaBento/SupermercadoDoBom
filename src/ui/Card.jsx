import styled, { css } from 'styled-components';

export const Card = styled.div`
  background: var(--card);
  color: var(--card-foreground);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 0.25rem;
  border: 1px solid var(--border);
  padding: 1.5rem 0;
  box-shadow: var(--shadow-sm);
`;

export const Title = styled.h3`
  color: var(--primary);
`;

export const Action = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  justify-self: end;
  align-self: flex-start;
`;

export const Content = styled.div`
  padding: 0 1.5rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;

  &.with-border {
    padding-top: 1.5rem;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 3.6rem;
  padding-bottom: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
  border-bottom: 1px solid var(--border);
`;

const WrapperTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 0.8rem;
  color: var(--primary);
`;

const Description = styled.p`
  font-size: var(--text-sm);
  color: var(--muted-foreground);
`;

export const CardHeader = ({ icon, title, description }) => {
  return (
    <Header>
      <WrapperTitle>
        {icon}
        <Title>{title}</Title>
      </WrapperTitle>
      {description && <Description>{description}</Description>}
    </Header>
  );
};
