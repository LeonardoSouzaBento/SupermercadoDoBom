import styled from 'styled-components';

export const CardStyled = styled.div`
  background: #fff;
  border-radius: 15px;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--card-border);
  padding: 24px;
  padding-top: 16px;
  position: relative;

  /* header */
  & > div:first-child {
    margin-bottom: 18px;
    padding-bottom: 1ex;
    border-bottom: 1px solid var(--border);
    ${(props) => props.$inEmail && 'margin-bottom: 0.8rem;'};

    & h3 {
      color: var(--primary);
      text-align: left;
      margin-bottom: 3px;
    }

    & p {
      color: #64748b;
      text-align: left;
      font-size: var(--text-sm);
    }
  }
`;

export const InputWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.2rem;
  ${(props) => props.$password && 'margin-bottom: 1.6rem;'}
  ${(props) => props.$email && 'padding-top: 1.6rem;'}
  ${(props) => props.$reset && 'margin-bottom: 2rem;'}

  & p {
    border: 1px solid var(--red-brand-hover);
    outline: 0.3rem solid var(--pink);
    color: var(--red-brand-hover);
    font-family: var(--font-body);
    font-weight: 600;
    border-radius: 0.8rem;
    box-sizing: border-box;
    padding: 0.8rem 0;
    padding-left: 1.2rem;
    margin-top: 0.6rem;
  }

  & a {
    text-align: center;
    font-family: var(--font-body);
    color: #551a8b;
    text-decoration: underline;
    margin-top: 0.8rem;
    cursor: default;
  }
`;

export const LabelStyled = styled.label`
  font-weight: 500;
  font-family: 'Open Sans', sans-serif;
  color: var(--dark-primary);
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
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

export const PasswordWrapperStyled = styled.div`
  position: relative;
`;

export const TogglePasswordStyled = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: #94a3b8;

  &:hover {
    color: #1e293b;
  }
`;

export const SmallTextStyled = styled.p`
  color: #64748b;
  text-align: center;
  font-size: var(--text-xs);
  margin-top: 2.4rem;
`;

export const VisitorBoxStyled = styled.div`
  text-align: center;
  padding: 0.8rem;
  background: var(--background);
  border-radius: 1.2rem;
  margin-bottom: 1.6rem;

  & p {
    color: var(--red-brand-hover);
    scale: 0.95;
    text-align: left;
  }
`;
