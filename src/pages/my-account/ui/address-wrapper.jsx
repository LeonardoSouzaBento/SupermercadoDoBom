import styled from "styled-components";

export const AddressWrapperStyled = styled.div`
  position: relative;

  & > div.info-wrapper {
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1;
    gap: 16px;

    @media screen and (min-width: 430px) {
      grid-template-columns: repeat(2, 1fr);
    }

    &.title {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 8px;
      position: relative;
      @media screen and (max-width: 375px) {
        width: 100%;
      }
      & > p {
        color: var(--muted-foreground);
      }
    }
  }
`;