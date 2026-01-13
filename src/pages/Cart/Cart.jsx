import {
  ButtonSeeAll,
  CancelDialog,
  DetailsCard,
  ReceiptCard,
  ButtonsCard,
} from '@/pages/Cart/components/index';
import { MainWrapperStyled } from '@/pages/Cart/ui/index';
import BottomNavBar from '@components/BottomNavBar';
import ProductInFull from '@components/Product/ProductInFull/ProductInFull';
import { ProductList } from '@components/ProductList';
import { CartContext } from '@contexts/CartContext';
import { VisibilityContext } from '@contexts/VisibilityContext';
import { Button, CardHeader, CardTitle, Icon, MuiIcon } from '@ui/index';
import PageHeader from '@ui/page-header';
import { Trash2 } from 'lucide-react';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';

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
        if (widthOfWindow !== currentWindowWidthRef.current && totalAddedValue !== 0) {
          currentWindowWidthRef.current = widthOfWindow;
          checkHiddenProducts();
          const div = CartSectionRef.current;
          if (widthOfWindow >= 769) {
            const newHeight = '50rem';
            if (div.style.height !== newHeight) {
              div.style.height = newHeight;
            }
          } else {
            const newHeight = '46rem';
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
      // setSeeFeedback(false);
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
    <PageHeader title="Sua compra" />

      <MainWrapperStyled $opacity={opacityState}>
        <div ref={CartSectionRef} id="products-card">
          <div>
            <CardHeader
              mb={1}
              separator
              customStyles={css`
                padding-left: 20px;
              `}>
              <CardTitle >
                <MuiIcon icon="package_2" size="h3" margin="1px 0 0" />
                <h3>Produtos</h3>
              </CardTitle>
            </CardHeader>

            <Button
              id="delete-button"
              variant="destructive"
              size="sm-icon"
              onClick={() => {
                setSeeCancelDialog(true);
              }}>
              <Icon LucideIcon={Trash2} size="h4" strokeValue={2.4} marginValue="1px 0 0 1px" />
            </Button>
          </div>

          {totalAddedValue === 0 && <img src="./void-cart.png" alt="" />}

          <ProductList ref={ProductListRef} variant={'cart'} productList={cartProducts} />

          {viewButtonSeeAll && (
            <ButtonSeeAll
              id="see-all-button"
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
        </div>

        <div id="details-and-receipt">
          <DetailsCard totalAddedValue={totalAddedValue} scaleWarnnig={scaleWarnnig} />
          <ReceiptCard
            totalAddedValue={totalAddedValue}
            setScaleWarnnig={setScaleWarnnig}
            setCurrentOrder={setCurrentOrder}
          />
        </div>

        <ButtonsCard
          setCurrentOrder={setCurrentOrder}
          totalAddedValue={totalAddedValue}
          setScaleWarnnig={setScaleWarnnig}
        />

        {seeFeedback && <div />}
      </MainWrapperStyled>
      {viewProductInFull && <ProductInFull />}

      <BottomNavBar />
    </>
  );
};

export default Cart;
