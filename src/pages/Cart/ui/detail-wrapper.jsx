import styled from 'styled-components';

export const DetailWrapperStyled = styled.div`
  width: 100%;
  height: 13.6rem;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  border: 1px solid var(--border);
  position: relative;

  & div:not(#warn) {
    width: 100%;
    height: 4.4rem;
    box-sizing: border-box;
    padding: 0 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid var(--border);
  }
`;
