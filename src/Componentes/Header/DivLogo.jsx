import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    color: rgb(255, 255, 255);
`;

const Img = styled.img`
    height: 100%;
    border-radius: 40%;
    box-shadow:0px 0px 6px #ab3636;
`;

const P = styled.p`
    font-family: "Fira Sans", serif;
    font-weight: 300;
    letter-spacing: 0.5px;
    padding: 5px;
@media (min-width: 320px) and (max-width: 520px){
    font-size: 0.9em;
    line-height: 17px;
}
@media (min-width: 521px) and (max-width: 576px){
    font-size: 0.95em;
    line-height: 19px;
}
@media (min-width: 577px){
    font-size: 1em;
    line-height: 20px;
}
`;

const Divlogo = () => {
    return (
    <Div>
        <Img src="src\assets\WelcomeSection\logoGenerico_compressed.jpg" alt=""></Img>
        <div>
            <P><strong>SUPERMERCADO UNIÃO</strong><br></br>
                Seja bem vindo.
            </P>
        </div>
    </Div>
    )
}

export default Divlogo;