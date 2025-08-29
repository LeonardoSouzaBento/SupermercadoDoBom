import { useState, useEffect, useContext, useRef } from "react";
import { all_products } from "../../data/productList";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { VisibilityContext } from "../../contexts/VisibilityContext";
import { sequentialPrefixSearch } from "./sequentialPrefixSearch";
import animateMessage from "../../functions/AnimationOfWrite";
import {
  ContainerForFormStyled,
  FormStyled,
  InputStyled,
  DivSpanStyled,
  SpanSearchStyled,
  DivMsgStyled,
  PointedShapeStyed,
  PMsgStyled,
  CompletionsDivStyled,
  DivOnePStyled,
  PStyled,
  InputForFocusStyled,
} from "./StylizedTagsSearchBar";

//produtos únicos para sugestão
function getUniqueResults(products, start = 0, end = 14) {
  const seen = new Set();
  return products
    .map((p) => p.name)
    .filter((name) => {
      const prefix = name.slice(start, end).toLowerCase();
      if (seen.has(prefix)) return false;
      seen.add(prefix);
      return true;
    });
}

function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function normalize2(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function animateInputMessage(message, setState) {
  let index = 0;

  const writeInterval = setInterval(() => {
    setState(() => message.slice(0, index + 1));
    index++;

    if (index >= message.length) {
      clearInterval(writeInterval);

      // Depois de um pequeno delay, apaga
      setTimeout(() => {
        let eraseIndex = message.length;

        const eraseInterval = setInterval(() => {
          eraseIndex--;
          setState(message.slice(0, eraseIndex));

          if (eraseIndex <= 0) {
            clearInterval(eraseInterval);
          }
        }, 40); // apagar mais rápido
      }, message.length * 100); // tempo de exibição completa
    }
  }, 80); // escrever uma letra a cada 80ms
}

function SearchBar({ copy, onHome }) {
  const navigate = useNavigate();
  const [thisInput, setThisInput] = useState("");
  const [prevInput, setPrevInput] = useState("");
  const inputRef = useRef(null);
  const [returnedProducts, setReturnedproducts] = useState([]);

  const { preventClick, setPreventClick, tipForRecruiter, setTipForRecruiter } =
    useContext(VisibilityContext);
  const { setSearchProducts } = useContext(CartContext);

  //estados para autocompletar
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [completions, setCompletions] = useState([""]);
  const [sixUniqueSuggestions, setSixUniqueSuggestions] = useState([""]);
  const [countComplete, setCountCompletes] = useState(2);

  //dica para recrutador
  const [textOfTip, setTextOfTip] = useState("");
  const tip = "Digite 'Biscoito'";
  const [viewTipState, setViewTipState] = useState(false);

  const viewTip = () => {
    setViewTipState(true);
    setPreventClick(true);

    animateMessage(tip, setTextOfTip);

    setTimeout(() => {
      setTipForRecruiter(false);
    }, 3500);
  };

  function whenTyping(e) {
    if (tipForRecruiter) return;

    const value = e.target.value;
    setPrevInput(thisInput);
    setThisInput(value);
    const term = value.toLowerCase().trim();

    // está apagando
    if (value <= prevInput) {
      setSixUniqueSuggestions([]);
      setCompletions([]);
    } // escrevendo
    else {
      if (term.length % 2 === 0) {
        const results = sequentialPrefixSearch(all_products, term);
        const uniqueResults = getUniqueResults(results, 0, 14).slice(0, 6);
        setSixUniqueSuggestions(uniqueResults);
        const completions = uniqueResults.map((name) => name.slice(0, 13));

        if (
          completions[0] &&
          normalize(term).startsWith(normalize(completions[0]))
        ) {
          setCompletions([]);
          setSixUniqueSuggestions([]);
        } else {
          setCompletions(completions);
        }
      }
    }
    if (term === "") {
      setSixUniqueSuggestions([]);
      setCompletions([]);
      setCountCompletes(2);
      return;
    }
  }

  function handleClickComplete(e, suggestion) {
    if (e.button === 2) {
      return;
    }
    let newSuggestion = "";
    let normalizedInput = normalize2(thisInput);
    suggestion = normalize2(suggestion);

    if (suggestion.startsWith(normalizedInput)) {
      newSuggestion =
        normalizedInput + suggestion.slice(normalizedInput.length);
    } else {
      newSuggestion = normalizedInput + suggestion;
    }

    let copyUniqueSuggestions = sixUniqueSuggestions.map((item) =>
      normalize(item)
    );
    let matchedIndex = copyUniqueSuggestions.findIndex((item) =>
      item.startsWith(newSuggestion)
    );
    let matchedItem = sixUniqueSuggestions[matchedIndex];

    const completeSuggestion =
      matchedItem !== undefined
        ? matchedItem.split(/\s+/).slice(0, countComplete).join(" ")
        : suggestion;

    setThisInput(completeSuggestion);
    setCompletions([""]);

    const results = sequentialPrefixSearch(all_products, completeSuggestion);
    let newStart = completeSuggestion.length;
    let newEnd = newStart + 14;

    const uniqueResults = getUniqueResults(results, newStart, newEnd); //pegar resultados unicos
    const newresults = uniqueResults.slice(0, 6); //restringir a 6 resultados
    setSixUniqueSuggestions(newresults);

    const newCompletions = uniqueResults.map((name) =>
      name.slice(newStart, newEnd)
    );
    setCompletions([...newCompletions]);

    setCountCompletes(countComplete + 1);
  }

  const handleClickScrollOnMobile = () => {
    if (onHome) {
      const el = document.documentElement.scrollTop
        ? document.documentElement
        : document.body;

      if (window.innerWidth <= 768) {
        setTimeout(() => {
          el.scrollTo({
            top: 130,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  };

  useEffect(() => {
    if (countComplete > 2) {
      const currentWords = thisInput.trim().split(/\s+/).filter(Boolean).length;
      const prevWords = prevInput.trim().split(/\s+/).filter(Boolean).length;

      if (currentWords <= prevWords) {
        setCountCompletes(2);
      }
    }
  }, [thisInput]);

  function handleClickSearch() {
    const term = thisInput.toLowerCase();
    if (!term) {
      animateInputMessage("Digite algo", setThisInput);
      return;
    }
    const results = sequentialPrefixSearch(all_products, term);
    setReturnedproducts(results);
    setSearchInitiated(true);
  }

  useEffect(() => {
    if (searchInitiated) {
      setSearchProducts(returnedProducts);
      setCompletions([]);
      if (copy === false) {
        navigate("/buscar-produtos");
        setSearchInitiated(false);
      }
    }
  }, [searchInitiated, returnedProducts]);

  useEffect(() => {
    //remover foco do input com toque fora em telas touch
    // manter no caso de click na sugestão
    const handleClickOutsideSearchBar = (e) => {
      const active = document.activeElement;
      const isInputOrTextarea =
        active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA");
      const clickedInsideInput =
        e.target.closest("input") || e.target.closest("textarea");
      const clickedOnSuggestion = e.target.closest("[data-suggestion]");
      const clickedOnSpan = e.target.closest("[data-span]");

      if (
        isInputOrTextarea &&
        !clickedInsideInput &&
        !clickedOnSuggestion &&
        !clickedOnSpan
      ) {
        active.blur();
        setThisInput("");
        setCompletions([""]);
      }
    };
    document.addEventListener("pointerdown", handleClickOutsideSearchBar);

    return () => {
      const el = document.documentElement.scrollTop
        ? document.documentElement
        : document.body;

      el.scrollTo({
        top: 0,
      });

      document.removeEventListener("pointerdown", handleClickOutsideSearchBar);
    };
  }, []);

  return (
    <ContainerForFormStyled $copy={copy}>
      <FormStyled
        $copy={copy}
        onSubmit={(e) => {
          e.preventDefault();
          handleClickSearch();
        }}
      >
        <InputStyled
          $copy={copy}
          type="text"
          name="query"
          placeholder="O que queres? Digite aqui"
          value={thisInput}
          onChange={(e) => whenTyping(e)}
          onClick={preventClick ? null : viewTip}
          onPointerDown={handleClickScrollOnMobile}
          ref={inputRef}
          autoComplete="off"
        />
        <DivSpanStyled $copy={copy} data-span onPointerDown={handleClickSearch}>
          <SpanSearchStyled className="material-symbols-rounded">
            search
          </SpanSearchStyled>
        </DivSpanStyled>
      </FormStyled>

      {tipForRecruiter && viewTipState && (
        <DivMsgStyled>
          <PointedShapeStyed />
          <PMsgStyled>{textOfTip}</PMsgStyled>
        </DivMsgStyled>
      )}

      {completions != "" && (
        <CompletionsDivStyled $copy={copy}>
          {completions.map((suggestion, i) => (
            <DivOnePStyled
              key={i}
              data-suggestion
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
              onPointerUp={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setTimeout(() => {
                  inputRef.current.focus();
                }, 0);
                handleClickComplete(e, suggestion);
              }}
              onClick={(e) => {
                e.stopPropagation();
                inputRef.current.focus();
              }}
            >
              <InputForFocusStyled type="text" />
              <PStyled>{suggestion}...</PStyled>
            </DivOnePStyled>
          ))}
        </CompletionsDivStyled>
      )}
    </ContainerForFormStyled>
  );
}
export default SearchBar;
