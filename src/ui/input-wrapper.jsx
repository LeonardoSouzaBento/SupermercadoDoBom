import styled from 'styled-components';

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  ${(props) => props.$styles && props.$styles}
`;

const InputWrapper = ({ children, styles, ...props }) => {
  return (
    <WrapperStyled {...props} $styles={styles}>
      {children}
    </WrapperStyled>
  );
};

export { InputWrapper };
