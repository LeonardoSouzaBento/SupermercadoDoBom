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
  DivOrStyled,
  POrStyled,
  InputStyled,
  CepInputStyled,
  DivCityStyled,
  PCityStyled,
  RegisterButtonStyled,
} from "./ComponentsRegAddress";
import Logo from "../../components/logo";
import { useNavigate } from "react-router-dom";

const RegisterAddress = ({ setSeeAddressForm }) => {
  const navigate = useNavigate();
  const [opacityState, setOpacityState] = useState(0);
  const [disable, setDisable] = useState(true);
  const [canReviewAddress, setCanReviewAddress] = useState(false);

  const [formData, setFormData] = useState({
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "Digite seu CEP",
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
        <DivTitleStyled>
          <Logo local={"boxAddress"}/>
          <H1Styled>Cadastrar endereço</H1Styled>
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
        </DivTitleStyled>

        {canReviewAddress === false && (
          <div>
            <LocationButtonStyled onClick={handleLocationClick}>
              Pegue minha localização
            </LocationButtonStyled>

            <DivOrStyled>
              <POrStyled>Ou</POrStyled>
            </DivOrStyled>

            <form onSubmit={handleSubmit}>
              <CepInputStyled
                type="text"
                name="cep"
                placeholder="Digite seu CEP"
                value={formData.cep}
                onChange={handleChange}
              />
              <DivCityStyled>
                <PCityStyled>...</PCityStyled>
              </DivCityStyled>
              <RegisterButtonStyled
                // type="submit"
                $disable={disable}
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Sim");
                }}
              >
                {disable ? "Continuar" : "Salvar Endereço"}
              </RegisterButtonStyled>
            </form>
          </div>
        )}
        
        <H1Styled $alert={true}>Esse componente ainda será desenvolvido</H1Styled>

        {canReviewAddress && (
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
              style={{ paddingBottom: "2px", borderBottom: "none" }}
            />
          </SubDivStyled>
        )}
      </MainDivStyled>
    </DivBodyStyled>
  );
};

export default RegisterAddress;
