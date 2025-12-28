import { lgIcon } from '@/styles/lucideIcons';
import { HomeDivsContext } from '@contexts/HomeDivsContext';
import { categoriesIcons } from '@data/home';
import { useScrollX } from '@hooks/useScrollX';
import { CategoryCardStyled, ContainerStyled } from '@pages/Home/ui/categories-section/index';
import { useCallback, useContext, useEffect, useRef } from 'react';

function CategoriesSection({ wasResize }) {
  const { setLimitCategories, categoriesRef, currentCategory, setCurrentCategory, isDraggingRef } =
    useContext(HomeDivsContext);
  useScrollX();

  const DivRef = useRef(null);
  const CategoryItemRef = useRef(null);

  const updateLimitCategories = useCallback(() => {
    if (CategoryItemRef.current && DivRef.current && categoriesRef.current) {
      const itemWidth = CategoryItemRef.current.offsetWidth;
      const divWidth = DivRef.current.offsetWidth;

      const gap = parseFloat(getComputedStyle(categoriesRef.current).gap) || 0;
      const paddingRight = parseFloat(getComputedStyle(categoriesRef.current).paddingRight) * 2;

      const totalWidth =
        categoriesIcons.length * itemWidth + (categoriesIcons.length - 1) * gap + paddingRight;

      const limit = divWidth - totalWidth;
      setLimitCategories(limit);
    }
  }, [setLimitCategories, categoriesRef]);

  useEffect(() => {
    updateLimitCategories();
  }, [setLimitCategories, updateLimitCategories]);

  useEffect(() => {
    updateLimitCategories();
  }, [wasResize, updateLimitCategories]);

  function handlePointerUpCat(e, catId) {
    if (e.button === 2) {
      return;
    }
    if (!isDraggingRef.current) {
      setCurrentCategory(catId);
      isDraggingRef.current = false;
    }
  }

  return (
    <ContainerStyled ref={DivRef}>
      <div>
        <h2>
          Explore por categoria
        </h2>
        <p>Encontre o essencial aqui</p>
      </div>

      <div ref={categoriesRef}>
        {categoriesIcons.map((cat, index) => (
          <CategoryCardStyled
            key={cat.id}
            $selected={cat.id === currentCategory}
            ref={index === 0 ? CategoryItemRef : undefined}
            onPointerUp={(e) => {
              handlePointerUpCat(e, cat.id);
            }}>
            <div>
              <cat.icon {...lgIcon} />
            </div>
            <div>
              <p>{cat.label}</p>
            </div>
          </CategoryCardStyled>
        ))}
      </div>
    </ContainerStyled>
  );
}

export default CategoriesSection;
