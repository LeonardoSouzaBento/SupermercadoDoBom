import styled, { css } from 'styled-components';
import { CentralizeDiv } from '@components/GenericStylizedTags';

export const PageWrapperStyled = styled.div`
  min-height: 90vh;
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  background: linear-gradient(to bottom, var(--background), rgb(243, 244, 246));
`;

export const ContainerStyled = styled.div`
  width: calc(100% - 28px);
  max-width: 420px;
  @media screen and (max-width: 375px) {
    width: calc(100% - 16px);
  }
`;

export const LogoWrapperStyled = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

export const LogoCircleStyled = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  box-sizing: border-box;
  padding-right: 2.2px;
  border-radius: 50%;
  background-color: var(--secondary);
  margin-bottom: 12px;
  box-shadow: var(--shadow-sm);
  transform: scaleX(-1);

  & span {
    color: rgba(255, 255, 255, 0.98);
    font-weight: 500;
    padding-top: 2px;
    padding-left: 1px;
    font-size: 37px;
  }
`;

export const TitleStyled = styled.h1`
  font-size: 27.5px;
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 4px;
  font-family: Lato, sans-serif;
`;

export const SubtitleStyled = styled.p`
  color: #64748b;
  font-family: var(--font-header);
`;

export const CardStyled = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  padding: 24px;
  position: relative;
`;

export const CardHeaderStyled = styled.header`
  margin-bottom: 24px;
  ${(props) => props.$inEmail && 'margin-bottom: 8px;'};
`;

export const CardTitleStyled = styled.h2`
  font-family: Lato, sans-serif;
  color: var(--primary);
  text-align: left;
  margin-bottom: 4px;
`;

export const CardDescriptionStyled = styled.p`
  color: #64748b;
  font-family: var(--font-header);
  text-align: left;
`;

export const ButtonStyled = styled(CentralizeDiv)`
  width: 100%;
  height: 48px;
  border-radius: 10px;
  font-family: var(--font-button);
  font-weight: 550;
  color: var(--dark-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  border: none;
  margin-bottom: 16px;
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
  ${(props) => props.$reset && 'margin-bottom: 12px;'}
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
  gap: 6px;
  margin-bottom: 12px;
  ${(props) => props.$password && 'margin-bottom: 16px;'}
  ${(props) => props.$email && 'padding-top: 16px;'}
  ${(props) => props.$reset && 'margin-bottom: 20px;'}

  & p {
    border: 1px solid var(--secondary-hover);
    outline: 3px solid var(--pink);
    color: var(--secondary-hover);
    font-family: var(--font-body);
    font-weight: 600;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 8px 0;
    padding-left: 12px;
    margin-top: 6px;
  }

  & a {
    text-align: center;
    font-family: var(--font-body);
    color: #551a8b;
    text-decoration: underline;
    margin-top: 8px;
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
  padding: 10px 12px;
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

export const PasswordWrapperStyled = styled.div`
  position: relative;
`;

export const TogglePasswordStyled = styled.button`
  position: absolute;
  right: 10px;
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
  font-size: 13.5px;
  color: #64748b;
  text-align: center;
  font-family: var(--font-header);
  margin-top: 24px;
`;

export const VisitorBoxStyled = styled.div`
  text-align: center;
  padding: 8px;
  background: var(--background);
  border-radius: 12px;
  margin-bottom: 16px;

  & p {
    color: var(--secondary-hover);
    scale: 0.95;
    font-weight: 400;
    text-align: left;
  }
`;
