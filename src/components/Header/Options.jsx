import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const ContainerStyled = styled.div`
    width: auto;
    height: auto;
    position: fixed;
    right: 4.8%;
    top: 120px;
    background-color: transparent;
    z-index: 6;
    @media screen and (min-width: 320px) and (max-width: 374px) {
      top: 124px;
    }
    @media screen and (min-width: 375px) and (max-width: 576px) {
      top: 123px;
    }
    @media screen and (min-width: 577px) and (max-width: 768px) {
      top: 121px;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
      right: 3.1%;
    }
    @media screen and (min-width: 993px) and (max-width: 1200px) {
      right: 4.71%;
    }
    @media screen and (min-width: 1201px) {
      top: 110px;
      right: 5.5%;
    }
    /* @media screen and (min-width: 1201px){
      right: 8.4%;
    } */
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

const ContainerPStyled = styled.div`
  background-color:rgb(43, 37, 37);
  display: flex;
  border-radius: 40px 0px 0px 40px; //para não sobrepor o border radius filho
  margin-right: -10px;
`;

const DivPStyled = styled.div`
    display: flex;
    align-items: center;
    width: max-content;

    @media screen and (min-width: 320px) and (max-width: 374px) {
      height: 44px;
    }
    @media screen and (min-width: 375px) and (max-width: 576px) {
      height: 46px;
    }
    @media screen and (min-width: 577px) and (max-width: 768px) {
      height: 49px;
    }
    @media screen and (min-width: 769px) and (max-width: 992px) {
      height: 50.8px;
    }
    @media screen and (min-width: 993px) and (max-width: 1200px) {
      height: 51px;
    }
    @media screen and (min-width: 1201px) {
      height: 52px;
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
  border-radius: 12%;
  background-color:rgb(43, 37, 37);
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.26);
  cursor: default;
  flex: none;

  @media screen and (min-width: 320px) and (max-width: 374px) {
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

const DivSpanFalse = styled(DivSpanStyled)`
  display: block;
  margin-right: -30px;
  box-shadow: none;
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

const contents = [
  {p:'Sobre o autor', icon: 'person_search', navigateTo: 'sobre-mim'},
  {p:'Deixar Comentário', icon: 'add_comment', navigateTo: 'comentar'},
  {p: 'Sobre o site', icon:'description', navigateTo: 'sobre-o-site'}
]

const Options = () => {
  const navigate = useNavigate();

  const [viewNameOption, setViewNameOption] = useState(null);
  const [numberClicks, setNumberClicks] = useState([0,0,0]);
 
  function openContent(e, index) {
    if (e.pointerType === "mouse") {
      const option = contents[index].navigateTo;
      navigate(`/secao-mais-opcoes?option=${option}`);
    } else if (e.pointerType === "touch") {
      setViewNameOption(index);
      setNumberClicks(numberClicks.map((_, i)=>{return index==i? numberClicks[i]+1 : 0}));
    }
  }

  useEffect(() => {
    const index = numberClicks.findIndex(count => count >= 2);
    if (index!=-1) {
      const option = contents[index].navigateTo;
      setNumberClicks([0, 0, 0]);
      navigate(`/secao-mais-opcoes?option=${option}`);
    }
  }, [numberClicks]);

  return (
    <ContainerStyled>
      {contents.map((content, i)=>(
        <DivNameSpanStyled key={i}>
          {viewNameOption==i && (
          <ContainerPStyled>
            <DivSpanFalse/>
            <DivPStyled>
              <POptionStyled>{content.p}</POptionStyled>
            </DivPStyled>
          </ContainerPStyled>
          )}

          <DivSpanStyled 
          data-ignore-click
          onMouseEnter={()=>{setViewNameOption(i)}}
          onMouseLeave={()=>{setViewNameOption(null)}}
          onPointerDown={(e) => openContent(e, i)}
          >
              <SpanOptionsStyled className='material-symbols-rounded'>
                  {content.icon}
              </SpanOptionsStyled>
          </DivSpanStyled>
        </DivNameSpanStyled>
      ))}
    </ContainerStyled>)
}

export default Options;