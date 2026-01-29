import styled from 'styled-components';

const DivMsgStyled = styled.div`
  background-color: blue;
  height: max-content;
  width: max-content;
  border-radius: 7px;
  padding: 0 16px;
  position: absolute;
  bottom: -32px;
  left: 4%;
  z-index: 4;

  @media screen and (max-width: 375px) {
    max-width: 260px;
  }
  @media screen and (max-width: 768px) {
    max-width: 38px;
  }
  @media screen and (min-width: 993px) {
    left: 4.2%;
  }

  & > div {
    height: 10px;
    width: 10px;
    background-color: blue;
    rotate: 45deg;
    border: 4px;
    position: absolute;
    top: -5px;
    left: 16px;
  }

  & > p {
    color: var(--white-foreground);
    padding: 6px 0px;
    padding-bottom: 8px;
  }
`;

export function HelpMessage() {
  return (
    <DivMsgStyled>
      <div />
      <p>Busque por produtos</p>
    </DivMsgStyled>
  );
}

