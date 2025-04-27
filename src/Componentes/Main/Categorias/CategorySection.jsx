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
    { id: 0, icon: 'icons/iconePromo.png', label: 'Promoções' }, //renderiza com a const products
    { id: 1, icon: 'icons/cafe.png', label: 'Mercearia' }, //renderiza com a const productsCatId1
    { id: 2, icon: 'icons/choco.png', label: 'Doces e Biscoitos' }, //renderiza com a const productsCatId2
    { id: 3, icon: 'icons/maca.png', label: 'Hortifruit' }, //renderiza com a const productsCatId3
    { id: 4, icon: 'icons/croisant.png', label: 'Padaria' },
    { id: 5, icon: 'icons/frangoc.png', label: 'Açougue' },
    { id: 6, icon: 'icons/queijo.png', label: 'Frios e Congelados' },
    { id: 7, icon: 'icons/botijão.png', label: 'Casa e Cozinha' },
    { id: 8, icon: 'icons/rodo.png', label: 'Limpeza Doméstica' },
    { id: 9, icon: 'icons/papel.png', label: 'Higiene pessoal' },
    { id: 10, icon: 'icons/esqua.png', label: 'Papelaria' },
    { id: 11, icon: 'icons/pata.png', label: 'PetShop' }
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
