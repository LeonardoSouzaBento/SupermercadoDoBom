import { useCallback } from "react";
import { useRef, useEffect } from "react";
import {
  DivStyled,
  DivLabelPromosStyled,
  H1LabelStyled,
  DivfStyled,
  DivCatStyled,
  SpanStyled,
} from "./StylizedTags";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { useScrollX } from "../../../hooks/useScrollX";

const categories = [
  { id: 0, icon: "icons/iconePromo.png", label: "Promoções" },
  { id: 1, icon: "icons/cafe.png", label: "Mercearia" },
  { id: 2, icon: "icons/choco.png", label: "Doces e Biscoitos" },
  { id: 3, icon: "icons/maca.png", label: "Hortifruit" },
  { id: 4, icon: "icons/croisant.png", label: "Padaria" },
  { id: 5, icon: "icons/frangoc.png", label: "Açougue" },
  { id: 6, icon: "icons/queijo.png", label: "Frios e Congelados" },
  { id: 7, icon: "icons/botijão.png", label: "Casa e Cozinha" },
  { id: 8, icon: "icons/rodo.png", label: "Limpeza Doméstica" },
  { id: 9, icon: "icons/papel.png", label: "Higiene pessoal" },
  { id: 10, icon: "icons/esqua.png", label: "Papelaria" },
  { id: 11, icon: "icons/pata.png", label: "PetShop" },
];

function CategoriesSection({ wasResize }) {
  const {
    setLimitCategories,
    categoriesRef,
    currentCategory,
    setCurrentCategory,
    isDraggingRef,
  } = useContext(CartContext);
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
        categories.length * itemWidth +
        (categories.length - 1) * gap +
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
      {/*Para tutorial de como usar a tela*/}
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
        {categories.map((cat, index) => (
          <DivCatStyled
            key={cat.id}
            $selected={cat.id === currentCategory}
            ref={index === 0 ? CategoryItemRef : undefined}
            onPointerUp={(e) => {
              handlePointerUpCat(e, cat.id);
            }}
          >
            <img src={cat.icon} alt={cat.label} />
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
