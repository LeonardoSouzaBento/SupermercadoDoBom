import { useState, useEffect } from "react";
import {
  DivBodyStyled,
  MainDivStyled,
  SubDivStyled,
  DivSpanCloseStyled,
  SpanCloseStyled,
  DivTitleStyled,
  H1Styled,
  LocationButtonStyled,
  InputStyled,
  RegisterButtonStyled,
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
    }, 200);
  }, []);

  return (
    <DivBodyStyled $opacity={opacityState}>
      <MainDivStyled>
        <DivSpanCloseStyled>
          <SpanCloseStyled
            className="material-symbols-rounded"
            onClick={() => {
              setOpacityState(0);
              setTimeout(() => {
                setSeeAddressForm(false);
              }, 420);
            }}
          >
            close
          </SpanCloseStyled>
        </DivSpanCloseStyled>

        <DivTitleStyled>
          <H1Styled>Cadastrar endereço</H1Styled>
        </DivTitleStyled>

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
              backgroundColor: " #E9EFF5",
              borderBottom: "none",
              marginBottom: "12px",
              borderRadius: "4px"
            }}
          />

          <SubDivStyled>
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
              style={{ paddingBottom: "2px", borderBottom: "none"}} 
            />
          </SubDivStyled>
          <RegisterButtonStyled
            type="submit"
            onClick={() => {
              navigate("/");
            }}
          >
            Salvar Endereço
          </RegisterButtonStyled>
        </form>
      </MainDivStyled>
    </DivBodyStyled>
  );
};

export default RegisterAddress;
