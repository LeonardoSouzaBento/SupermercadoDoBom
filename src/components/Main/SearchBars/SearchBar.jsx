import { useState, useEffect, useContext, useRef } from 'react';
import { all_products } from '../../../data/all_products';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import { ViewContext } from '../../viewContext';
import { sequentialPrefixSearch } from './sequentialPrefixSearch';
import animateMessage from '../../../functions/AnimationOfWrite';
import {ContainerForFormStyled, FormStyled, InputStyled, DivSpanStyled, DivMsgStyled, PointedShapeStyed, PMsgStyled, CompletionsDivStyled, PStyled} from './ComponentesSearchBar'

function SearchBar() {
  const navigate = useNavigate();
  const [thisInput, setThisInput] = useState("");
  const [prevInput, setPrevInput] = useState('');

  const [returnedProducts, setReturnedproducts] = useState([]);

  const {preventClick, setPreventClick, viewSuggestion, setviewSuggestion} = useContext(ViewContext);
  const {setSearchProducts, setSearchQuantities} = useContext(CartContext);

  const [searchInitiated, setSearchInitiated] = useState(false);
  const [completes, setCompletes] = useState(['']);
  const [sixUniqueSuggestions, setSixUniqueSuggestions] = useState(['']);
  const [countComplete, setCountCompletes] = useState(2);

  const [textOfTip, setTextOfTip] = useState(0);
  const tip = "Digite 'biscoito'.";
  const inputRef= useRef(null);

  const viewTip = ()=> {
    setviewSuggestion(true);
    setPreventClick(true);

    animateMessage(tip, setTextOfTip)

    setTimeout(() => {
      setviewSuggestion(false);
    }, 3400);
  }
  //prevenir click durante a dica
 useEffect(() => {
    const inputElement = inputRef.current;
    if (inputElement) {
      if (preventClick) {
        inputElement.onclick = null;
       } else {
        inputElement.onclick = viewTip;
      }
    }
  }, [preventClick]);

  //produtos únicos para sugestão
  function getUniqueResults(products, start = 0, end = 14) {
  const seen = new Set();
  return products
    .map(p => p.name)
    .filter(name => {
      const prefix = name.slice(start, end).toLowerCase();
      if (seen.has(prefix)) return false;
      seen.add(prefix);
      return true;
    });
  }

  function whenTyping(e) {
    if (viewSuggestion) return;

    const value = e.target.value;
    setPrevInput(thisInput);
    setThisInput(value);
    
    const term = value.toLowerCase().trim();

    if (term.length % 2 === 0 && term !== '') {
      const results = sequentialPrefixSearch(all_products, term);
      const uniqueResults = getUniqueResults(results, 0, 14).slice(0, 6);

      setSixUniqueSuggestions(uniqueResults);
      const completions = uniqueResults.map(name => name.slice(0, 13));
      setCompletes(completions);
    } else if (term === '') {
      setCompletes(['']);
    }
  }

  function normalize(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }

  function handleClickComplete(suggestion) {
    const newSuggestion = thisInput + suggestion.slice(thisInput.length);

    const matchedItem = sixUniqueSuggestions.find(item => 
      normalize(item).startsWith(normalize(newSuggestion))
    );

    const completeSuggestion = matchedItem.split(/\s+/).slice(0, countComplete).join(' ');

    setThisInput(completeSuggestion);
    setCompletes(['']);

    const results = sequentialPrefixSearch(all_products, completeSuggestion);
    let newStart = completeSuggestion.length;
    let newEnd = newStart + 14;

    const uniqueResults = getUniqueResults(results, newStart, newEnd);
    const newresults = uniqueResults.slice(0, 6);
    setSixUniqueSuggestions(newresults);

    const newCompletions = uniqueResults.map(name => name.slice(newStart, newEnd));
    setCompletes([...newCompletions]);

    setCountCompletes(countComplete+1);
  }

  useEffect(() => {
    if(countComplete>2){
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
      animateInputMessage("Digite algo");
      return
    };
    const results = sequentialPrefixSearch(all_products, term);
    setReturnedproducts(results);
    
    setSearchInitiated(true);
  }

  function animateInputMessage(message) {
    let index = 0;

    const writeInterval = setInterval(() => {
      setThisInput((prev) => message.slice(0, index + 1));
      index++;

      if (index >= message.length) {
        clearInterval(writeInterval);

        // Depois de um pequeno delay, apaga
        setTimeout(() => {
          let eraseIndex = message.length;

          const eraseInterval = setInterval(() => {
            eraseIndex--;
            setThisInput(message.slice(0, eraseIndex));

            if (eraseIndex <= 0) {
              clearInterval(eraseInterval);
            }
          }, 40); // apagar mais rápido
        }, 800); // tempo de exibição completa
      }
    }, 80); // escrever uma letra a cada 80ms
  }

  useEffect(() => {
    if (searchInitiated) {
      setSearchProducts(returnedProducts);
      setSearchQuantities(returnedProducts.map(() => 0));
      navigate("/buscar-produtos");
      setSearchInitiated(false);
    }
  }, [returnedProducts]);

  return (
    <ContainerForFormStyled $copy={false}>
        <FormStyled onSubmit={(e) => {
          e.preventDefault();
          handleClickSearch(0);
        }}>
          <InputStyled 
          type="text" 
          name="query" 
          placeholder="O que você quer? Digite aqui"
          value={thisInput}
          onChange={(e) => whenTyping(e)}
          ref={inputRef}
          />
          <DivSpanStyled onPointerDown={(e)=>{handleClickSearch()}}>
            <span className="material-symbols-rounded" style={{color: "rgb(77, 77, 77)"}}>search</span>
          </DivSpanStyled>

          {viewSuggestion && (
          <DivMsgStyled>
            <PointedShapeStyed/>
            <PMsgStyled>{textOfTip}</PMsgStyled>
          </DivMsgStyled>)}
        </FormStyled>
        {completes!='' && (
          <CompletionsDivStyled>
            {completes.map((suggestion, i)=>
            (<PStyled key={i} onPointerDown={()=>{handleClickComplete(suggestion)}}>{suggestion}...</PStyled>))}
          </CompletionsDivStyled>
        )}
        
    </ContainerForFormStyled>
  );
}
export default SearchBar;