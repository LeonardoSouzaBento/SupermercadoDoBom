import {
  BodyStyled,
  WrapperStyled,
  NavOptionsStyled,
  DivNameSpanStyled,
  POptionStyled,
  DivSpanStyled,
  SpanStyled,
  DivContentStyled,
} from "./ComponentsOptionSection";

import AboutMe from "./AboutMe";
import AboutTheWebsite from "./AboutTheWebsite";
import InsertComment from "./InsertComment";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const urlOptions = ["sobre-mim", "sobre-o-site", "comentar"];

const contents = [
  { p: "Sobre o autor", icon: "person_search", goTo: "aboutMe" },
  { p: "Sobre o site", icon: "description", goTo: "aboutSite" },
  { p: "Comentar", icon: "add_comment", goTo: "comment" },
];

const relations = {
  "sobre-mim": "aboutMe",
  "sobre-o-site": "aboutSite",
  comentar: "comment",
};

export default function MoreOptionsSection() {
  const location = useLocation();
  const option = new URLSearchParams(location.search).get("option");

  const [seeTheOption, setSeeTheOption] = useState("");
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedButtonCode, setSelectedButtonCode] = useState(0);
  const [opacityState, setOpacityState] = useState(0);

  useEffect(() => {
    const index = urlOptions.indexOf(option);
    setSelectedOption(index);
    setSeeTheOption(relations[option]); //o nome do elemento em lugar do indice
  }, [option]);

  useEffect(() => {
    setTimeout(() => {
      setOpacityState(1);
    }, 300);
  }, []);

  function handleClick(index) {
    const goTo = contents[index].goTo;
    setSeeTheOption(`${goTo}`);
    setSelectedOption(index);
  }

  return (
    <>
      <BodyStyled>
        <WrapperStyled
          style={{
            opacity: opacityState,
            transition: "opacity 0.3s ease",
          }}
        >
          <NavOptionsStyled>
            {contents.map((content, i) => {
              const isSelected = i === selectedOption;
              return (
                <DivNameSpanStyled
                  key={i}
                  $buttonSelected={isSelected}
                  onPointerDown={() => {
                    handleClick(i);
                  }}
                >
                  <DivSpanStyled>
                    <SpanStyled
                      $buttonSelected={isSelected}
                      className="material-symbols-outlined"
                    >
                      {content.icon}
                    </SpanStyled>
                  </DivSpanStyled>

                  <POptionStyled $buttonSelected={isSelected}>
                    {content.p}
                  </POptionStyled>
                </DivNameSpanStyled>
              );
            })}
          </NavOptionsStyled>

          <DivContentStyled>
            {seeTheOption == "aboutMe" && <AboutMe />}
            {seeTheOption == "comment" && <InsertComment />}
            {seeTheOption == "aboutSite" && (
              <AboutTheWebsite
                selectedButtonCode={selectedButtonCode}
                setSelectedButtonCode={setSelectedButtonCode}
              />
            )}
          </DivContentStyled>
        </WrapperStyled>
      </BodyStyled>
    </>
  );
}
