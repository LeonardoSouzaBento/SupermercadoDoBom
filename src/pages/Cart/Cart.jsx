import { useContext, useEffect, useRef, useState } from 'react';
import { VisibilityContext } from '@contexts/VisibilityContext.js';
import { CartContext } from '@contexts/CartContext.js';
import { useNavigate } from 'react-router-dom';
import ProductInFull from '@components/Product/ProductInFull/ProductInFull.jsx';
import { ProductList } from '@components/Product/ProductItem&List/ProductList.jsx';
import {
  ButtonSeeAll,
  CancelDialog,
  DetailAndButtonAdd,
  ReceiptAndContinueSection,
} from './Components';
import {
  CartSectionStyed,
  ContinueSectionStyled,
  DivSpanDeleteStyled,
  DivToCoverStyled,
  MainStyled,
} from './StylizedTags.jsx';
import { HeaderPageStyled, TitlePageStyled } from '@/ui/PageHeader.jsx';
import { CardHeader } from '@/ui/Card';
import { Package } from 'lucide-react';

//altura - o cabeçalho 'sua compra'
const heightCartSection = 393; //para comparar

const Cart = () => {
  const navigate = useNavigate();
  const { totalAddedValue, cartProducts, setCartProducts, setCurrentOrder } =
    useContext(CartContext);
  const [opacityState, setOpacityState] = useState(0.03); //opacidade do main ao entrar
  const [seeCancelDialog, setSeeCancelDialog] = useState(false);
  const { seeFeedback, setSeeFeedback, viewProductInFull } = useContext(VisibilityContext);
  const [scaleWarnnig, setScaleWarnnig] = useState(1);

  //estados para botão ver todos
  const [viewButtonSeeAll, setViewButtonsetSeeAll] = useState(true);
  const currentWindowWidthRef = useRef(0);
  const [newHeight, setNewHeight] = useState(0);
  const [applyNewHeight, setApplyNewHeight] = useState(true);
  const [wasClicked, setwasClicked] = useState(false);
  const resizeDowntime = useRef(null);
  const ProductListRef = useRef(null);
  const CartSectionRef = useRef(null);
  const initialTotalValue = useRef(0);

  // decide se mostra o botão
  function checkHiddenProducts() {
    const productListHeight = ProductListRef.current.offsetHeight;

    if (heightCartSection - productListHeight < 0) {
      setViewButtonsetSeeAll(true);
      setNewHeight(productListHeight + 120);
      setApplyNewHeight(true);
      setwasClicked(false);
    } else {
      setViewButtonsetSeeAll(false);
      setApplyNewHeight(false);
    }
  }

  // resize p reamostrar botão
  useEffect(() => {
    setTimeout(() => {
      setOpacityState(1);
    }, 300);
    initialTotalValue.current = totalAddedValue;
    currentWindowWidthRef.current = window.innerWidth;
    // Espera a próxima pintura do navegador (após o layout completo)
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
    checkHiddenProducts();

    function handleResize() {
      if (resizeDowntime.current) {
        clearTimeout(resizeDowntime.current);
      }
      resizeDowntime.current = setTimeout(() => {
        let widthOfWindow = window.innerWidth;
        let quantProducts = cartProducts.length;
        if (widthOfWindow !== currentWindowWidthRef.current) {
          currentWindowWidthRef.current = widthOfWindow;
          checkHiddenProducts();
          const div = CartSectionRef.current;
          if (widthOfWindow >= 769) {
            const newHeight = '500px';
            if (div.style.height !== newHeight) {
              div.style.height = newHeight;
            }
          } else {
            const newHeight = '460px';
            if (quantProducts >= 3) {
              if (div.style.height !== newHeight) {
                div.style.height = newHeight;
              }
            } else {
              div.style.height = 'auto';
            }
          }
        }
      }, 300);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      setSeeFeedback(false);
      document.body.style.overflow = 'auto';
      window.removeEventListener('resize', handleResize);
      if (resizeDowntime.current) {
        clearTimeout(resizeDowntime.current);
      }
    };
  }, [setSeeFeedback]);

  //
  const shouldCheckHiddenProducts =
    totalAddedValue !== 0 && totalAddedValue < initialTotalValue.current && wasClicked === false;

  useEffect(() => {
    if (shouldCheckHiddenProducts) {
      checkHiddenProducts();
    }
  }, [totalAddedValue, setCurrentOrder, navigate]);

  useEffect(() => {
    if (seeCancelDialog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [seeCancelDialog]);

  return (
    <>
      <HeaderPageStyled $cart>
        <div>
          <TitlePageStyled>Sua compra</TitlePageStyled>
        </div>
      </HeaderPageStyled>

      <MainStyled $opacity={opacityState}>
        <CartSectionStyed ref={CartSectionRef}>
          <div>
            <CardHeader
              title="Produtos"
              icon={<Package size={20} strokeWidth={2.6} color="var(--primary)" />} />

            <DivSpanDeleteStyled
              onClick={() => {
                setSeeCancelDialog(true);
              }}>
              <span className="material-symbols-rounded">delete</span>
            </DivSpanDeleteStyled>
          </div>

          <ProductList
            ref={ProductListRef}
            variant={'cart'}
            productList={cartProducts}></ProductList>

          {viewButtonSeeAll && (
            <ButtonSeeAll
              applyNewHeight={applyNewHeight}
              setApplyNewHeight={setApplyNewHeight}
              setViewButtonsetSeeAll={setViewButtonsetSeeAll}
              setwasClicked={setwasClicked}
              CartSectionRef={CartSectionRef}
              newHeight={newHeight}
            />
          )}

          {seeCancelDialog && (
            <CancelDialog
              seeFeedback={seeFeedback}
              setSeeFeedback={setSeeFeedback}
              setSeeCancelDialog={setSeeCancelDialog}
              setCartProducts={setCartProducts}
            />
          )}
        </CartSectionStyed>

        <ContinueSectionStyled>
          <DetailAndButtonAdd totalAddedValue={totalAddedValue} scaleWarnnig={scaleWarnnig} />
          <ReceiptAndContinueSection
            totalAddedValue={totalAddedValue}
            setScaleWarnnig={setScaleWarnnig}
            setCurrentOrder={setCurrentOrder}
          />
        </ContinueSectionStyled>
      </MainStyled>
      {seeFeedback && <DivToCoverStyled />}
      {viewProductInFull && <ProductInFull />}
    </>
  );
};

export default Cart;
