import styled from 'styled-components';

export const ContainerSc = styled.section`
  width: 100%;
  position: relative;
  overflow-x: hidden;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-radius: 0 0 20px 20px;
  border-top: 1px solid hsla(var(--primary-50), 0.18);
  @media screen and (min-width: 1201px) {
    padding-bottom: 4px;
  }

  &::before {
    content: '';
    width: 100%;
    height: calc(100% - 56px);
    position: absolute;
    top: 56px;
    left: 0;
    background-image: linear-gradient(to bottom, var(--primary), hsl(var(--primary-50)));
    z-index: 0;
  }

  /* header */
  & > div:first-child {
    width: 100%;
    height: 56px;
    padding-top: 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    position: relative;
    z-index: 1;

    & > h3 {
      color: hsla(var(--white-value), 0.95);
    }
  }

  /* div de paginação */
  & > div:last-child {
    height: max-content;
    width: 200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;

    & > span {
      border-radius: 5px;
      @media screen and (max-width: 375px) {
        height: 9.5px;
        width: 9.5px;
      }
      @media screen and (min-width: 375px) {
        height: 10px;
        width: 10px;
      }
    }
    @media screen and (min-width: 1201px) {
      display: none;
    }
  }
`;
