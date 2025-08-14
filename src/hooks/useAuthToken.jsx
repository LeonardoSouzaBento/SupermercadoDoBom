import { useState, useEffect } from "react";
import { onIdTokenChanged } from "firebase/auth";
import { auth } from "../main";

export function useAuthToken() {
  const [token, setToken] = useState(() => localStorage.getItem("idToken") || null);

  useEffect(() => {
    // Observa mudanças no token do usuário logado
    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      if (user) {
        const newToken = await user.getIdToken(); //se true como paremetro, força a atualização
        localStorage.setItem("idToken", newToken);
        setToken(newToken);
      } else {
        localStorage.removeItem("idToken");
        setToken(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return token;
}
