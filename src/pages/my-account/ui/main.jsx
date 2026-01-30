import styled from 'styled-components';

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 12px;
  max-width: 640px;
  margin: 0 auto;

  & > div {
    margin-bottom: 24px;
  }
`;