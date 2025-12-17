import styled, { css } from 'styled-components';
import { CentralizeDiv } from '@components/GenericStylizedTags';

export const PageWrapperStyled = styled.div`
  min-height: 90vh;
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.4rem 0;
  background: linear-gradient(to bottom, var(--background), rgb(243, 244, 246));
`;

export const ContainerStyled = styled.div`
  width: calc(100% - 28px);
  max-width: 42rem;
  @media screen and (max-width: 375px) {
    width: calc(100% - 16px);
  }
`;

export const LogoWrapperStyled = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;
`;

export const LogoCircleStyled = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 6.4rem;
  box-sizing: border-box;
  padding-right: 0.22rem;
  border-radius: 50%;
  background-color: var(--secondary);
  margin-bottom: 1.2rem;
  box-shadow: var(--shadow-sm);
  transform: scaleX(-1);

  & span {
    color: rgba(255, 255, 255, 0.98);
    font-weight: 500;
    padding-top: 0.2rem;
    padding-left: 1px;
    font-size: 3.7rem;
  }
`;

export const TitleStyled = styled.h1`
  font-size: 2.75rem;
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 0.4rem;
  font-family: Lato, sans-serif;
`;

export const SubtitleStyled = styled.p`
  color: #64748b;
  font-family: var(--font-header);
`;

export const CardStyled = styled.div`
  background: #fff;
  border-radius: 1.6rem;
  box-shadow: var(--shadow-md);
  padding: 2.4rem;
  position: relative;
`;

export const CardHeaderStyled = styled.header`
  margin-bottom: 2.4rem;
  ${(props) => props.$inEmail && 'margin-bottom: 0.8rem;'};
`;

export const CardTitleStyled = styled.h2`
  font-family: Lato, sans-serif;
  color: var(--primary);
  text-align: left;
  margin-bottom: 0.4rem;
`;

export const CardDescriptionStyled = styled.p`
  color: #64748b;
  font-family: var(--font-header);
  text-align: left;
`;

export const ButtonStyled = styled(CentralizeDiv)`
  width: 100%;
  height: 4.8rem;
  border-radius: 1rem;
  font-family: var(--font-button);
  font-weight: 550;
  color: var(--dark-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;
  border: none;
  margin-bottom: 1.6rem;
  transition: all 0.15s ease;

  ${(props) =>
    props.$variant === 'visitor' &&
    `
    background: var(--bluish-white);
    color: #0f172a;
    &:hover { background: var(--bluish-white-hover); }
  `}

  ${(props) =>
    props.$variant === 'market' &&
    `
    background: var(--primary);
    color: var(--white-foreground);
    &:hover { background: var(--primary-hover); }
  `}

  ${(props) =>
    props.$variant === 'google' &&
    `
    background-color: var(--white-foreground);
    border: 1px solid var(--light-border);
    &:hover { background-color: var(--white-hover); }
  `}

  ${(props) =>
    props.$variant === 'ghost' &&
    `
    background: transparent;
    color: var(--primary);
    border: 1px solid var(--border);
    &:hover { background: #f8fafc; }
  `}
  ${(props) => props.$reset && 'margin-bottom: 1.2rem;'}
  ${(props) =>
    props.$variant === 'market' &&
    props.$disable &&
    css`
      background-color: var(--disable);
      &:hover {
        background-color: var(--disable-hover);
      }
    `}
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
    border: 1px solid var(--secondary-hover);
    outline: 0.3rem solid var(--pink);
    color: var(--secondary-hover);
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
  font-size: 1.35rem;
  color: #64748b;
  text-align: center;
  font-family: var(--font-header);
  margin-top: 2.4rem;
`;

export const VisitorBoxStyled = styled.div`
  text-align: center;
  padding: 0.8rem;
  background: var(--background);
  border-radius: 1.2rem;
  margin-bottom: 1.6rem;

  & p {
    color: var(--secondary-hover);
    scale: 0.95;
    font-weight: 400;
    text-align: left;
  }
`;
