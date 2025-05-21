import { useState } from 'react';
import { all_products } from '../../../data/all_products';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { binaryPrefixSearch } from './binaryPrefixSearch';
import { ContainerForFormStyled, FormStyled, InputStyled, DivSpanStyled, CompletionsDivStyled, PStyled } from './ComponentesSearchBar';

export default function SearchBarCopy() {
  const [input, setInput] = useState("");
  const {setSearchProducts, setSearchQuantities}=useContext(CartContext);
  const [completes, setCompletes] = useState(['']);

  function whenTyping(e) {
    setInput(e.target.value)
    const term = input.toLowerCase();
    if(term.length%2==0){
    const results = binaryPrefixSearch(all_products, term);
    const threeResults = results.slice(0, 4);
    const newCompletions = threeResults.map(product => {
      return product.name.slice(0, 13);
    });
    setCompletes([...newCompletions]);
    }
    if(e.target.value == ''){setCompletes([''])}
  }

  function handleClickSearch(action, text) {
    if(action===0){
      const term = input.toLowerCase();
      const results = binaryPrefixSearch(all_products, term);
      setSearchProducts(results);
      setSearchQuantities(results.map(() => 0));
      setCompletes(['']);
    }
    else{
      const results = binaryPrefixSearch(all_products, text);
      setSearchProducts(results);
      setSearchQuantities(results.map(() => 0));
      setTimeout(() => {
        setCompletes([''])
      }, 300);
    }
  }

  return (
    <ContainerForFormStyled $copy={true}>
      <FormStyled onSubmit={(e) => {
        e.preventDefault();
        handleClickSearch(0);
      }} $copy={true}>
        <InputStyled 
        type="text" 
        name="query" 
        value={input}
        $copy={true}
        placeholder="Digite aqui..."
        onChange={(e) => whenTyping(e)}
        >
        </InputStyled>
        <DivSpanStyled onClick={(e)=>handleClickSearch(0)}>
          <span className="material-symbols-rounded" style={{color: "black"}}>search</span>
        </DivSpanStyled>
      </FormStyled>

      {completes!='' && (
        <CompletionsDivStyled>
            {completes.map((e, i)=>(<PStyled key={i} onPointerDown={()=>{handleClickSearch(1, e)}} $copy={true}>{e}...</PStyled>))}
        </CompletionsDivStyled>
      )}
    </ContainerForFormStyled>
  );
}