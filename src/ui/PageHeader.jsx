import styled, { css } from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 5.2rem;
  margin-bottom: 0;
  background-color: var(--primary);
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  width: max-content;
  margin: auto;
  text-align: left;
  color: var(--white-foreground);

  ${(props) =>
    props.$title === 'sua compra' &&
    css`
      @media screen and (max-width: 414px) {
        margin: 0;
        padding-left: 20px;
      }
      @media screen and (min-width: 414px) and (max-width: 596px) {
        width: 40rem;
      }
      @media screen and (min-width: 596px) and (max-width: 768px) {
        width: 575px;
      }
      @media screen and (min-width: 769px) {
        width: 724px;
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
        max-width: 520px;
      }
      @media screen and (min-width: 993px) and (max-width: 1085px) {
        width: max-content;
        margin: 0;
        margin-left: 16px;
      }
      @media screen and (min-width: 1085px) {
        max-width: 1056px;
      }
    `}
`;

const PageHeader = ({ title }) => {
  return (
    <Header>
      <Title $title={title.toLowerCase()}>{title}</Title>
    </Header>
  );
};

export default PageHeader;
