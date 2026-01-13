import styled, { css } from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 56px;
  margin-bottom: 12px;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const Title = styled.h2`
  width: max-content;
  box-sizing: border-box;
  margin: 0 auto;
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
      width: calc(100% - 24px);
      max-width: 640px;
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
