import {
  BodyStyled,
  WrapperStyled,
  NavOptionsStyled,
  DivNameSpanStyled,
  H1OptionStyled,
  DivSpanStyled,
  SpanStyled,
  DivContentStyled,
} from "./StylizedTags";
import {AboutMe, AboutTheWebsite} from "./Components";
import { useState } from "react";

const contents = [
  { p: "Sobre o autor", icon: "person_search", goTo: "aboutMe" },
  { p: "Sobre o site", icon: "description", goTo: "aboutSite" },
];

export default function ForRecruitersPage() {
  const [seeTheOption, setSeeTheOption] = useState("aboutMe");
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedButtonCode, setSelectedButtonCode] = useState(0);

  function handleClick(index) {
    const goTo = contents[index].goTo;
    setSeeTheOption(`${goTo}`);
    setSelectedOption(index);
  }

  return (
    <>
      <BodyStyled>
        <WrapperStyled>
          <NavOptionsStyled>
            {contents.map((content, i) => {
              const isSelected = i === selectedOption;
              return (
                <DivNameSpanStyled
                  key={i}
                  $buttonSelected={isSelected}
                  onPointerDown={(e) => {
                    if (e.button === 2) {
                      return;
                    }
                    handleClick(i);
                  }}
                >
                  <DivSpanStyled>
                    <SpanStyled
                      className="material-symbols-rounded"
                      $person={content.icon === "person_search"}
                    >
                      {content.icon}
                    </SpanStyled>
                  </DivSpanStyled>

                  <H1OptionStyled $buttonSelected={isSelected}>
                    {content.p}
                  </H1OptionStyled>
                </DivNameSpanStyled>
              );
            })}
          </NavOptionsStyled>

          <DivContentStyled>
            {seeTheOption == "aboutMe" ? (
              <AboutMe />
            ) : (
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

