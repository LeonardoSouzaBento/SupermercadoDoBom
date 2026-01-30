import styled from 'styled-components';

export const ContainerSc = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 10px;
  box-sizing: border-box;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease;
  opacity: ${(props) => props.$opacity};

  @media screen and (max-width: 993px) {
    justify-content: ${(props) => (props.$up ? 'flex-start' : 'center')};
  }

  .card {
    width: 100%;
    max-width: 420px;
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
`;
