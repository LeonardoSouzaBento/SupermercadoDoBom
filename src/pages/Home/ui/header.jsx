import styled from 'styled-components';

export const HeaderStyled = styled.header`
  height: auto;
  padding-block: 18px;
  padding-inline: 24px;
  width: 100%;
  max-width: 1000px;
  margin-inline: auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1cap;
  box-sizing: border-box;
  position: relative;

  @media screen and (min-width: 840px) {
    flex-direction: row;
    align-items: center;
    height: 130px;
    gap: 12px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1080px;
  }

  & > #logo-name {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    @media screen and (min-width: 640px) {
      flex-direction: row;
      justify-content: center;
      gap: 16px;
    }

    & > #logo {
      width: 60px;
      height: 60px;
      border-radius: 999px;
      background-color: var(--red-brand);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      /* @media screen and (min-width: 640px) {
        margin-top: 8px;
      } */
    }

    & > #nome {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      text-align: center;
      & > h1 {
        width: 100%;
        text-transform: capitalize;
      }
      & > p {
        width: 100%;
      }
      @media screen and (min-width: 640px) {
        text-align: start;
        margin-right: 8px;
      }
    }
  }

  & > div:nth-child(2) {
    width: 100%;
    height: 40px;
    max-width: 94%;
    border-radius: 999px;
    background-color: var(--white-foreground);
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 640px) {
      max-width: 72%;
    }
    @media screen and (min-width: 840px) {
      max-width: 50%;
    }
  }

  & > button {
    height: 40px;
    width: 40px;
    border-radius: 999px;
    padding: 0;
    background-color: var(--red-brand);
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 840px) {
      position: absolute;
      top: 12px;
      right: 12px;
    }
    @media screen and (min-width: 840px) {
      position: relative;
      margin-left: 12px;
    }
    @media screen and (min-width: 1200px) {
      width: auto;
    }
    & > p {
      @media screen and (max-width: 1200px) {
        display: none;
      }
      @media screen and (min-width: 1200px) {
        display: inline-flex;
        padding: 0 24px;
      }
    }
  }
`;
