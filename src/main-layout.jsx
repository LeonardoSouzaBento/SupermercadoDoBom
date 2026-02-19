import BottomNavBar from "@/components/bottom-nav-bar";
import { UserDataContext } from "@contexts/UserDataContext";
import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function MainLayout() {
  const { idToken } = useContext(UserDataContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!idToken) {
  //     navigate("/fazer-login");
  //   }
  // }, [idToken]);

  return (
    <div style={{minHeight: "100dvh"}}>
      <main>
        <Outlet />
      </main>
       <BottomNavBar />
    </div>
  );
}
