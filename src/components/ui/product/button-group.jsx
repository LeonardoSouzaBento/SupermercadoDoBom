import styled from 'styled-components';

export const ButtonGroupStyled = styled.div`
  width: 90%;
  height: 3.2rem;
  background-color: var(--primary);
  display: ${(props) => (props.$display ? 'flex' : 'none')};
  justify-content: space-between;
  border-radius: 0.6rem;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  position: absolute;
  bottom: 0.8rem;
  right: 5%;
  z-index: 1;

  @media screen and (min-width: 385px) and (max-width: 992px) {
    width: 85%;
    right: 1.2rem;
    bottom: 0;
  }
  transition: opacity 0.4s ease;
  ${(props) =>
    (props.$variant === 'similarList' ||
      props.$variant === 'announcement' ||
      props.$variant === 'cart') &&
    'display: none;'}

  /* botão de menos */
  & > div {
    height: 100%;
    width: 4.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-body);

    & > span {
      font-weight: 400;
      color: var(--primary-foreground);
      cursor: pointer;
      -webkit-user-select: none;
      user-select: none;
      font-size: 2.24rem;
    }
  }
  /* p de quantidade */
  & > p {
    font-weight: 600;
    font-size: var(--text-button);
    padding-top: 0.25rem;
    color: var(--white-foreground);
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
  }
`;
