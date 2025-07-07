import React from 'react';
import styled from 'styled-components';

const Ajuda = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.554) !important;
  z-index: 6;
  display: none;
`;

const Divf = styled.div`
   width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);
    background-color: white;
    z-index: 15;
`;

const Divfp = styled.p`
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);
    background-color: white;
    padding: 10px 20px;
    border-radius: 7px;
    font-family: "Fira Sans", serif;
    letter-spacing: 1px;
`;

function OrientatiosSection() {
  return (
    <Ajuda>
      <Divf>
        <Divfp>
          Veja como navegar pelo app, demora apenas alguns segundos
        </Divfp>
        <Divfp>
          Clicando no produto, você vê todas as variações dele. Abaixo do produto clicado ficam produtos de outras marcas, de tipos...
        </Divfp>
      </Divf>
    </Ajuda>
  );
}

export default OrientatiosSection;
