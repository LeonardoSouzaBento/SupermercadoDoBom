import React, { useContext } from 'react'
import styled from 'styled-components';
import { CartContext } from '../../Componentes/CartContext';

//padding: ${(props) => props.$variant === "cart" ? "8px" : "0px"};
// background-color: ${({ $variant }) => $variant === 'promo' ? 'lightblue' : 'white'};

const MainStyled = styled.main`
  background-color: white;
`;

const Cart = () => {

  const{clickHistory} = useContext(CartContext);
  return (
      <MainStyled>
        {clickHistory.map((item, index) => (
          <div key={index}>
            <p>ID: {item.id}</p>
            <p>Preço: R$ {item.price}</p>
            <p>{item.add ? 'Adicionado' : 'Removido'}</p>
            <p>Quantidade: {item.quant}</p>
            <hr />
          </div>
        ))}
      </MainStyled>
  )
}

export default Cart