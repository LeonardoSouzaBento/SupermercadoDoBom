import { CompletionsStyled, ContainerStyled, HelpMessage } from '@/components/ui/search-bar/index';
import { VisibilityContext } from '@contexts/VisibilityContext';
import { allProductsForSearch } from '@data/productList';
import { Button } from '@ui/button';
import { Icon } from '@ui/icon';
import { Search } from 'lucide-react';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import { UserDataContext } from '../contexts/Contexts/UserDataContext';
import {
  animateInputMessage,
  animationOfWrite,
  getUniqueResults,
  normalize,
  normalize2,
} from './search-bar/functions';
import { sequentialPrefixSearch } from './search-bar/sequentialPrefixSearch';

//produtos únicos para sugestão

function SearchBar({ copy, onHome }) {
  const navigate = useNavigate();
  const [thisInput, setThisInput] = useState('');
  const [prevInput, setPrevInput] = useState('');
  const inputRef = useRef(null);
  const [returnedProducts, setReturnedproducts] = useState([]);
  const { setSearchProducts } = useContext(UserDataContext);
  const { preventClick, setPreventClick, tipForRecruiter, setTipForRecruiter } =
    useContext(VisibilityContext);

  //estados para autocompletar
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [completions, setCompletions] = useState(['']);
  const [sixUniqueSuggestions, setSixUniqueSuggestions] = useState(['']);
  const [countComplete, setCountCompletes] = useState(2);

  //dica para recrutador
  const [textOfTip, setTextOfTip] = useState('');
  const tip = "Digite 'Biscoito'";
  const [viewTipState, setViewTipState] = useState(false);

  const viewTip = () => {
    setViewTipState(true);
    setPreventClick(true);

    animationOfWrite(tip, setTextOfTip);

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
        const results = sequentialPrefixSearch(allProductsForSearch, term);
        const uniqueResults = getUniqueResults(results, 0, 14).slice(0, 6);
        setSixUniqueSuggestions(uniqueResults);
        const completions = uniqueResults.map((name) => name.slice(0, 13));

        if (completions[0] && normalize(term).startsWith(normalize(completions[0]))) {
          setCompletions([]);
          setSixUniqueSuggestions([]);
        } else {
          setCompletions(completions);
        }
      }
    }
    if (term === '') {
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
    let newSuggestion = '';
    let normalizedInput = normalize2(thisInput);
    suggestion = normalize2(suggestion);

    if (suggestion.startsWith(normalizedInput)) {
      newSuggestion = normalizedInput + suggestion.slice(normalizedInput.length);
    } else {
      newSuggestion = normalizedInput + suggestion;
    }

    let copyUniqueSuggestions = sixUniqueSuggestions.map((item) => normalize(item));
    let matchedIndex = copyUniqueSuggestions.findIndex((item) => item.startsWith(newSuggestion));
    let matchedItem = sixUniqueSuggestions[matchedIndex];

    const completeSuggestion =
      matchedItem !== undefined
        ? matchedItem.split(/\s+/).slice(0, countComplete).join(' ')
        : suggestion;

    setThisInput(completeSuggestion);
    setCompletions(['']);

    const results = sequentialPrefixSearch(allProductsForSearch, completeSuggestion);
    let newStart = completeSuggestion.length;
    let newEnd = newStart + 14;

    const uniqueResults = getUniqueResults(results, newStart, newEnd); //pegar resultados unicos
    const newresults = uniqueResults.slice(0, 6); //restringir a 6 resultados
    setSixUniqueSuggestions(newresults);

    const newCompletions = uniqueResults.map((name) => name.slice(newStart, newEnd));
    setCompletions([...newCompletions]);

    setCountCompletes(countComplete + 1);
  }

  const handleClickScrollOnMobile = () => {
    if (onHome) {
      const el = document.documentElement.scrollTop ? document.documentElement : document.body;

      if (window.innerWidth <= 768) {
        setTimeout(() => {
          el.scrollTo({
            top: 130,
            behavior: 'smooth',
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
      animateInputMessage('Digite algo', setThisInput);
      return;
    }
    const results = sequentialPrefixSearch(allProductsForSearch, term);
    setReturnedproducts(results);
    setSearchInitiated(true);
  }

  useEffect(() => {
    if (searchInitiated) {
      setSearchProducts(returnedProducts);
      setCompletions([]);
      if (copy === false) {
        navigate('/buscar-produtos');
        setSearchInitiated(false);
      }
    }
  }, [searchInitiated, returnedProducts]);

  useEffect(() => {
    if (!onHome) {
      inputRef.current.focus();
    }
    //remover foco do input com toque fora em telas touch
    // manter no caso de click na sugestão
    const handleClickOutsideSearchBar = (e) => {
      const active = document.activeElement;
      const isInputOrTextarea =
        active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA');
      const clickedInsideInput = e.target.closest('input') || e.target.closest('textarea');
      const clickedOnSuggestion = e.target.closest('[data-suggestion]');
      const clickedOnSpan = e.target.closest('[data-span]');

      if (!isInputOrTextarea && !clickedInsideInput && !clickedOnSuggestion && !clickedOnSpan) {
        active.blur();
        setThisInput('');
        setCompletions(['']);
      }
    };
    document.addEventListener('pointerup', handleClickOutsideSearchBar);

    return () => {
      const el = document.documentElement.scrollTop ? document.documentElement : document.body;

      el.scrollTo({
        top: 0,
      });

      document.removeEventListener('pointerdown', handleClickOutsideSearchBar);
    };
  }, []);

  return (
    <ContainerStyled $copy={copy}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClickSearch();
        }}>
        <input
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

        <Button
          size="icon"
          variant="secondary"
          type="submit"
          data-span
          onPointerDown={handleClickSearch}
          customStyles={css`
            box-shadow: none !important;
          `}>
          <Icon size="lg" LucideIcon={Search} />
        </Button>
      </form>

      {tipForRecruiter && viewTipState && <HelpMessage message={textOfTip} />}

      {completions != '' && (
        <CompletionsStyled $copy={copy}>
          {completions.map((suggestion, i) => (
            <div
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
              }}>
              <input type="text" />
              <p>{suggestion}...</p>
            </div>
          ))}
        </CompletionsStyled>
      )}
    </ContainerStyled>
  );
}
export default SearchBar;
