import styled from 'styled-components';

const WrapperSc = styled.div`
  background-color: blue;
  height: max-content;
  border-radius: 8px;
  padding: 0 16px;
  position: absolute;
  bottom: -40px;
  left: 12px;
  z-index: 4;

  @media screen and (min-width: 993px) {
    left: 4.2%;
  }

  & > div {
    height: 12px;
    width: 12px;
    background-color: blue;
    rotate: 45deg;
    border: 4px;
    position: absolute;
    top: -6px;
    left: 16px;
  }

  & > p {
    color: var(--white-foreground);
    padding: 6px 0px;
    padding-bottom: 8px;
  }
`;

export function HelpMessage({ message }) {
  return (
    <WrapperSc>
      <div />
      <p>{message}</p>
    </WrapperSc>
  );
}
