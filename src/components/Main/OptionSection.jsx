import { useState } from 'react';
import styled from 'styled-components';

export const ContainerStyled = styled.div`
    width: auto;
    height: auto;
    position: fixed;
    right: 4.8%;
    top: 120px;
    background-color: transparent;
    z-index: 6;

    @media screen and (min-width: 320px) and (max-width: 375px) {
      top: 124px;
    }
    @media screen and (min-width: 375px) and (max-width: 576px) {
      top: 123px;
    }
    @media screen and (min-width: 577px) and (max-width: 768px) {
      top: 121px;
    }
    @media screen and (min-width: 1201px){
      right: 8.4%;
    }
`;

export const DivNameSpanStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: max-content;
  width: 260px;
  border-radius: 24px;
  margin-bottom: 18px;
`;

const DivPStyled = styled.div`
    display: flex;
    align-items: center;
    width: max-content;
    /* background-color: #741d09; */
    background-color:rgb(43, 37, 37);
    margin-right: -22px;

    @media screen and (min-width: 320px) and (max-width: 375px) {
      height: 44px;
      border-radius: 21px 0px 0px 21px;
    }
    @media screen and (min-width: 375px) and (max-width: 576px) {
      height: 46px;
      border-radius: 22px 0px 0px 22px;
    }
    @media screen and (min-width: 577px) and (max-width: 768px) {
      height: 49px;
      border-radius: 24px 0px 0px 24px;
    }
    @media screen and (min-width: 769px) and (max-width: 992px) {
      height: 50.8px;
      border-radius: 25px 0px 0px 25px;
    }
    @media screen and (min-width: 993px) and (max-width: 1200px) {
      height: 51px;
      border-radius: 12px 0px 0px 12px;
    }
    @media screen and (min-width: 1201px) {
      height: 52px;
      border-radius: 12px 0px 0px 12px;
    }
`;

export const POptionStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: white;
  padding-right: 40px;
  padding-left: 24px;

  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.05em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.06em;
  }
  @media screen and (min-width: 993px){
     font-size: 1.065em;
  }
`;

export const DivSpanStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color:rgb(43, 37, 37);
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.26);
  cursor: default;
  
  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 44px;
    height: 44px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    width: 46px;
    height: 46px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    width: 49px;
    height: 49px;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    width: 50.8px;
    height: 50.8px;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    width: 51px;
    height: 51px;
    border-radius: 12px;
  }
  @media screen and (min-width: 1201px) {
    width: 52px;
    height: 52px;
    border-radius: 12px;
  }
`;

export const SpanOptionsStyled = styled.span`
  font-weight: 300;
  font-size: 1.9em;
  color: rgb(255, 255, 255);
  font-variation-settings:
  'FILL' 1,
  'wght' 300,
  'GRAD' -25,
  'opsz' 24;
  cursor: default;
  user-select: none;
`;

const SpanOptionsStyled2 = styled(SpanOptionsStyled)`
  font-size: 1.75em;
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' -25,
  'opsz' 24;
  padding-top: 3px;
`;

const OptionSection = () => {

    const [viewNameOption, setViewNameOption] = useState([false, false, false]);
    const [numberClicks, setNumberClicks] = useState([0,0,0]);
    const [goToTheOption, setGoToTheOption] = useState(false, false, false);

    function viewTheNameOption(index) {
      setViewNameOption(viewNameOption.map((_, i) => {
        return i === index ? true : false;
      }));
    }

    function hideNameOption (){
      setViewNameOption([false, false, false]);
    }

    function seeNameWhitTouch(index) {
      hideNameOption();
      viewTheNameOption(index);

      setNumberClicks(numberClicks.map((_,i)=>{
        return i === index ? numberClicks + 1 : numberClicks;
      }));

      if(numberClicks[index]==2){
        setNumberClicks([0,0,0]);
        setGoToTheOption(goToTheOption.map((_,i)=>{
          return i === index ? true : false;
        }));
      }
    }

    const contents = [
      {p:'Sobre o autor', icon: 'person_search'},
      {p:'Deixar Comentário', icon: 'add_comment'},
      {p: 'Sobre o site', icon:'description'}
    ]

    return (
        <ContainerStyled>
          {contents.map((content, i)=>(
            <DivNameSpanStyled  data-ignore-click key={i}>
              {viewNameOption[i] && (
              <DivPStyled>
                <POptionStyled>{content.p}</POptionStyled>
              </DivPStyled>)}

              <DivSpanStyled 
              onMouseMove={()=>{viewTheNameOption(i)}} 
              onMouseLeave={hideNameOption}
              onTouchStart={()=>{seeNameWhitTouch(i)}}>
                  <SpanOptionsStyled className='material-symbols-rounded'>
                      {content.icon}
                  </SpanOptionsStyled>
              </DivSpanStyled>
            </DivNameSpanStyled>
          ))}
        </ContainerStyled>
    )
}

export default OptionSection;