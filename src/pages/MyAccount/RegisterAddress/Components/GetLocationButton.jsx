import { useEffect, useState } from "react";
import { ButtonStyled } from "../StylizedTags";
import GetLocationReturn from "./GetLocationReturn";

async function checkLocationPermission() {
  if (!navigator.permissions) {
    alert("Seu navegador não suporta a API de permissões.");
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

const GetLocationButton = ({
  opacityReturn,
  setOpacityReturn,
  formData,
  setFormData,
  setSeeAddressForm,
  idToken,
}) => {
  const [getLocationStatus, setGetLocationStatus] = useState("");

  //mostrar erro ao capturar local
  function showErrorLocationMessage() {
    setSeeAddressForm(false);
    setTimeout(() => {
      setOpacityReturn(1);
    }, 70);
    setTimeout(() => {
      setOpacityReturn(0);
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

  async function respondLocationPermission() {
    const permission = await checkLocationPermission();

    if (permission === "granted") {
      setGetLocationStatus("pending");
      handleConvertCoords();
    } else if (permission === "prompt") {
      setGetLocationStatus("inPermission");
      handleConvertCoords();
    } else if (permission === "denied") {
      setGetLocationStatus("bloqued");
      alert(
        "Você bloqueou o acesso à localização. Digite o endereço manualmente ou permita nas configurações do navegador."
      );
    }
  }
  async function handleConvertCoords() {
    setGetLocationStatus("pending");
    try {
      const coords = await getCoordinates();
      if (!idToken) {
        // return;
        console.log("Sem Token");
      }

      const response = await fetch(
        "https://us-central1-api-supermercado-do-bom.cloudfunctions.net/api/get-address",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(idToken && { Authorization: `Bearer ${idToken}` }),
          },
          body: JSON.stringify(coords),
        }
      );

      if (!response.ok) {
        setGetLocationStatus("error");
        throw new Error(`Erro: ${response.status}`);
      }
      const dados = await response.json();

      setFormData({
        ...formData,
        rua: dados.rua,
        numero: dados.numero,
        bairro: dados.bairro,
        cidade: dados.cidade,
        estado: dados.estado,
        lat: coords.lat,
        lng: coords.lng,
      });
      setSeeAddressForm(true);
      setGetLocationStatus("success");
    } catch (error) {
      setGetLocationStatus("error");
      showErrorLocationMessage();
      console.error("Erro ao buscar endereço:", error);
    }
  }

  useEffect(() => {
    if (getLocationStatus !== "pending") {
      setTimeout(() => {
        setGetLocationStatus("");
      }, 3000);
    }
  }, [getLocationStatus, setGetLocationStatus]);

  return (
    <>
      {getLocationStatus !== "" && (
        <GetLocationReturn
          opacityReturn={opacityReturn}
          getLocationStatus={getLocationStatus}
        />
      )}
      <ButtonStyled
        onClick={() => {
          respondLocationPermission();
        }}
      >
        Pegar minha localização
      </ButtonStyled>
    </>
  );
};

export default GetLocationButton;
