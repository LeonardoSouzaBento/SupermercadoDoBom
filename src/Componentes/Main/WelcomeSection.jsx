import React from 'react';
import styled, { keyframes } from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: red;
  position: fixed;
  top: 0;
  z-index: 5;
  gap: 10px;
  opacity: ${(props) => (props['data-apagar'] ? 0 : 1)};
  transition: opacity 2s linear;
`;

const Divf = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -65%);
  gap: 15px;
`;

const Img = styled.img`
  height: 110px;
  width: 110px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.435);
  border-radius: 10px;
`;

const P = styled.p`
    width: 200px;
    text-align: center;
    line-height: 22px;
    color: white;
    font-family: "Fira Sans", sans-serif;
    font-size: 1.15em;
`;

const DivLoading= styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const girar = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Img2 = styled.img`
  color: white;
  height: 28.8px;
  width: 28.8px;
  animation: ${girar} 1.2s linear infinite;
`;

function WelcomeSection() {

  return (
    <Div>
      <Divf>
        <Img src='src/assets/WelcomeSection/logoGenerico_compressed.jpg' alt="logo do mercado em tela cheia: Supermercado União" />
        <P>Seja bem-vindo</P>
        <DivLoading>
          <Img2 src='src/assets/WelcomeSection/progress_activity_30.svg'/>
        </DivLoading>
      </Divf>
    </Div>
  );
}

export default WelcomeSection;