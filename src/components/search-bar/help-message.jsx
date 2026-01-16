import styled from 'styled-components';

const DivMsgStyled = styled.div`
  background-color: blue;
  height: max-content;
  width: max-content;
  border-radius: 0.7rem;
  padding: 0 1.6rem;
  position: absolute;
  bottom: -3.2rem;
  left: 4%;
  z-index: 4;

  @media screen and (max-width: 375px) {
    max-width: 26rem;
  }
  @media screen and (max-width: 768px) {
    max-width: 30.8rem;
  }
  @media screen and (min-width: 993px) {
    left: 4.2%;
  }

  & > div {
    height: 1rem;
    width: 1rem;
    background-color: blue;
    rotate: 45deg;
    border: 0.4rem;
    position: absolute;
    top: -0.5rem;
    left: 1.6rem;
  }

  & > p {
    color: var(--white-foreground);
    padding: 0.6rem 0px;
    padding-bottom: 0.8rem;
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
