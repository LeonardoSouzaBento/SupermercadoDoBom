import styled from 'styled-components';

export const ContainerStyled = styled.div`
  height: 100vh;
  width: auto;
  max-width: max-content;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  /* card wrapper */
  & > div {
    width: calc(100% - 28px);
    max-width: 42rem;
    @media screen and (max-width: 375px) {
      width: calc(100% - 16px);
    }

    & > #header {
      padding: 0 20px;
      text-align: center;
      margin-bottom: 32px;

      & > #logo {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        padding-right: 0.22rem;
        border-radius: 50%;
        background-color: var(--primary);
        margin-bottom: 8px;
        box-shadow: var(--shadow-sm);
        transform: scaleX(-1);
      }
      /* título e subtítulo */
      & > #title {
        & > h1 {
          font-size: var(--text-big-h1);
          color: var(--red-brand);
        }
        & > p {
          color: var(--muted-foreground);
          font-family: var(--font-header);
        }
      }
    }

    & > div:last-child {
      width: 100%;
      margin: 0 auto;

      & > p {
        max-width: 80%;
        margin: 0 auto;
        text-align: center;
        color: #64748b;
        font-size: var(--text-xs);
        margin-top: 32px;

        & > a {
          text-decoration: none;
        }
      }
    }
  }
`;
