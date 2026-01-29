import styled from 'styled-components';

export const HeaderStyled = styled.div`
  width: 100%;
  margin: auto;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--primary);
  border: 1px solid hsla(var(--primary-100), 0.88);
  border-radius: 8px;
  position: relative;

  & > div:first-child {
    width: auto;
    max-width: max-content;
    box-sizing: border-box;
    display: flex;
    gap: 12px;

    @media screen and (max-width: 512px) {
      flex-direction: column;
    }

    /* wrapper da foto do usuario */
    & > div#photo-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 54px;
      width: 54px;
      border-radius: 50%;
      overflow: hidden;
      background-color: #ecf0f5;
      position: relative;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        scale: 1.02;
      }
    }

    /* wrapper do nome e email do usuario */
    & > div#name-email-wrapper {
      width: auto;
      max-width: max-content;
      height: auto;

      & > h3 {
        word-break: break-word;
        margin-bottom: 0.25ex;
      }

      & > p {
        word-break: break-word;
        color: var(--muted-foreground);
      }
    }
  }
`;
