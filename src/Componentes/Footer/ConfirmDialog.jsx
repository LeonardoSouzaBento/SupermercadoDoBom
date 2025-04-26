import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { products } from "../../data/data";

const  DivStyled= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 42px;
    border-radius: 24px 0px 0px 24px;
`;

const DivCancelStyled = styled.div`
  display: flex;
  width: auto;
  height: max-content;
`;

const DivSimNaoStyled = styled.p`
  gap: 6px;
  overflow: hidden;
`;

const PStyled = styled.p`
  font-family: "Lato", Arial, Helvetica, sans-serif;
  font-weight: 500;
  border-radius: 8px;
  color: white;

  @media screen and (min-width: 320px) and (max-width: 375px){
      font-size: 0.8em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px){
      font-size: 1.03em;
  }
  @media screen and (min-width: 577px){
      font-size: 1.035em;
  }
`;

const PSimStyled = styled.p`
  padding: 5px 15px;
  border: 1px solid rgb(171, 171, 171);
  background-color: rgb(236, 236, 236);
  box-shadow: 0px 0px 3px rgb(137, 137, 137);
  text-transform: uppercase;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;

`;

const PNaoStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  border: 1px solid rgb(171, 171, 171);
  background-color: rgb(255, 255, 255);
  padding: 5px 12px;
  text-transform: uppercase;
`;

export default function ConfirmDialog(){
    const {setViewConfirm, setQuantities, setClickHistory, totalQuantity} = useContext(CartContext);

    const handleConfirmCancel = () => {
        setQuantities(products.map(() => 0));
        setViewConfirm(false);
        setClickHistory([]);
    };

    return(
      <DivStyled>
          <DivCancelStyled>
              <PStyled>Cancelar a compra?</PStyled>
          </DivCancelStyled>

          <DivSimNaoStyled>
              <PSimStyled 
                onClick={handleConfirmCancel}
                onPointerDown={(e) => e.stopPropagation()}
                onPointerUp={(e) => {
                e.stopPropagation();
              }}>Sim</PSimStyled>

              <PNaoStyled onClick={()=>setViewConfirm(false)} 
              onPointerDown={(e) => e.stopPropagation()}
              onPointerUp={(e) => {
              e.stopPropagation();
              }}>Não</PNaoStyled>
              
          </DivSimNaoStyled>
      </DivStyled>
    )
}