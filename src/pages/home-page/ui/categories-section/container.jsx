import styled from 'styled-components';

export const ContainerSc = styled.div`
  width: 100%;
  margin-bottom: 8px;
  overflow-x: hidden;
  position: relative;
  z-index: 2;

  @media screen and (min-width: 1201px) {
    width: calc(100% - 52px);
    margin: auto;
    margin-bottom: 10px;
  }
  /* header */
  & > div#header {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: 1.5ex;

    & > h3,
    p {
      min-width: 100%;
      box-sizing: border-box;
    }
    & > p {
      color: var(--muted-foreground);
    }
    & > h3 {
      color: var(--primary);
    }
  }
  /* wrapper rolável*/
  & > div:last-child {
    width: auto;
    margin: auto;
    padding: 4px 20px 24px 4px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    gap: 15px;
    position: relative;
    overflow-x: scroll;
    user-select: none;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
      display: none;
    }

    @media screen and (min-width: 1201px) {
      padding-right: 6px;
      justify-content: space-between;
    }
    @media screen and (min-width: 375px) and (max-width: 1200px) {
      padding-right: 20px;
    }
  }
`;
