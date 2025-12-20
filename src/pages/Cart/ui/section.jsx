import styled from 'styled-components';

export const SectionStyled = styled.section`
  height: auto;
  width: 100%;
  height: 23rem;
  padding: 2rem;
  padding-top: 1rem;
  margin: auto;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0;
  align-items: flex-end;
  box-sizing: border-box;
  background-color: var(--white-foreground);
  border-radius: 1.2rem;
  box-shadow: var(--shadow-md);
  overflow: hidden;
  position: relative;
  transition: all 0.15s ease;

  @media screen and (min-width: 769px) {
    margin-bottom: 1.6rem;
  }
`;
