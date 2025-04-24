import React from 'react';
import { Div, Divf, DivCat, Span, ImgStyled,DivNameSection, PStyled } from './ComponentesCategorias';

function CategoryItem({ category }) {

  return (
        <DivCat>
          {/*$selected={category.id === 'promo'}*/}
          <ImgStyled src={category.icon} alt={category.label} />
          <DivNameSection className="divNameSection">
            <PStyled>{category.label}</PStyled>
          </DivNameSection>
        </DivCat>
  );
}

function CategorySection() {
  const category = [
    { id: 'promo', icon: 'icons/iconePromo.png', label: 'Promoções' },
    { id: 'merce', icon: 'icons/cafe.png', label: 'Mercearia' },
    { id: 'doces', icon: 'icons/choco.png', label: 'Doces e Biscoitos' },
    { id: 'horti', icon: 'icons/maca.png', label: 'Hortifruit' },
    { id: 'pada', icon: 'icons/croisant.png', label: 'Padaria' },
    { id: 'acou', icon: 'icons/frangoc.png', label: 'Açougue' },
    { id: 'frios', icon: 'icons/queijo.png', label: 'Frios e Congelados' },
    { id: 'casaCozi', icon: 'icons/botijão.png', label: 'Casa e Cozinha' },
    { id: 'limpe', icon: 'icons/rodo.png', label: 'Limpeza Doméstica' },
    { id: 'higi', icon: 'icons/papel.png', label: 'Higiene pessoal' },
    { id: 'papelaria', icon: 'icons/esqua.png', label: 'Papelaria' },
    { id: 'pet', icon: 'icons/pata.png', label: 'PetShop' },
  ];

  return (
    <Div>
      <Span className="material-symbols-outlined">swipe_left</Span>
      <Divf>
        {category.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </Divf>
    </Div>
  );
}

export default CategorySection;
