import styled from 'styled-components';

export const WrapperStyled = styled.div`
  width: 100%;
  background-color: hsla(var(--primary-50), 0.7);
  border-top: 1px solid hsla(var(--primary-50), 0.2);
  backdrop-filter: blur(10px);
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 4;
  height: 56px;

  & > div#buttons-wrapper {
    width: 100%;
    height: 56px;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin-inline: auto;
    padding-inline: 12px;
    box-sizing: border-box;

    @media screen and (min-width: 840px) {
      gap: 16px;
    }
  }
  /* feedback cart */
  & #cart-feedback {
    width: max-content;
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--white-foreground);
    background-color: var(--red-brand);

    &:hover {
      background-color: var(--red-brand-hover);
    }
  }
`;
