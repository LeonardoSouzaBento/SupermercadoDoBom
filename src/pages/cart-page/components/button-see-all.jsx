import { Button } from '@ui/button';
import { Icon, MuiIcon } from '@ui/index';
import { ChevronDown } from 'lucide-react';
import { css } from 'styled-components';

const styles = css`
  width: calc(100% - 32px);
  margin-inline: auto;
  padding-inline: 0;
`;

const ButtonSeeAll = ({
  applyNewHeight,
  setApplyNewHeight,
  setViewButtonsetSeeAll,
  setwasClicked,
  CartSectionRef,
  newHeight,
}) => {
  function handleClickSeeAll() {
    if (applyNewHeight) {
      setApplyNewHeight(false);
      setViewButtonsetSeeAll(false);
      setwasClicked(true);
      CartSectionRef.current.style.height = `${newHeight}px`;
      setTimeout(() => {
        CartSectionRef.current.style.height = 'auto';
      }, 160);
    }
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleClickSeeAll} customStyles={styles}>
      Ver Tudo
      <Icon LucideIcon={ChevronDown} size="h3" strokeValue={2.4} />
    </Button>
  );
};

export default ButtonSeeAll;
