import styled, { css } from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 56px;
  margin-bottom: 0;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  /* border-radius: 0 0 16px 16px; */
`;

const Title = styled.h2`
  width: max-content;
  margin: auto;
  text-align: left;
  padding-bottom: 6px;
  color: var(--white-foreground);

  ${(props) =>
    props.$title === 'sua compra' &&
    css`
      width: calc(100% - 24px);
      max-width: 768px;
      @media screen and (min-width: 640px) {
        width: calc(100% - 48px);
      }
    `}
  ${(props) =>
    props.$title === 'minha conta' &&
    css`
      @media screen and (max-width: 375px) {
        width: calc(100% - 16px);
      }
      @media screen and (min-width: 375px) {
        width: calc(100% - 28px);
        max-width: 52rem;
      }
      @media screen and (min-width: 993px) and (max-width: 1085px) {
        width: max-content;
        margin: 0;
        margin-left: 1.6rem;
      }
      @media screen and (min-width: 1085px) {
        max-width: 105.6rem;
      }
    `}
`;

const PageHeader = ({ title }) => {
  return (
    <div>
      <Header>
        <Title $title={title.toLowerCase()}>{title}</Title>
      </Header>
    </div>
  );
};

export default PageHeader;
