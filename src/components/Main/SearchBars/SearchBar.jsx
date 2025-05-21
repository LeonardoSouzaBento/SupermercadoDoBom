import { useState, useEffect, useContext, useRef } from 'react';
import { all_products } from '../../../data/all_products';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import { ViewContext } from '../../viewContext';
import { binaryPrefixSearch } from './binaryPrefixSearch';
import animateMessage from '../../../functions/AnimationOfWrite';
import {ContainerForFormStyled, FormStyled, InputStyled, DivSpanStyled, DivMsgStyled, PointedShapeStyed, PMsgStyled, CompletionsDivStyled, PStyled} from './ComponentesSearchBar'

function SearchBar() {
  const navigate = useNavigate();
  const [thisInput, setThisInput] = useState("");
  const [returnedProducts, setReturnedproducts] = useState([]);

  const {preventClick, setPreventClick, viewSuggestion, setviewSuggestion} = useContext(ViewContext);
  const {setSearchProducts, setSearchQuantities, SearchBarRef, translateMain} = useContext(CartContext);

  const [searchInitiated, setSearchInitiated] = useState(false);
  const [completes, setCompletes] = useState(['']);

  const [textOfTip, setTextOfTip] = useState(0);
  const tip = "Digite 'açucar'.";
  const inputRef= useRef(null);

  const viewTip = ()=> {
    setviewSuggestion(true);
    setPreventClick(true);

    animateMessage(tip, setTextOfTip)

    setTimeout(() => {
      setviewSuggestion(false);
    }, 3400);
  }

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

  function handleClickSearch(action, text) {
    if(action===0){
      const term = thisInput.toLowerCase();
      if (!term) {
        animateInputMessage("Digite algo");
        return
      };
      const results = binaryPrefixSearch(all_products, term);
      setReturnedproducts(results);
    }
    else{
      const results = binaryPrefixSearch(all_products, text);
      setReturnedproducts(results);
    }
    setSearchInitiated(true);
  }

  function whenTyping(e) {
    if(viewSuggestion) return;
    setThisInput(e.target.value);

    const term = thisInput.toLowerCase();
    if(term.length%2==0){
      const results = binaryPrefixSearch(all_products, term);
      const fourResults = results.slice(0, 4);

      const newCompletions = fourResults.map(product => {
          return product.name.slice(0, 13);
      });
      setCompletes([...newCompletions]);
    }
    if(e.target.value == ''){setCompletes([''])}
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
      navigate("/SearchAction");
      setSearchInitiated(false);
    }
  }, [returnedProducts]);

  return (
    <ContainerForFormStyled ref={SearchBarRef} $copy={false} $translateValue={translateMain}>
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
          <DivSpanStyled onPointerDown={(e)=>{handleClickSearch(0)}}>
            <span className="material-symbols-rounded" style={{color: "rgb(150, 150, 150)"}}>search</span>
          </DivSpanStyled>

          {viewSuggestion && (
          <DivMsgStyled>
            <PointedShapeStyed/>
            <PMsgStyled>{textOfTip}</PMsgStyled>
          </DivMsgStyled>)}
        </FormStyled>
        {completes!='' && (
          <CompletionsDivStyled>
            {completes.map((e, i)=>(<PStyled key={i} onPointerDown={()=>{handleClickSearch(1, e)}}>{e}...</PStyled>))}
          </CompletionsDivStyled>
        )}
        
    </ContainerForFormStyled>
  );
}
export default SearchBar;