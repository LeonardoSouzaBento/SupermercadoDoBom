import styled from 'styled-components';

export const WrapperStyled = styled.div`
  width: 100%;
  background-color: hsla(var(--primary-50), 0.66);
  backdrop-filter: blur(10px);
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 4;
  height: 56px;

  & > div#buttons-wrapper {
    width: 100%;
    height: 56px;
    max-width: 988px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
    box-sizing: border-box;
    margin-inline: auto;
    padding-inline: 12px;
    box-sizing: border-box;
  }
  /* feedback cart */
  & #cart-feedback {
    width: max-content;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--white-foreground);
    background-color: var(--red-brand);

    &:hover {
      background-color: var(--red-brand-hover);
    }
  }
`;
