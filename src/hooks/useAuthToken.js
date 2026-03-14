import { useUserDataContext } from "@/contexts";
import { onIdTokenChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../main";

export function useAuthToken() {
  const { setIdToken } = useUserDataContext();

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
