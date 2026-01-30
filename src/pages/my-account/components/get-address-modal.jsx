import { UserDataContext } from '@contexts/UserDataContext';
import { Button, Card, CardHeader, CardTitle, CloseButton } from '@ui/index';
import { useContext, useEffect, useState } from 'react';
import { css } from 'styled-components';
import { AddressForm, CepInput, GetLocationButton } from './get-address-modal/index';
import { ContainerSc } from './get-address-modal/container';

const GetAddressModal = ({ setSeeRegisterAddress }) => {
  const [opacityRegAddress, setOpacityRegAddress] = useState(0);
  const [seeAdressForm, setSeeAddressForm] = useState(false);
  const [opacityReturn, setOpacityReturn] = useState(0);
  const [formData, setFormData] = useState({
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    lat: '',
    lng: '',
  });
  const { idToken } = useContext(UserDataContext);
  //-11.186615346993204, lng: -40.26740712716049

  useEffect(() => {
    setTimeout(() => {
      setOpacityRegAddress(1);
    }, 100);
    return () => clearTimeout();
  }, []);

  return (
    <ContainerSc $opacity={opacityRegAddress} $up={seeAdressForm}>
      <Card className="card">
        <CardHeader>
          <CardTitle
            styles={css`
              width: 100%;
              justify-content: space-between;
            `}>
            <h3>Cadastrar endereço</h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '38px',
                height: '38px',
                position: 'relative',
              }}>
              <CloseButton
                styles={css`
                  position: absolute;
                  top: 1px;
                  right: -8px;
                `}
                setOpenState={setSeeRegisterAddress}
              />
            </div>
          </CardTitle>
        </CardHeader>

        {seeAdressForm ? (
          <AddressForm
            key="form"
            setSeeRegisterAddress={setSeeRegisterAddress}
            opacityReturn={opacityReturn}
            formData={formData}
            setFormData={setFormData}
            setSeeAddressForm={setSeeAddressForm}
          />
        ) : (
          <div className="options">
            {/*3 Opções de preenchimento*/}
            <GetLocationButton
              setOpacityReturn={setOpacityReturn}
              setFormData={setFormData}
              setSeeAddressForm={setSeeAddressForm}
              idToken={idToken}
            />

            <CepInput
              opacityReturn={opacityReturn}
              setSeeAddressForm={setSeeAddressForm}
              setFormData={setFormData}
            />

            <Button
              variant="outline"
              onClick={() => {
                setSeeAddressForm(true);
              }}>
              Digitar todos os dados
            </Button>
          </div>
        )}
      </Card>
    </ContainerSc>
  );
};

export { GetAddressModal };
