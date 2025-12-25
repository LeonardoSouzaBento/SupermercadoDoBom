import styled from 'styled-components';

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1cap;
  ${(props) => props.$customStyles && props.$customStyles}
`;

const InputStyled = styled.input`
  width: 100%;
  padding: 0.808rem 1.2rem;
  border-radius: 0.8rem;
  box-sizing: border-box;
  border: 1px solid #cbd5e1;
  font-family: var(--font-body);
  font-weight: 400;
  box-shadow: inset 0 1px 0.3rem rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 0.2rem rgba(79, 70, 229, 0.3);
  }
`;

const LabelStyled = styled.label`
  padding-bottom: 0.7ex;
`;

const WrapperInput = ({ children, customStyles }) => {
  return <WrapperStyled $customStyles={customStyles}>{children}</WrapperStyled>;
};

const Label = ({ children }) => {
  return <LabelStyled>{children}</LabelStyled>;
};

const Input = ({ name, type, placeholder }) => {
  return <InputStyled name={name} type={type} placeholder={placeholder} />;
};

export { Input, WrapperInput, Label };
