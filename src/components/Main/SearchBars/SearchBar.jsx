import { useState, useEffect, useContext, useRef } from "react";
import { all_products } from "../../../data/all_products";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../CartContext";
import { ViewContext } from "../../viewContext";
import { sequentialPrefixSearch } from "./sequentialPrefixSearch";
import animateMessage from "../../../functions/AnimationOfWrite";
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
  PStyled,
} from "./ComponentesSearchBar";

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
    setState((prev) => message.slice(0, index + 1));
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

function SearchBar({ copy }) {
  const navigate = useNavigate();
  const [thisInput, setThisInput] = useState("");
  const [prevInput, setPrevInput] = useState("");

  const [returnedProducts, setReturnedproducts] = useState([]);

  const { preventClick, setPreventClick, tipForRecruiter, setTipForRecruiter } =
    useContext(ViewContext);
  const { setSearchProducts } = useContext(CartContext);

  const [searchInitiated, setSearchInitiated] = useState(false);
  const [completions, setCompletions] = useState([""]);
  const [sixUniqueSuggestions, setSixUniqueSuggestions] = useState([""]);
  const [countComplete, setCountCompletes] = useState(2);

  const [textOfTip, setTextOfTip] = useState(0);
  const tip = "Digite 'Biscoito'";
  const inputRef = useRef(null);

  const viewTip = () => {
    setPreventClick(true);

    animateMessage(tip, setTextOfTip);

    setTimeout(() => {
      setTipForRecruiter(false);
    }, 3400);
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

  function handleClickComplete(suggestion) {
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

  return (
    <ContainerForFormStyled $copy={copy}>
      <FormStyled
        $copy={copy}
        onSubmit={(e) => {
          e.preventDefault();
          handleClickSearch(0);
        }}
      >
        <InputStyled
          $copy={copy}
          type="text"
          name="query"
          placeholder="O que você quer? Digite aqui"
          value={thisInput}
          onChange={(e) => whenTyping(e)}
          onClick={preventClick ? null : viewTip}
          ref={inputRef}
          autoComplete="off"
        />
        <DivSpanStyled
          $copy={copy}
          onPointerDown={(e) => {
            handleClickSearch();
          }}
        >
          <SpanSearchStyled className="material-symbols-outlined">search</SpanSearchStyled>
        </DivSpanStyled>

        {tipForRecruiter && (
          <DivMsgStyled>
            <PointedShapeStyed />
            <PMsgStyled>{textOfTip}</PMsgStyled>
          </DivMsgStyled>
        )}
      </FormStyled>

      {completions != "" && (
        <CompletionsDivStyled $copy={copy}>
          {completions.map((suggestion, i) => (
            <PStyled
              key={i}
              onPointerDown={() => {
                handleClickComplete(suggestion);
              }}
              $copy={copy}
            >
              {suggestion}...
            </PStyled>
          ))}
        </CompletionsDivStyled>
      )}
    </ContainerForFormStyled>
  );
}
export default SearchBar;
