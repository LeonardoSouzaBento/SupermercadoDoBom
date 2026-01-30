import styled from 'styled-components';

export const ContainerSc = styled.div`
  height: 100vh;
  width: auto;
  padding: 0 16px;
  max-width: max-content;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  /* card wrapper */
  & > div {
    padding-block: 32px;
    max-width: 420px;

    & > #header {
      padding: 0 20px;
      text-align: center;
      margin-bottom: 40px;

      & > #logo {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        padding-right: 2.2px;
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
