import styled from 'styled-components';

export const WrapperImageStyled = styled.div`
  display: block;
  margin: auto;
  width: 100%;
  height: 34rem;
  position: relative;
  padding: 1.6rem;
  margin-bottom: 0.8rem;
  box-sizing: border-box;
  overflow: hidden;
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Padrão */
  @media screen and (max-width: 375px) {
    height: auto;
  }

  @media screen and (max-width: 577px) {
    max-width: 34rem;
  }
  @media screen and (min-width: 577px) {
    height: 32rem;
    width: 32rem;
  }

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    height: auto;
    box-sizing: border-box;
  }

  /* peso e desconto */
  & div {
    -webkit-user-select: none; /* Safari, Chrome */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    user-select: none; /* Padrão */
  }

  & #weight {
    position: absolute;
    bottom: 3.8rem;
    background-color: var(--background);
    color: #292e4e;
  }

  & #discount {
    position: absolute;
    bottom: 0.4rem;
    right: 0;
    background-color: var(--secondary);
    padding: 0 1.4rem;
    padding-bottom: 0.25rem;
    color: var(--white-foreground);
    border-radius: 1.6rem;
  }
`;


