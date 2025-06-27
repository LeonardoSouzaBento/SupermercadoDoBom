import { useState, useEffect } from "react";
import {
  Box0Styled,
  BoxStyled,
  DivSpanStyled,
  SpanCloseStyled,
  TitleStyled,
  LocationButtonStyled,
  InputStyled,
  SubmitButtonStyled,
} from "./ComponentsRegAddress";
import { useNavigate } from "react-router-dom";

const RegisterAddress = ({ setSeeAddressForm }) => {
  const navigate = useNavigate();
  const [opacityState, setOpacityState] = useState(0);

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

  useEffect(() => {
    setTimeout(() => {
      setOpacityState(1);
    }, 300);
  }, []);

  return (
    <Box0Styled $opacity={opacityState}>
      <BoxStyled>
        <DivSpanStyled>
          <SpanCloseStyled
            className="material-symbols-outlined"
            onClick={() => {
              setOpacityState(0);
              setTimeout(() => {
                setSeeAddressForm(false);
              }, 520);
            }}
          >
            close
          </SpanCloseStyled>
        </DivSpanStyled>

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
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(0, 0, 0, 0.28)",
              padding: "12px",
              borderRadius: "4px",
            }}
          />

          <div
            style={{
              overflow: "hidden",
              marginBottom: "20px",
              borderRadius: "4px",
              paddingBottom: '4px',
              backgroundColor: 'white',
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.33)",
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
              style={{ borderBottom: "none" }}
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
