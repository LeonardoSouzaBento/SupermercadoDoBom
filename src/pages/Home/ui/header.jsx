import styled from 'styled-components';

export const HeaderStyled = styled.header`
  height: auto;
  padding: 24px 18px 20px;
  width: 100%;
  max-width: 1000px;
  margin-inline: auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  box-sizing: border-box;
  position: relative;

  @media screen and (min-width: 940px) {
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
    gap: 1ex;

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
        font-weight: 400;
      }
      @media screen and (min-width: 640px) {
        text-align: start;
        margin-right: 8px;
      }
    }
  }

  & > div:nth-child(2) > form {
    width: 100%;
    height: 48px;
    border-radius: 999px;
    background-color: var(--white-foreground);
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 640px) {
      width: calc(100% - 28px);
    }
    @media screen and (min-width: 640px) {
      max-width: 76%;
    }
    @media screen and (min-width: 940px) {
      max-width: none;
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
    @media screen and (max-width: 940px) {
      position: absolute;
      top: 20px;
      right: 20px;
    }
    @media screen and (min-width: 940px) {
      position: relative;
      margin-left: 12px;
    }
    @media screen and (min-width: 1200px) {
      width: auto;
      height: 44px;
      padding-inline: 0.9em;
    }
    & > p {
      font-family: var(--font-button);
      font-weight: 600;
      line-height: 1;
      padding-bottom: 1px;
      @media screen and (max-width: 1200px) {
        display: none;
      }
      @media screen and (min-width: 1200px) {
        display: inline-flex;
      }
    }
  }
`;
