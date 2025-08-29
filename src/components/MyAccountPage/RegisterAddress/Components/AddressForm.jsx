import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { VisibilityContext } from "../../../../contexts/VisibilityContext";
import CepConvertedReturn from "./CepConvertedReturn";
import {
  InputStyled,
  ButtonStyled,
  RegisterButtonStyled,
} from "../StylizedTags";

const AddressForm = ({
  cepConvertedState,
  opacityReturn,
  formData,
  setFormData,
  setSeeAddressForm,
  setOpacityRegAddress,
}) => {
  const [addressSaved, setAddressSaved] = useState("");
  const [addressComplete, setAddressComplete] = useState(false);
  const { setUserAddress } = useContext(CartContext);
  const { idToken, isDataComplete, setIsDataComplete } =
    useContext(VisibilityContext);
  const [opacityAddressForm, setOpacityAddressForm] = useState(0);

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
      setOpacityRegAddress(0);
      updateAddres(formData); //enviar ao servidor
    }
  }

  async function updateAddres(endereco) {
    setAddressSaved("pending");
    try {
      const response = await fetch(
        "https://us-central1-api-supermercado-do-bom.cloudfunctions.net/api/user-update-address",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify({ endereco: endereco }),
        }
      );

      console.log(JSON.stringify({ endereco: endereco }));

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }
      setAddressSaved("saved");
    } catch (error) {
      setAddressSaved("error");
      console.error("Erro ao salvar endereço: ", error);
    }
  }

  useEffect(() => {
    if (addressSaved !== "pending") {
      setTimeout(() => {
        setAddressSaved("");
      }, 3000);
    }
  }, [addressSaved]);

  //verificar completude do endereço
  useEffect(() => {
    const isFormValid = Object.keys(formData).every((key) => {
      if (
        key === "complemento" ||
        key === "cep" ||
        key === "lat" ||
        key === "lng"
      ) {
        return true;
      }
      return formData[key].trim() !== "";
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
    }, 100);
  }, []);

  useEffect(() => {
    if (opacityAddressForm === 0) {
      setTimeout(() => {
        setSeeAddressForm(false);
      }, 330);
    }
  }, [opacityAddressForm, setSeeAddressForm]);

  return (
    <form
      autoComplete="off"
      style={{
        marginTop: "-12px",
        borderRadius: "8px",
        position: "relative",
        transition: "all 0.3s ease",
        opacity: { opacityAddressForm },
      }}
    >
      {cepConvertedState !== "" && (
        <CepConvertedReturn
          opacityReturn={opacityReturn}
          cepConvertedState={cepConvertedState}
        />
      )}
      <InputStyled
        type="text"
        name="cidade"
        placeholder="Cidade"
        value={formData.cidade}
        required
        onChange={handleChange}
        $firstInput={true}
        autoComplete="off"
      />
      <InputStyled
        type="text"
        name="estado"
        placeholder="Estado"
        value={formData.estado}
        required
        onChange={handleChange}
        autoComplete="off"
      />
      <InputStyled
        type="text"
        name="rua"
        placeholder="Rua"
        value={formData.rua}
        required
        maxLength={40}
        autoComplete="off"
        onChange={handleChange}
      />
      <InputStyled
        type="text"
        name="numero"
        placeholder="Número"
        value={formData.numero}
        required
        maxLength={10}
        autoComplete="off"
        onChange={handleChange}
      />
      <InputStyled
        type="text"
        name="complemento"
        placeholder="Complemento"
        value={formData.complemento}
        maxLength={50}
        autoComplete="off"
        onChange={handleChange}
      />
      <InputStyled
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
      <ButtonStyled
        $variant={"voltar"}
        onClick={() => {
          setOpacityAddressForm(0);
        }}
      >
        Voltar
      </ButtonStyled>
      <RegisterButtonStyled
        $enable={addressComplete}
        onClick={(e) => {
          e.preventDefault();
          handleRegisterAddres();
        }}
      >
        Salvar endereço
      </RegisterButtonStyled>
    </form>
  );
};

export default AddressForm;
