import { useState } from "react";
import {
  Box0Styled,
  BoxStyled,
  SpanCloseStyled,
  TitleStyled,
  LocationButtonStyled,
  InputStyled,
  SubmitButtonStyled,
  NoKnowMyCEP,
} from "./ComponentsRegAddress";
import { useNavigate } from "react-router-dom";

const RegisterAddress = ({ setSeeAdressForm }) => {
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
    <Box0Styled>
      <BoxStyled>
        <SpanCloseStyled
          className="material-symbols-rounded"
          onClick={() => {
            setSeeAdressForm(false);
          }}
        >
          close
        </SpanCloseStyled>

        <TitleStyled>Cadastrar endereço</TitleStyled>

        <LocationButtonStyled onClick={handleLocationClick}>
          Pegue minha localização
        </LocationButtonStyled>

        <form onSubmit={handleSubmit}>
          <InputStyled
            type="text"
            name="cep"
            placeholder="CEP"
            value={formData.cep}
            onChange={handleChange}
            style={{
              marginBottom: "12px",
              backgroundColor: "rgb(240, 240, 240)",
              boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.5)"
            }}
          />

          <div
            style={{
              backgroundColor: "rgb(227, 227, 227)",
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
              required
              onChange={handleChange}
            />
            <InputStyled
              type="text"
              name="estado"
              placeholder="Estado"
              value={formData.estado}
              required
              onChange={handleChange}
            />
            <InputStyled
              type="text"
              name="rua"
              placeholder="Rua"
              value={formData.rua}
              required
              maxLength={40}
              onChange={handleChange}
            />
            <InputStyled
              type="text"
              name="numero"
              placeholder="Número"
              value={formData.numero}
              required
              maxLength={10}
              onChange={handleChange}
            />
            <InputStyled
              type="text"
              name="complemento"
              placeholder="Complemento"
              value={formData.complemento}
              required
              maxLength={50}
              onChange={handleChange}
            />
            <InputStyled
              type="text"
              name="bairro"
              placeholder="Bairro"
              value={formData.bairro}
              required
              maxLength={50}
              onChange={handleChange}
              style={{ marginBottom: "16px" }}
            />
          </div>
          <SubmitButtonStyled
            type="submit"
            onClick={() => {
              navigate("/");
            }}
          >
            Salvar Endereço
          </SubmitButtonStyled>
        </form>
      </BoxStyled>
    </Box0Styled>
  );
};

export default RegisterAddress;
