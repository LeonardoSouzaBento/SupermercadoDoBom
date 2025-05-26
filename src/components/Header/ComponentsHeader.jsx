import styled from 'styled-components';

const ContainerStyled = styled.div`
    width:${props => props.id ?'90%': 'max-content' };
    height: 132px;
    ${props => props.id && 'margin: auto;'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    @media (min-width: 320px) and (max-width: 374px){
       gap: 12px;
    }
    @media (min-width: 769px){
       max-width: 340px;
    }
`;

const LogoDivStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.67);
    transform: scaleX(-1);
    @media (min-width: 320px) and (max-width: 374px){
        height: 54px;
        width: 54px;
    }
    @media (min-width: 375px) and (max-width: 576px){
        height: 60px;
        width: 60px;
    }
    @media (min-width: 577px) and (max-width: 768px){
        height: 63px;
        width: 63px;
    }
    @media (min-width: 768px){
        height: 65px;
        width: 65px;
    }
`;

const SpanLogoStyled = styled.span`
  color:rgb(241, 16, 24);
  font-size: 2.06em;
  font-weight: 500;
`;

const DivPsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PNomeSupStyled = styled.p`
    font-family: "Montserrat", serif;
    font-weight: 600;
    color:rgb(209, 13, 19);
    
    @media (min-width: 320px) and (max-width: 374px){
        font-size: 0.93em;
    }
    @media (min-width: 375px) and (max-width: 576px){
        font-size: 0.98em;
    }
    @media (min-width: 577px) and (max-width: 768px){
        font-size: 1.06em;
    }
    @media (min-width: 769px) and (max-width: 992px){
        font-size: 1.15em;
    }
    @media (min-width: 993px){
        font-size: 1.2em;
    }
`;

const PBemVindoStyled = styled(PNomeSupStyled)`
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-weight: 400;
    @media (min-width: 320px) and (max-width: 374px){
        font-size: 1.03em;
    }
    @media (min-width: 375px) and (max-width: 576px){
        font-size: 1.08em;
    }
    @media (min-width: 577px) and (max-width: 768px){
        font-size: 1.17em;
    }
    @media (min-width: 769px) and (max-width: 992px){
        font-size: 1.22em;
    }
    @media (min-width: 993px){
        font-size: 1.25em;
    }
`;

const SpaceMoreOptions = styled.div`
    width: 44px;
    height: 44px;

    @media screen and (min-width: 320px) and (max-width: 374px) {
        width: 42px;
        height: 42px;
    }
    @media screen and (min-width: 375px) and (max-width: 576px) {
        width: 44px;
        height: 44px;
    }
    @media screen and (min-width: 577px) and (max-width: 768px) {
        width: 47px;
        height: 47px;
    }
    @media screen and (min-width: 769px) {
        display: none;
    }
`;

export const Divlogo = () => {
    return (
    <ContainerStyled id='expand'>
        <ContainerStyled>
            <LogoDivStyled>
                <SpanLogoStyled className='material-symbols-rounded'>handshake</SpanLogoStyled>
            </LogoDivStyled>
            <DivPsStyled>
                <PNomeSupStyled>SUPERMERCADO UNIÃO</PNomeSupStyled>
                <PBemVindoStyled> Seja bem vindo!</PBemVindoStyled>
            </DivPsStyled>
        </ContainerStyled>
        <SpaceMoreOptions></SpaceMoreOptions>
    </ContainerStyled>
    )
}


//botão de mais opções

//div para ajuste de padding
const DivMoreOptionsStyled = styled.div`
    z-index: 3;
    @media screen and (min-width: 769px) {
        padding-left: 5px;
    }
`;

const DivStyled = styled.div`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: ${props=>props.$changeBackground? 'rgb(43, 37, 37)':'rgb(215, 69, 69)'};
    border-radius: ${props=>props.$changeBackground?'12%':'20px'};
    cursor: pointer;
    transition: all 100ms linear;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    
    @media screen and (max-width: 768px){
        position: absolute;
        top: 45px;
        right: 5%;
    }
    @media screen and (min-width: 320px) and (max-width: 374px) {
        width: 42px;
        height: 42px;
        top: 45px;
    }
    @media screen and (min-width: 375px) and (max-width: 576px) {
        width: 44px;
        height: 44px;
        top: 44px;
    }
    @media screen and (min-width: 577px) and (max-width: 768px) {
        width: 43px;
        height: 43px;
        top: 44px;
    }
    @media screen and (min-width: 769px) {
        position: relative;
    }
    @media screen and (min-width: 1201px) {
        width: max-content;
        border-radius: 7px;
        padding: 0px 16px;
        gap: 4px;
    }
`;

const PStyled = styled.p`
    font-family: "Montserrat";
    font-weight: 400;
    letter-spacing: 0.8px; 
    margin:0px;
    @media (max-width: 1201px){
       display: none;
    }
    user-select: none;
    cursor: pointer;
`;

const SpanStyled = styled.span`
    font-size: 1.45em;
    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 28;
    cursor: pointer;
    user-select: none;
    @media screen and (min-width: 375px) and (max-width: 576px) {
        font-size: 1.5em;
    }
    @media screen and (min-width: 577px) and (max-width: 768px) {
        font-size: 1.7em;
    }
    @media screen and (min-width: 769px) and (max-width: 992px) {
        font-size: 1.8em;
    }
`;


export const MoreOptionsButton= ({changeBackground, setViewOptions, viewOptions}) => {

    function handleClick() {
      if(viewOptions === false){setViewOptions(true)}
      else{setViewOptions(false)}
    }

    return (
        <DivMoreOptionsStyled>
            <DivStyled 
            data-ignore-click 
            $changeBackground={changeBackground}
            onPointerDown={handleClick}
            onMouseEnter={()=>{setViewOptions(true)}}
            >
                <SpanStyled className="material-symbols-outlined">menu</SpanStyled>
                <PStyled>Mais opções</PStyled>
            </DivStyled>
        </DivMoreOptionsStyled>
    )
}