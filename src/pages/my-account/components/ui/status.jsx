import styled from 'styled-components';

export const StatusSc = styled.div`
  width: fit-content;
  box-sizing: border-box;
  display: flex;

  & > div {
    height: 28px;
    width: max-content;
    padding-right: 8px;
    padding-left: 3px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.75ex;
    background-color: hsla(var(--warn-value), 0.12);
    color: var(--foreground);
    border-radius: 999px;
    border: 2px solid hsla(var(--destructive-value), 0.2);

    & > p {
      margin-right: 6px;
      font-size: var(--text-xs);
      font-weight: 600;
      color: var(--destructive);
      ${(props) => props.$email && 'color: var(--black-foreground);'}
    }

    & > span {
      background-color: hsla(var(--warn-value), 0.3);
      color: var(--destructive);
      padding: 2px;
      border-radius: 999px;
      font-size: 16px;
    }
  }
`;
