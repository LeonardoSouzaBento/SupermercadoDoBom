import styled from 'styled-components';

const WrapperSc = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1cap;
  ${(props) => props.$styles && props.$styles}
`;

const InputSc = styled.input`
  width: 100%;
  padding: 8.08px 12px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #cbd5e1;
  font-family: var(--font-body);
  font-weight: 400;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.3);
  }
`;

const LabelSc = styled.label`
  padding-bottom: 0.7ex;
  &* {
    position: relative;
  }
`;

const WrapperInput = ({ children, styles, ...props }) => {
  return (
    <WrapperSc $styles={styles} {...props}>
      {children}
    </WrapperSc>
  );
};

const Label = ({ children, ...props }) => {
  return <LabelSc {...props}>{children}</LabelSc>;
};

const Input = ({ name, type, placeholder, ...props }) => {
  return <InputSc name={name} type={type} placeholder={placeholder} {...props} />;
};

export { Input, WrapperInput, Label };
