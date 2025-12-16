import styled from "styled-components";

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

export const CardHeader = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-template-rows: auto auto;
  gap: 0.5rem;
  padding: 0 1.5rem;

  &[data-has-action] {
    grid-template-columns: 1fr auto;
  }

  &.with-border {
    padding-bottom: 1.5rem;
  }
`;

export const CardTitle = styled.div`
  line-height: 1;
  font-weight: 600;
`;

export const CardDescription = styled.div`
  font-size: 0.875rem;
  color: var(--muted-foreground);
`;

export const CardAction = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  justify-self: end;
  align-self: flex-start;
`;

export const CardContent = styled.div`
  padding: 0 1.5rem;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;

  &.with-border {
    padding-top: 1.5rem;
  }
`;
