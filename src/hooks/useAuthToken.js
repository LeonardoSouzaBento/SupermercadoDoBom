import { useEffect, useContext } from "react";
import { onIdTokenChanged } from "firebase/auth";
import { auth } from "../main";
import { UserDataContext } from "@contexts/UserDataContext";

export function useAuthToken() {
  const { setIdToken } = useContext(UserDataContext);

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      if (user) {
        const newToken = await user.getIdToken();
        setIdToken(newToken); //login ou renovação
      } else {
        setIdToken(null); //logout
      }
    });
    return () => unsubscribe();
  }, [setIdToken]);
}
