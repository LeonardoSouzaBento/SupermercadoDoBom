import styled from 'styled-components';

export const ProdInfoSc = styled.div`
  width: calc(100% - 24px);
  margin: 0 auto;
  display: flex;
  gap: 8px;
  align-items: center;
  flex-direction: column;
  & div {
    width: 100%;
  }
  & p {
    text-align: center;
  }
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 16px 0;
    margin-bottom: 16px;
    min-height: 56px;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);

    & > p {
      text-align: center;
      line-height: 1.4;

      @media screen and (max-width: 577px) {
        max-width: 350px;
      }
      @media screen and (min-width: 577px) {
        max-width: 330px;
      }
    }
    & #price {
      font-size: var(--text-lg);
      font-weight: 600;
    }
  }
`;

export const ProdImageSc = styled.div`
  display: block;
  margin: auto;
  width: 100%;
  height: 340px;
  position: relative;
  padding: 16px;
  margin-bottom: 8px;
  box-sizing: border-box;
  overflow: hidden;
  @media screen and (max-width: 375px) {
    height: auto;
  }

  @media screen and (max-width: 577px) {
    max-width: 340px;
  }
  @media screen and (min-width: 577px) {
    height: 320px;
    width: 320px;
  }

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    height: auto;
    box-sizing: border-box;
  }

  & #weight {
    position: absolute;
    bottom: 38px;
    background-color: var(--background);
    color: #292e4e;
  }

  & #discount {
    position: absolute;
    bottom: 4px;
    right: 0;
    background-color: hsla(var(--red-brand-value), 0.03);
    padding: 0 12px;
    padding-bottom: 2.5px;
    color: var(--red-brand);
    border-radius: 16px;
    font-size: var(--text-sm);
  }
`;

export const BtnGroupSc = styled.div`
  width: 100%;
  min-width: 200px;
  height: max-content;
  display: flex;
  background-color: ${(props) => props.$bg};
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  & > p {
    color: hsl(var(--primary-50));
    font-size: var(--text-lg);
  }
  @media screen and (max-width: 350px) {
    min-width: 180px;
  }
`;