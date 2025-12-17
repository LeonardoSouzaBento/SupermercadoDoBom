import styled from "styled-components";

export const ContainerStyled = styled.div`
  margin-bottom: 8px;
  overflow-x: hidden;
  position: relative;
  z-index: 2;

  width: 100%;

  @media screen and (min-width: 1201px) {
    width: calc(100% - 52px);
    margin: auto;
    margin-bottom: 10px;
  }
  /* header */
  & > div:first-child {
    width: 100%;
    box-sizing: border-box;
    padding-right: 20px;
    margin-bottom: 32px;
    position: relative;

    @media screen and (min-width: 1201px) {
      padding-right: 25px;
    }

    & > h3 {
      color: var(--dark-primary);
      text-align: center;
    }
    & strong {
      font-weight: 400;
    }
  }
  /* wrapper rolável*/
  & > div:last-child {
    width: auto;
    margin: auto;
    padding: 8px;
    padding-right: 20px;
    padding-bottom: 24px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    gap: 12px;
    position: relative;
    overflow-x: scroll;
    user-select: none;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
      display: none;
    }

    @media screen and (max-width: 375px) {
      gap: 15px;
    }
    @media screen and (min-width: 1201px) {
      padding-right: 6px;
      justify-content: space-between;
    }
    @media screen and (min-width: 375px) and (max-width: 1200px) {
      padding-right: 20px;
    }
    @media screen and (min-width: 1201px) {
      gap: 0;
    }
  }
`;