import { useState, useEffect } from "react";
import {
  DivCepInputStyled,
  CepInputStyled,
  PWarnCepStyled,
} from "../StylizedTags";
import CepConvertedReturn from "./CepConvertedReturn";

const CepInput = ({ setSeeAddressForm, setFormData, opacityReturn }) => {
  const [cepState, setCepState] = useState("Digite seu CEP");
  const [clickOnCep, setClickOnCep] = useState(false);
  const [cepConvertedState, setCepConvertedState] = useState("");

  //input de cep
  function handleClickOnCep() {
    if (clickOnCep === false) {
      setClickOnCep(true);
      setCepState("");
    }
  }

  function handleChangeCepInput(e) {
    let value = e.target.value;
    value = value.replace(/\D/g, "");

    // Limitar 8 dígitos
    if (value.length > 8) {
      value = value.slice(0, 8);
    }
    //Formatar
    if (value.length > 5) {
      value = value.slice(0, 5) + "-" + value.slice(5);
    }
    setCepState(value);
  }

  //chamar API viaCEP
  async function getAddresByCep(cep) {
    setCepConvertedState("pending");
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    try {
      const response = await fetch(url); //requisição HTTP
      const data = await response.json();
      setCepConvertedState("converted");
      return data;
    } catch (error) {
      setCepConvertedState("error");
      console.error("Erro ao buscar o CEP:", error);
      return null;
    }
  }

  //pegar endereço pelo cep
  useEffect(() => {
    if (cepState.length === 9) {
      let cepSemHifen = cepState.replace("-", "");

      getAddresByCep(cepSemHifen)
        .then((endereco) => {
          if (endereco && !endereco.erro) {
            setFormData((prevFormData) => ({
              ...prevFormData,
              rua: endereco.logradouro,
              bairro: endereco.bairro,
              cidade: endereco.localidade,
              estado: endereco.uf,
            }));
            setSeeAddressForm(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [cepState, setSeeAddressForm, setFormData]);

  useEffect(() => {
    if (cepConvertedState !== "pending") {
      setTimeout(() => {
        setCepConvertedState("");
      }, 2400);
    }
  }, [cepConvertedState]);

  return (
    <>
      {cepConvertedState !== "" && (
        <CepConvertedReturn
          cepConvertedState={cepConvertedState}
          opacityReturn={opacityReturn}
        />
      )}

      <DivCepInputStyled>
        <CepInputStyled
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          name="cep"
          maxLength={9}
          placeholder="Digite seu CEP"
          value={cepState}
          onChange={handleChangeCepInput}
          onClick={clickOnCep ? null : handleClickOnCep}
        />
        <PWarnCepStyled $noPassed={cepState.length === 9}>
          CEP INVÁLIDO
        </PWarnCepStyled>
      </DivCepInputStyled>
    </>
  );
};

export default CepInput;
