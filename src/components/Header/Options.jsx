import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const ContainerStyled = styled.div`
  width: auto;
  height: auto;
  position: fixed;
  right: 4.7%;
  top: 120px;
  background-color: transparent;
  z-index: 6;
  @media screen and (max-width: 374px) {
    top: 124px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    top: 123px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    top: 121px;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    right: 3.5%;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    right: 5%;
  }
  @media screen and (min-width: 1201px) {
    top: 110px;
    right: 5.5%;
  }
`;

export const DivNameSpanStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: max-content;
  border-radius: 24px;
  margin-bottom: 18px;
  cursor: pointer;
`;

const ContainerPStyled = styled.div`
  background-color: #292E4E;
  display: flex;
  border-radius: 7px;
  margin-right: -10px;
`;

const DivPStyled = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  height: 44px;
`;

export const POptionStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: white;
  padding-right: 40px;
  padding-left: 24px;
  user-select: none;
`;

export const DivSpanStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: #292E4E;
  flex: none;
  cursor: pointer;
  width: 44px;
  height: 44px;
`;

export const SpanOptionsStyled = styled.span`
  font-weight: 300;
  font-size: 1.7em;
  color: rgb(255, 255, 255);
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 12, "opsz" 30;
  user-select: none;
`;

const contents = [
  { p: "Sobre o autor", icon: "person_search", navigateTo: "sobre-mim" },
  { p: "Deixar Comentário", icon: "add_comment", navigateTo: "comentar" },
  { p: "Sobre o site", icon: "description", navigateTo: "sobre-o-site" },
];

const Options = ({ setOpacityState }) => {
  const navigate = useNavigate();

  const [viewNameOption, setViewNameOption] = useState(null);
  const [numberClicks, setNumberClicks] = useState([0, 0, 0]);

  function openContent(e, index) {
    if (e.pointerType === "mouse") {
      const option = contents[index].navigateTo;
      setOpacityState(0);
      setTimeout(() => {
        navigate(`/secao-mais-opcoes?option=${option}`);
      }, 200);
    } else if (e.pointerType === "touch") {
      setViewNameOption(index);
      setNumberClicks(
        numberClicks.map((_, i) => {
          return index == i ? numberClicks[index] + 1 : 0;
        })
      );
    }
  }

  useEffect(() => {
    const index = numberClicks.findIndex((count) => count == 2);
    if (index != -1) {
      const option = contents[index].navigateTo;
      setNumberClicks([0, 0, 0]);
      setOpacityState(0);
      setTimeout(() => {
        navigate(`/secao-mais-opcoes?option=${option}`);
      }, 200);
    }
  }, [numberClicks]);

  return (
    <ContainerStyled>
      {contents.map((content, i) => (
        <DivNameSpanStyled
          key={i}
          onMouseEnter={() => {
            setViewNameOption(i);
          }}
          onMouseLeave={() => {
            setViewNameOption(null);
          }}
          onPointerDown={(e) => openContent(e, i)}
          data-ignore-click
        >
          {viewNameOption == i && (
            <ContainerPStyled>
              <DivPStyled>
                <POptionStyled>{content.p}</POptionStyled>
              </DivPStyled>
            </ContainerPStyled>
          )}

          <DivSpanStyled>
            <SpanOptionsStyled className="material-symbols-outlined">
              {content.icon}
            </SpanOptionsStyled>
          </DivSpanStyled>
        </DivNameSpanStyled>
      ))}
    </ContainerStyled>
  );
};

export default Options;
