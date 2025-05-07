import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { products } from "../../data/data";

const  DivStyled= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 290px;
    height: max-content;
    border-radius: 24px 0px 0px 24px;
    position: fixed;
    right: 5px;
    bottom: 120px;
    background-color: rgb(174, 0, 0);
`;

const DivCancelStyled = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  height: 50px;
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

const DivSimNaoStyled = styled.p`
  display: flex;
  flex-direction: column;
  width: max-content;
  height: max-content;
  gap: 10px;
`;

const PSimStyled = styled.p`
  height: 100%;
  padding: 0px 20px;
  background-color: rgb(207, 59, 59);
  color: white;
  box-shadow: 0px 0px 3px rgb(137, 137, 137);
  text-transform: uppercase;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
`;

const PNaoStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
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
              <span className="material-symbols-outlined">
              error
              </span>
              <PStyled>Cancelar a compra?</PStyled>
          </DivCancelStyled>

          <DivSimNaoStyled>
            <PNaoStyled onClick={()=>setViewConfirm(false)} 
              onPointerDown={(e) => e.stopPropagation()}
              onPointerUp={(e) => {
              e.stopPropagation();
            }}>Voltar</PNaoStyled>

            <PSimStyled 
              onClick={handleConfirmCancel}
              onPointerDown={(e) => e.stopPropagation()}
              onPointerUp={(e) => {
              e.stopPropagation();
            }}>Sim, cancelar</PSimStyled>
          </DivSimNaoStyled>
      </DivStyled>
    )
}