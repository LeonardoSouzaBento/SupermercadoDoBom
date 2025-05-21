import styled from 'styled-components';
import {FormStyled, DivSpanStyled} from './ComponentesSearchBar'

const ContainerForFormStyled = styled.div`
  width: 100%;
  padding: 14px 0px;
  padding-bottom: 13px;
  position: relative;
  visibility: hidden;
`;

export const InputStyled = styled.input`
  height: 100%;
  width: 100%;
  touch-action: auto;
  border-radius: 22px;
  border: 1px solid rgb(172, 172, 172);
  background-color: ${props => props.$copy ? 'rgb(255, 255, 255)' : 'white'};
  border: 4px solid blue;
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
