import styled from 'styled-components';
import {FormStyled, InputStyled, DivSpanStyled} from './ComponentesSearchBar'

const ContainerForFormStyled = styled.div`
  width: 100%;
  padding: 14px 0px;
  padding-bottom: 13px;
  position: relative;
  visibility: hidden;
`;

export default function SearchBarNoFunctions() {
  return (
    <ContainerForFormStyled>
        <FormStyled>
          <InputStyled type="text" name="query" placeholder="O que você quer? Digite aqui"/>
          <DivSpanStyled>
            <span className="material-symbols-rounded" style={{color: "rgb(150, 150, 150)"}}>search</span>
          </DivSpanStyled>
        </FormStyled>
    </ContainerForFormStyled>
  );
}
