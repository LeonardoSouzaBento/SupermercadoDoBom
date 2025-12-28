import styled from "styled-components";

const DataAlertStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: hsla(213, 29%, 94%, 1);
  transition: opacity 0.4s ease;
  opacity: ${(props) => props.$opacity};

  & div {
    height: 23rem;
    width: 35rem;
    padding: 2rem;
    box-sizing: border-box;
    background-color: var(--secondary);
    position: relative;
    border-radius: 1.2rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & h1 {
    font-weight: 500;
  }
`;

const DataAlert = () => {
  return (
    <DataAlertStyled>
      <div>
        <h2 style={{ color: 'white' }}>
          <strong>Complete suas informações </strong>
          para continuar a compra.
        </h2>
      </div>
    </DataAlertStyled>
  );
};

export default DataAlert;
