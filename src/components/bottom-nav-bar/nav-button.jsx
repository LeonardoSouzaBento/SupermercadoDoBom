import { Button } from '@ui/button';
import { Icon } from '@ui/icon';
import { Link } from 'react-router-dom';
import { css } from 'styled-components';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > button {
    width: auto;
    gap: -4px;
    padding-inline: 1.1em;
  }
  @media screen and (min-width: 840px) {
    padding-inline: 12px;
  }
`;

const NameButtonStyled = styled.p`
  font-family: var(--font-header);
  text-transform: capitalize;
  font-weight: 600;
  color: hsl(var(--primary-800));
  font-size: var(--text-sm-button);
  line-height: 1.1;
  @media screen and (max-width: 840px) {
    display: none;
  }
`;

const SelectedDivStyled = styled.div`
  height: 2.8px;
  width: 80%;
  border-radius: 999px;
  background-color: hsl(var(--primary-600));
  margin-top: -2px;
  position: relative;
  z-index: 2;
`;

const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  gap: 0.85ex;
  flex-shrink: 0;
  border-radius: 9px;
  box-sizing: border-box;
  transition: all 150ms ease;
  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: var(--shadow-xs);
  }
  & > svg {
    flex-shrink: 0;
  }
`;

export const NavButton = ({ item, isActive }) => {
  return (
    <WrapperStyled>
      <Button
        size="icon-lg"
        variant="transparent"
        styles={css`
          color: var(--primary);
          flex-direction: column;
          gap: 2px;
        `}>
        <LinkStyled to={item.path}>
          <Icon LucideIcon={item.lucidIcon} size="h5" color="var(--primary)" />
          <NameButtonStyled>{item.name}</NameButtonStyled>
        </LinkStyled>
      </Button>
      {isActive && <SelectedDivStyled />}
    </WrapperStyled>
  );
};

