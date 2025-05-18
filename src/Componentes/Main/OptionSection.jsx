import { useState } from 'react';
import styled from 'styled-components';

export const ContainerStyled = styled.div`
    width: max-content;
    height: max-content;
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
    background-color: #741d09;
    margin-right: -20px;

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
      border-radius: 25px 0px 0px 25px;
    }
    @media screen and (min-width: 1201px) {
      height: 52px;
      border-radius: 26px 0px 0px 26px;
    }
`;

export const POptionStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: white;
  padding-right: 36px;
  padding-left: 24px;
  outline: 1px solid rgba(0, 0, 0, 0.19);

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
  background-color: #741D09;
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
  }
  @media screen and (min-width: 1201px) {
    width: 52px;
    height: 52px;
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
    function viewTheNameOption(index) {
      setViewNameOption(viewNameOption.map((_, i) => {
        return i === index ? true : false;
      }));
    }

    return (
        <ContainerStyled>
            <DivNameSpanStyled>
                {viewNameOption[0] && (
                <DivPStyled>
                  <POptionStyled>Sobre o autor</POptionStyled>
                </DivPStyled>)}

                <DivSpanStyled 
                onMouseMove={()=>{viewTheNameOption(0)}} 
                onMouseLeave={()=>{setViewNameOption([false, false, false])}}>
                    <SpanOptionsStyled className='material-symbols-rounded'>
                       person_search
                    </SpanOptionsStyled>
                </DivSpanStyled>
            </DivNameSpanStyled>

            <DivNameSpanStyled >
                {viewNameOption[1] && (
                <DivPStyled>
                  <POptionStyled>Deixar Comentário</POptionStyled>
                </DivPStyled>)}

                <DivSpanStyled
                onMouseMove={()=>{viewTheNameOption(1)}} 
                onMouseLeave={()=>{setViewNameOption([false, false, false])}}>
                    <SpanOptionsStyled2 className='material-symbols-rounded'>
                        add_comment
                    </SpanOptionsStyled2>
                </DivSpanStyled>
            </DivNameSpanStyled>

            <DivNameSpanStyled>
                {viewNameOption[2] && (<DivPStyled>
                  <POptionStyled>Sobre o site</POptionStyled>
                </DivPStyled>)}
                <DivSpanStyled
                onMouseMove={()=>{viewTheNameOption(2)}} 
                onMouseLeave={()=>{setViewNameOption([false, false, false])}}>
                    <SpanOptionsStyled className='material-symbols-rounded'>
                        description
                    </SpanOptionsStyled>
                </DivSpanStyled>
            </DivNameSpanStyled>
        </ContainerStyled>
    )
}

export default OptionSection;