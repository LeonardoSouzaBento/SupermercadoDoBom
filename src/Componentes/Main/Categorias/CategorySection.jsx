import React from 'react';
import { useState } from 'react';
import { Div, Divf, DivCat, Span, ImgStyled,DivNameSection, PStyled } from './ComponentesCategorias';

function CategoryItem({ category, onClick, isSelected}) {

  return (
        <DivCat onClick={onClick}  $selected={isSelected}>
          <ImgStyled src={category.icon} alt={category.label}/>
          <DivNameSection>
            <PStyled>{category.label}</PStyled>
          </DivNameSection>
        </DivCat>
  );
}

function CategorySection({setCurrentCategory}) {

  const [selectedCategoryId, setSelectedCategoryId] = useState(0);

  const category = [
    { id: 0, icon: 'icons/iconePromo.png', label: 'Promoções' }, // os dados estão em products
    { id: 1, icon: 'icons/cafe.png', label: 'Mercearia' }, //os dados estão com a const productsCatId1
    { id: 2, icon: 'icons/choco.png', label: 'Doces e Biscoitos' }, // com a const productsCatId2
    { id: 3, icon: 'icons/maca.png', label: 'Hortifruit' }, //com a const productsCatId3
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

  return (
    <Div>
      <Span className="material-symbols-outlined">swipe_left</Span>
      <Divf>
        {category.map((cat) => (
          <CategoryItem category={cat}  key={cat.id} onClick={() => handleCategoryClick(cat.id)}
            isSelected={cat.id === selectedCategoryId}/>
        ))}
      </Divf>
    </Div>
  );
}

export default CategorySection;
