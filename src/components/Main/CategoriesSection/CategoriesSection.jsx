import React, { useCallback } from 'react';
import { useState, useRef, useEffect} from 'react';
import { Div, DivLabelPromosStyled, PLabelStyled, Divf, DivCat, Span, ImgStyled,DivNameSection, PStyled} from './ComponentsCategories';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import {useScrollX} from '../../../hooks/useScrollX'

const CategoryItem = React.forwardRef(({ category, isSelected, setSelectedCategoryId}, ref) => {

  const {setCurrentCategory} = useContext(CartContext);
  let touchStartTime = null;

  const handlePointerDown = () => {
    touchStartTime = Date.now();
  };

  const handlePointerUp = () => {
    const duration = Date.now() - touchStartTime;
    if (duration < 100 ) {
      setCurrentCategory(category.id);
      setSelectedCategoryId(category.id);
    }
  };

  return (
    <DivCat 
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp} 
      $selected={isSelected} 
      ref={ref}>
      <ImgStyled src={category.icon} alt={category.label}/>
      <DivNameSection>
        <PStyled>{category.label}</PStyled>
      </DivNameSection>
    </DivCat>
  );
});

function CategoriesSection() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const {setLimitCategories, categoriesRef} = useContext(CartContext);
  useScrollX();

  const category = [
    { id: 0, icon: 'icons/iconePromo.png', label: 'Promoções' },
    { id: 1, icon: 'icons/cafe.png', label: 'Mercearia' },
    { id: 2, icon: 'icons/choco.png', label: 'Doces e Biscoitos' },
    { id: 3, icon: 'icons/maca.png', label: 'Hortifruit' },
    { id: 4, icon: 'icons/croisant.png', label: 'Padaria' },
    { id: 5, icon: 'icons/frangoc.png', label: 'Açougue' },
    { id: 6, icon: 'icons/queijo.png', label: 'Frios e Congelados' },
    { id: 7, icon: 'icons/botijão.png', label: 'Casa e Cozinha' },
    { id: 8, icon: 'icons/rodo.png', label: 'Limpeza Doméstica' },
    { id: 9, icon: 'icons/papel.png', label: 'Higiene pessoal' },
    { id: 10, icon: 'icons/esqua.png', label: 'Papelaria' },
    { id: 11, icon: 'icons/pata.png', label: 'PetShop' }
  ];

  const DivRef = useRef(null);
  const CategoryItemRef = useRef(null);
  const resizeTimeoutId = useRef(null);

  const updateLimitCategories = useCallback(() => {
    if (CategoryItemRef.current && DivRef.current && categoriesRef.current) {
      const itemWidth = CategoryItemRef.current.offsetWidth;
      const divWidth = DivRef.current.offsetWidth;
      const gap = parseFloat(getComputedStyle(categoriesRef.current).gap) || 0;
      const totalWidth = category.length * itemWidth + (category.length - 1) * gap;
      const limit = divWidth - totalWidth;
      window.innerWidth >= 1375?setLimitCategories(0):setLimitCategories(limit);
    }
  },[])
  
  const handleResize = useCallback(() => {
    if (resizeTimeoutId.current) {
      clearTimeout(resizeTimeoutId.current);
    }
    resizeTimeoutId.current = setTimeout(() => {
      updateLimitCategories();
      resizeTimeoutId.current = null;
    }, 300);
  },[])
  

  useEffect(() => {
    updateLimitCategories();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutId.current) {
        clearTimeout(resizeTimeoutId.current);
      }
    };
  }, [category.length, setLimitCategories]);

  return (
    <Div ref={DivRef}>
      <Span className="material-symbols-outlined">swipe_left</Span>{/*Para tutorial de como usar a tela*/}
      <DivLabelPromosStyled>
        <PLabelStyled id="strong">Mais vendidos por categoria,</PLabelStyled>
        <PLabelStyled>os produtos básicos ficam aqui.</PLabelStyled>
      </DivLabelPromosStyled>

      <Divf ref={categoriesRef}>
        {category.map((cat, index) => (
          <CategoryItem 
            ref={index === 0 ? CategoryItemRef : null}
            category={cat}  
            key={cat.id}
            setSelectedCategoryId={setSelectedCategoryId}
            isSelected={cat.id === selectedCategoryId}/>
        ))}
      </Divf>
    </Div>
  );
}

export default CategoriesSection;
