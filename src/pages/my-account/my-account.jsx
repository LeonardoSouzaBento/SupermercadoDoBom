import BottomNavBar from '@components/bottom-nav-bar';
import { CartContext } from '@contexts/CartContext';
import { UserDataContext } from '@contexts/UserDataContext';
import { VisibilityContext } from '@contexts/VisibilityContext';
import PageHeader from '@ui/page-header';
import { useContext, useEffect, useState } from 'react';
import RegisterAddress from './components/register-address';
import { MainStyled } from './StylizedTags';
import { Address, Contact, FinishShopping, Profile } from './components';

const MyAccount = () => {
  const { userContact, isDataComplete, userAddress } = useContext(UserDataContext);
  const { currentOrder, setCurrentOrder, cartProducts } = useContext(CartContext);
  const { setOnMyAccount } = useContext(VisibilityContext);
  const [seeRegisterAddress, setSeeRegisterAddress] = useState(true);

  useEffect(() => {
    setOnMyAccount(true);
    const pendingOrderInfo = cartProducts.length !== 0 && !currentOrder.status;
    const voidCart = cartProducts.length === 0;

    if (pendingOrderInfo) {
      setCurrentOrder({ ...currentOrder, status: 'pending' });
    }
    if (voidCart) {
      setCurrentOrder({ ...currentOrder, status: '' });
    }
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }, []);

  return (
    <>
      <PageHeader title="Minha conta" />

      <MainStyled>
        <Profile userContact={userContact} />
        <Contact />

        <Address
          setSeeRegisterAddress={setSeeRegisterAddress}
          isDataComplete={isDataComplete}
          userAddress={userAddress}
          userContact={userContact}
        />
        <FinishShopping
          userContact={userContact}
          isDataComplete={isDataComplete}
          currentOrder={currentOrder}
        />
      </MainStyled>

      {seeRegisterAddress && <RegisterAddress setSeeRegisterAddress={setSeeRegisterAddress} />}
      <BottomNavBar />
    </>
  );
};

export default MyAccount;
