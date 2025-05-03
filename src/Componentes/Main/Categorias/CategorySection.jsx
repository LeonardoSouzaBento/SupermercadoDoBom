import React from 'react';
import { useState, useRef, useEffect} from 'react';
import { Div, Divf, DivCat, Span, ImgStyled,DivNameSection, PStyled } from './ComponentesCategorias';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

const CategoryItem = React.forwardRef(({ category, onClick, isSelected }, ref) => {
  return (
    <DivCat onClick={onClick} $selected={isSelected} ref={ref}>
      <ImgStyled src={category.icon} alt={category.label}/>
      <DivNameSection>
        <PStyled>{category.label}</PStyled>
      </DivNameSection>
    </DivCat>
  );
});

function CategorySection({setCurrentCategory}) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const {setLimitCategories} = useContext(CartContext);

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

  const handleCategoryClick = (categoryId) => {
    setCurrentCategory(categoryId);
    setSelectedCategoryId(categoryId);
  };
  const DivfRef = useRef(null); //Para aplicar função
  const DivRef = useRef(null);
  const CategoryItemRef = useRef(null);

  useEffect(() => {
    let resizeTimeoutId = null;

    const updateLimitCategories = () => {
      if (CategoryItemRef.current && DivRef.current && DivfRef.current) {
        const itemWidth = CategoryItemRef.current.offsetWidth;
        const divWidth = DivRef.current.offsetWidth;
        const gap = parseFloat(getComputedStyle(DivfRef.current).gap) || 0;
        const totalWidth = category.length * itemWidth + (category.length - 1) * gap;
        const limit = divWidth - totalWidth;
        window.innerWidth >= 1375?setLimitCategories(0):setLimitCategories(limit);
      }
    };

    updateLimitCategories();

    const handleResize = () => {
      if (resizeTimeoutId) {
        clearTimeout(resizeTimeoutId);
      }
      resizeTimeoutId = setTimeout(() => {
        updateLimitCategories();
        resizeTimeoutId = null;
      }, 300); // Debounce: executa somente após 300ms da última redimensionada
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutId) {
        clearTimeout(resizeTimeoutId);
      }
    };
  }, [category.length, setLimitCategories]);

  return (
    <Div ref={DivRef}>
      <Span className="material-symbols-outlined">swipe_left</Span>{/*Para tutorial de como usar a tela*/}
      <Divf ref={DivfRef}>
        {category.map((cat, index) => (
          <CategoryItem 
            ref={index === 0 ? CategoryItemRef : null}
            category={cat}  
            key={cat.id} onClick={() => handleCategoryClick(cat.id)}
            isSelected={cat.id === selectedCategoryId}/>
        ))}
      </Divf>
    </Div>
  );
}

export default CategorySection;
