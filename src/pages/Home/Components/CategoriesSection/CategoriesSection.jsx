import { useCallback } from "react";
import { useRef, useEffect, useContext } from "react";
import { HomeDivsContext } from "@contexts/HomeDivsContext";
import {
  DivStyled,
  DivLabelPromosStyled,
  H1LabelStyled,
  DivfStyled,
  DivCatStyled,
  SpanStyled,
} from "./StylizedTags";
import { useScrollX } from "@hooks/useScrollX";
import { categoriesIcons } from "@data/home";

function CategoriesSection({ wasResize }) {
  const {
    setLimitCategories,
    categoriesRef,
    currentCategory,
    setCurrentCategory,
    isDraggingRef,
  } = useContext(HomeDivsContext);
  useScrollX();

  const DivRef = useRef(null);
  const CategoryItemRef = useRef(null);

  const updateLimitCategories = useCallback(() => {
    if (CategoryItemRef.current && DivRef.current && categoriesRef.current) {
      const itemWidth = CategoryItemRef.current.offsetWidth;
      const divWidth = DivRef.current.offsetWidth;

      const gap = parseFloat(getComputedStyle(categoriesRef.current).gap) || 0;
      const paddingRight =
        parseFloat(getComputedStyle(categoriesRef.current).paddingRight) * 2;

      const totalWidth =
        categoriesIcons.length * itemWidth +
        (categoriesIcons.length - 1) * gap +
        paddingRight;

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
    <DivStyled ref={DivRef}>
      <SpanStyled className="material-symbols-rounded">swipe_left</SpanStyled>
      <DivLabelPromosStyled>
        <H1LabelStyled>
          Mais vendidos por categoria,
          <br />
          <strong style={{ fontWeight: 400 }}>
            os produtos básicos ficam aqui.
          </strong>
        </H1LabelStyled>
      </DivLabelPromosStyled>

      <DivfStyled ref={categoriesRef}>
        {categoriesIcons.map((cat, index) => (
          <DivCatStyled
            key={cat.id}
            $selected={cat.id === currentCategory}
            ref={index === 0 ? CategoryItemRef : undefined}
            onPointerUp={(e) => {
              handlePointerUpCat(e, cat.id);
            }}
          >
            <div>
              <cat.icon size={28} strokeWidth={1.5} color="white" />
            </div>
            <div>
              <p>{cat.label}</p>
            </div>
          </DivCatStyled>
        ))}
      </DivfStyled>
    </DivStyled>
  );
}

export default CategoriesSection;


