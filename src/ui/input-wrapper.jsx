import styled from 'styled-components';

const WrapperSc = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  ${(props) => props.$styles && props.$styles}
`;

const InputWrapper = ({ children, styles, ...props }) => {
  return (
    <WrapperSc {...props} $styles={styles}>
      {children}
    </WrapperSc>
  );
};

export { InputWrapper };
