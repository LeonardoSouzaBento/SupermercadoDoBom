import Button from '@ui/button.jsx';

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
    <Button variant="outline" onClick={handleClickSeeAll}>
      <p>Ver Tudo</p>
      <span className="material-symbols-rounded">keyboard_arrow_down</span>
    </Button>
  );
};

export default ButtonSeeAll;
