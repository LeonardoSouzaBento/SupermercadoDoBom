import { UserDataContext } from '@contexts/UserDataContext';
import { Button, Input, InputWrapper, Label } from '@ui/index';
import { useContext, useEffect, useState } from 'react';
import CepConvertedReturn from './cep-converted-return';

const AddressForm = ({
  cepConvertedState,
  opacityReturn,
  formData,
  setFormData,
  setSeeAddressForm,
  setSeeRegisterAddress,
}) => {
  const [addressSaved, setAddressSaved] = useState('');
  const [addressComplete, setAddressComplete] = useState(false);
  const { idToken, isDataComplete, setIsDataComplete, setUserAddress } =
    useContext(UserDataContext);
  const [opacityAddressForm, setOpacityAddressForm] = useState(0);

  function dismountComponent() {
    setOpacityAddressForm(0);
    setTimeout(() => {
      setSeeAddressForm(false);
    }, 300);
  }

  //para preenchimento manual
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleRegisterAddres() {
    if (addressComplete) {
      setIsDataComplete({ ...isDataComplete, address: true });
      setUserAddress(formData);
      setOpacityAddressForm(0);
      setSeeRegisterAddress(false);
      updateAddres(formData); //enviar ao servidor
    }
  }

  async function updateAddres(endereco) {
    setAddressSaved('pending');
    try {
      const response = await fetch(
        'https://us-central1-api-supermercado-do-bom.cloudfunctions.net/api/user-update-address',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify({ endereco: endereco }),
        },
      );

      console.log(JSON.stringify({ endereco: endereco }));

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }
      setAddressSaved('saved');
    } catch (error) {
      setAddressSaved('error');
      console.error('Erro ao salvar endereço: ', error);
    }
  }

  useEffect(() => {
    if (addressSaved !== 'pending') {
      setTimeout(() => {
        setAddressSaved('');
      }, 3000);
    }
  }, [addressSaved]);

  //verificar completude do endereço
  useEffect(() => {
    const isFormValid = Object.keys(formData).every((key) => {
      if (key === 'complemento' || key === 'cep' || key === 'lat' || key === 'lng') {
        return true;
      }
      return formData[key].trim() !== '';
    });
    if (isFormValid) {
      setAddressComplete(true);
    } else {
      setAddressComplete(false);
    }
  }, [formData]);

  useEffect(() => {
    setTimeout(() => {
      setOpacityAddressForm(1);
    }, 150);
  }, []);

  return (
    <form
      autoComplete="off"
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginRight: '-8px',
        paddingRight: '4px',
        gap: '8px',
        marginTop: '-8px',
        borderRadius: '8px',
        position: 'relative',
        transition: 'all 0.3s ease',
        height: '85dvh',
        overflowY: 'scroll',
        opacity: { opacityAddressForm },
      }}>
      {cepConvertedState !== '' && (
        <CepConvertedReturn opacityReturn={opacityReturn} cepConvertedState={cepConvertedState} />
      )}
      <InputWrapper>
        <Label>Cidade</Label>
        <Input
          type="text"
          name="cidade"
          placeholder="Cidade"
          value={formData.cidade}
          required
          onChange={handleChange}
          autoComplete="off"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Estado</Label>
        <Input
          type="text"
          name="estado"
          placeholder="Estado"
          value={formData.estado}
          required
          onChange={handleChange}
          autoComplete="off"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Rua</Label>
        <Input
          type="text"
          name="rua"
          placeholder="Rua"
          value={formData.rua}
          required
          maxLength={40}
          autoComplete="off"
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Número</Label>
        <Input
          type="text"
          name="numero"
          placeholder="Número"
          value={formData.numero}
          required
          maxLength={10}
          autoComplete="off"
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Complemento</Label>
        <Input
          type="text"
          name="complemento"
          placeholder="Complemento"
          value={formData.complemento}
          maxLength={50}
          autoComplete="off"
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Bairro</Label>
        <Input
          type="text"
          name="bairro"
          placeholder="Bairro"
          value={formData.bairro}
          required
          maxLength={50}
          autoComplete="off"
          onChange={handleChange}
          $lastInput={true}
        />
      </InputWrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginTop: '8px',
        }}>
        <Button
          size="normal"
          variant="outline"
          onClick={() => {
            dismountComponent();
          }}>
          Voltar
        </Button>
        <Button
          variant="primary"
          disabled={!addressComplete}
          onClick={(e) => {
            e.preventDefault();
            handleRegisterAddres();
          }}>
          Salvar endereço
        </Button>
      </div>
    </form>
  );
};

export default AddressForm;

