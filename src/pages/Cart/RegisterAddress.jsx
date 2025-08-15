import { useState, useEffect, useContext } from "react";
import {
  DivBodyStyled,
  MainDivStyled,
  DivSpanCloseStyled,
  SpanCloseStyled,
  DivTitleStyled,
  H1Styled,
  ButtonStyled,
  DivGPSResultStyled,
  SpanGpsReturnStyled,
  InputStyled,
  DivCepInputStyled,
  CepInputStyled,
  PWarnCepStyled,
  DivCepErrorStyled,
  PCepErrorStyled,
  RegisterButtonStyled,
} from "./ComponentsRegAddress";
import { PValueStyled } from "../Cart/ComponentsCart";
import Login from "../../components/Login/Login";
import { useAuthToken } from "../../hooks/useAuthToken";
import { CartContext } from "../../contexts/CartContext";

async function checkLocationPermission() {
  if (!navigator.permissions) {
    console.warn("API de permissões não suportada nesse navegador.");
    return null;
  }

  try {
    const result = await navigator.permissions.query({ name: "geolocation" });

    if (result.state === "granted") {
      return "granted";
    } else if (result.state === "denied") {
      return "denied";
    } else if (result.state === "prompt") {
      console.log("Usuário ainda não decidiu (vai aparecer o pop-up).");
      return "prompt";
    }
  } catch (err) {
    console.error("Erro ao verificar permissão:", err);
    return null;
  }
}

const RegisterAddress = ({ setSeeAddressForm }) => {
  const [opacityState, setOpacityState] = useState(0);
  const [cepState, setCepState] = useState("Digite seu CEP");
  const [clickOnCep, setClickOnCep] = useState(false);
  const [cepPassed, setCepPassed] = useState(false);
  const [cepCathError, setCepCathError] = useState("");
  const [addressComplete, setAddressComplete] = useState(false);
  const [gettingAddress, setGettingAddress] = useState(false);
  const [errorLocationButton, setErrorLocationButton] = useState(false); //testando
  const [opacityGpsResult, setOpacityGpsResult] = useState(0);
  const [showPermissionMessage, setShowPermissionMessage] = useState(false);
  const [waitMessage, setWaitMessage] = useState(false);
  const [formData, setFormData] = useState({
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    lat: "",
    lng: "",
  });
  const [coordsState, setCoordsState] = useState({ lat: "", lng: "" });
  const [seeLogin, setSeeLogin] = useState(true);
  const token = useAuthToken();
  const [savedAddress, setSavedAddress] = useState("");
  const { setUserAddress } = useContext(CartContext);
  //-11.186615346993204, lng: -40.26740712716049

  function setLocationStatus({
    permissionMsg = false,
    waiting = false,
    getting = false,
    error = false,
    opacity = 1,
  }) {
    setShowPermissionMessage(permissionMsg);
    setWaitMessage(waiting);
    setGettingAddress(getting);
    setErrorLocationButton(error);
    setOpacityGpsResult(opacity);
  }

  //mostrar erro ao capturar local
  function showErrorLocationMessage() {
    setCepPassed(false);
    setGettingAddress(false);
    setErrorLocationButton(true);
    setTimeout(() => {
      setOpacityGpsResult(1);
    }, 70);
    setTimeout(() => {
      setOpacityGpsResult(0);
      setErrorLocationButton(false);
    }, 4000);
  }

  //pegar coordenasdas
  function getCoordinates() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          resolve({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (err) => reject(err),
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
      );
    });
  }

  async function handleLocationClick() {
    const permission = await checkLocationPermission();

    if (permission === "granted") {
      setLocationStatus({
        getting: true,
      });
      handleConvertCoords();
    }
    if (permission === "prompt") {
      setLocationStatus({ permissionMsg: true });
      handleConvertCoords();
    } else if (permission === "denied") {
      setLocationStatus({ opacity: 0 });
      alert(
        "Você bloqueou o acesso à localização. Digite o endereço manualmente ou permita nas configurações do navegador."
      );
    }
  }

  async function handleConvertCoords() {
    try {
      const coords = await getCoordinates();
      setCoordsState({ lat: coords.lat, lng: coords.lng });
      setLocationStatus({ getting: true });
      if (!token) {
        setLocationStatus({ getting: false, opacity: 0 });
        setSeeLogin(true);
        return;
      }

      const response = await fetch(
        "https://us-central1-api-supermercado-do-bom.cloudfunctions.net/api/get-address",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          body: JSON.stringify(coords),
        }
      );

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }
      const dados = await response.json();

      setFormData({
        rua: dados.rua,
        numero: dados.numero,
        complemento: "",
        bairro: dados.bairro,
        cidade: dados.cidade,
        estado: dados.estado,
        lat: null,
        lng: null,
      });
      setCepPassed(true);
      setLocationStatus({ opacity: 0 });
    } catch (error) {
      showErrorLocationMessage();
      console.error("Erro ao buscar endereço:", error);
    }
  }

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
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    try {
      const response = await fetch(url); //requisição HTTP
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      return null;
    }
  }

  //para preenchimento manual
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleRegisterAddres() {
    const address = {
      ...formData,
      lat: coordsState.lat,
      lng: coordsState.lng,
    };
    setFormData(address);
    updateAddres(address);
    setUserAddress(address);
    setSavedAddress("saving");
  }

  async function updateAddres(endereco) {
    try {
      const response = await fetch(
        "https://us-central1-api-supermercado-do-bom.cloudfunctions.net/api/users/update-address",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ endereco: endereco }),
        }
      );

      console.log(JSON.stringify({ endereco: endereco }));

      if (!response.ok) {
        setSavedAddress("pending");
        throw new Error(`Erro: ${response.status}`);
      } else {
        setSavedAddress("saved");
        setTimeout(() => {
          setSavedAddress("");
        }, 2200);
      }
    } catch (error) {
      setSavedAddress("pending");
      console.error("Erro ao salvar endereço: ", error);
    }
  }

  //fechar caixa
  function handleClickClose() {
    if (errorLocationButton === true) {
      setOpacityGpsResult(0);
      setTimeout(() => {
        setErrorLocationButton(false);
      }, 200);
    } else {
      setOpacityState(0);
      setTimeout(() => {
        setSeeAddressForm(false);
      }, 420);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setOpacityState(1);
    }, 200);
  }, []);

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
            setCepPassed(true);
          } else {
            setCepPassed(false);
            setCepCathError("");
          }
        })
        .catch((err) => {
          setCepCathError("Houve um erro, tente novamente. Erro: " + err);
          setTimeout(() => {
            setCepCathError("");
          }, 3500);
        });
    }
  }, [cepState]);

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

  return (
    <DivBodyStyled $opacity={opacityState}>
      {seeLogin && <Login setSeeLogin={setSeeLogin} onRegisterAddress={true} />}
      <MainDivStyled>
        <DivTitleStyled>
          <H1Styled>Cadastrar endereço</H1Styled>
          <DivSpanCloseStyled onClick={handleClickClose}>
            <SpanCloseStyled className="material-symbols-rounded">
              close
            </SpanCloseStyled>
          </DivSpanCloseStyled>
        </DivTitleStyled>

        {waitMessage && (
          <DivGPSResultStyled $opacityGpsResult={opacityGpsResult}>
            <SpanGpsReturnStyled
              className="material-symbols-outlined"
              $errorLocationButton={errorLocationButton || waitMessage}
            >
              progress_activity
            </SpanGpsReturnStyled>

            <PValueStyled style={{ width: "80%", textAlign: "center" }}>
              Espere um pouco
            </PValueStyled>
          </DivGPSResultStyled>
        )}

        {showPermissionMessage && (
          <DivGPSResultStyled $opacityGpsResult={opacityGpsResult}>
            <PValueStyled style={{ width: "80%", textAlign: "center" }}>
              <strong>Permita</strong> pegar a sua localização
            </PValueStyled>
          </DivGPSResultStyled>
        )}

        {gettingAddress === true && (
          <DivGPSResultStyled $opacityGpsResult={opacityGpsResult}>
            <SpanGpsReturnStyled
              className="material-symbols-outlined"
              $errorLocationButton={errorLocationButton}
            >
              progress_activity
            </SpanGpsReturnStyled>

            <PValueStyled style={{ width: "80%", textAlign: "center" }}>
              Pegando sua localização
            </PValueStyled>
          </DivGPSResultStyled>
        )}

        {errorLocationButton && (
          <DivGPSResultStyled $opacityGpsResult={opacityGpsResult}>
            <SpanGpsReturnStyled
              className="material-symbols-outlined"
              $errorLocationButton={errorLocationButton}
            >
              exclamation
            </SpanGpsReturnStyled>

            <PValueStyled style={{ width: "80%", textAlign: "center" }}>
              <strong>Erro: </strong>não conseguimos pegar sua localização
            </PValueStyled>
          </DivGPSResultStyled>
        )}

        {cepPassed === false && (
          <div>
            <ButtonStyled
              onClick={() => {
                setWaitMessage(true);
                handleLocationClick();
              }}
            >
              Pegar minha localização
            </ButtonStyled>
            <form>
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
                <PWarnCepStyled
                  $noPassed={cepPassed === false && cepState.length === 9}
                >
                  CEP INVÁLIDO
                </PWarnCepStyled>
              </DivCepInputStyled>
              <ButtonStyled
                $variant={"digitarTudo"}
                onClick={() => {
                  setCepPassed(true);
                }}
              >
                Digitar todos os dados
              </ButtonStyled>

              {cepCathError != "" && (
                <DivCepErrorStyled>
                  <PCepErrorStyled>{cepCathError}</PCepErrorStyled>
                </DivCepErrorStyled>
              )}
            </form>
          </div>
        )}

        {cepPassed && (
          <form
            autoComplete="off"
            style={{
              marginTop: "-12px",
              borderRadius: "8px",
              position: "relative",
            }}
          >
            {savedAddress !== "" && (
              <DivGPSResultStyled $opacityGpsResult={opacityGpsResult}>
                <SpanGpsReturnStyled
                  className="material-symbols-outlined"
                  $errorLocationButton={savedAddress == "saved"}
                >
                  {savedAddress == "saved" ? "check" : "progress_activity"}
                </SpanGpsReturnStyled>

                {savedAddress === "saved" ? (
                  <PValueStyled style={{ width: "80%", textAlign: "center" }}>
                    <strong>Sucesso:</strong> endereço salvo!
                  </PValueStyled>
                ) : (
                  <PValueStyled style={{ width: "80%", textAlign: "center" }}>
                    Salvando endereço...
                  </PValueStyled>
                )}
              </DivGPSResultStyled>
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
                setCepPassed(false);
              }}
            >
              Voltar
            </ButtonStyled>
            <RegisterButtonStyled
              $enable={addressComplete && cepPassed}
              onClick={(e) => {
                e.preventDefault();
                handleRegisterAddres();
              }}
            >
              Salvar endereço
            </RegisterButtonStyled>
          </form>
        )}
      </MainDivStyled>
    </DivBodyStyled>
  );
};

export default RegisterAddress;
