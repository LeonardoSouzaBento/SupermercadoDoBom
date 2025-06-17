import { useState } from "react";
import {
  DivStyled,
  BoxStyled,
  TitleStyled,
  LocationButtonStyled,
  InputStyled,
  SubmitButtonStyled,
  NoKnowMyCEP,
} from "./ComponentsAddressPage";
import { Navigate, useNavigate } from "react-router-dom";

const AddressPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
  });

  function handleLocationClick() {
    console.log("Sim");
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(params) {
    console.log("Sim");
  }

  return (
    <DivStyled>
      <BoxStyled>
        <TitleStyled>Cadastrar endereço</TitleStyled>

        <LocationButtonStyled onClick={handleLocationClick}>
          Pegue minha localização
        </LocationButtonStyled>

        <form onSubmit={handleSubmit}>
          <InputStyled
            type="text"
            name="cep"
            placeholder="00000-000"
            value={formData.cep}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
          />
          <NoKnowMyCEP>Não sei meu CEP</NoKnowMyCEP>

          <div
            style={{
              backgroundColor: "rgb(242, 242, 242)",
              marginBottom: "0px",
              padding: "12px",
              paddingBottom: "0px",
              borderRadius: "6px 6px 0px 0px",
              boxShadow: "inset 0px -3px 6px rgba(0, 0, 0, 0.04)",
              overflow: "visible",
            }}
          >
            <InputStyled
              type="text"
              name="cidade"
              placeholder="Cidade"
              value={formData.cidade}
              onChange={handleChange}
            />
            <InputStyled
              type="text"
              name="estado"
              placeholder="Estado"
              value={formData.estado}
              onChange={handleChange}
            />
            <InputStyled
              type="text"
              name="rua"
              placeholder="Rua"
              value={formData.rua}
              maxLength={40}
              onChange={handleChange}
            />
            <InputStyled
              type="text"
              name="numero"
              placeholder="Número"
              value={formData.numero}
              maxLength={10}
              onChange={handleChange}
            />
            <InputStyled
              type="text"
              name="complemento"
              placeholder="Complemento"
              value={formData.complemento}
              maxLength={50}
              onChange={handleChange}
            />
            <InputStyled
              type="text"
              name="bairro"
              placeholder="Bairro"
              value={formData.bairro}
              maxLength={50}
              onChange={handleChange}
              style={{ marginBottom: "16px" }}
            />
          </div>
          <SubmitButtonStyled type="submit" onClick={()=>{navigate("/")}}>Salvar Endereço</SubmitButtonStyled>
        </form>
      </BoxStyled>
    </DivStyled>
  );
};

export default AddressPage;
