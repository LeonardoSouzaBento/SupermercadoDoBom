import { useCartContext, useUserDataContext, useVisibilityContext } from "@/contexts";
import PageHeader from "@ui/page-header";
import { useEffect, useState } from "react";
import {
  Address,
  Contact,
  FinishShopping,
  GetAddressModal,
  Profile,
} from "./components";
import { MainSc } from "./components/ui/main";

const MyAccount = () => {
  const { userContact, isDataComplete, userAddress } = useUserDataContext();
  const { currentOrder, setCurrentOrder, cartProducts } =
    useCartContext();
  const { setOnMyAccount } = useVisibilityContext ();
  const [seeRegisterAddress, setSeeRegisterAddress] = useState(false);

  useEffect(() => {
    setOnMyAccount(true);
    const pendingOrderInfo = cartProducts.length !== 0 && !currentOrder.status;
    const voidCart = cartProducts.length === 0;

    if (pendingOrderInfo) {
      setCurrentOrder({ ...currentOrder, status: "pending" });
    }
    if (voidCart) {
      setCurrentOrder({ ...currentOrder, status: "" });
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

      <MainSc>
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
      </MainSc>

      {seeRegisterAddress && (
        <GetAddressModal setSeeRegisterAddress={setSeeRegisterAddress} />
      )}
    </>
  );
};

export default MyAccount;
