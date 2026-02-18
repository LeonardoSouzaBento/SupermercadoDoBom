import BottomNavBar from "@/components/bottom-nav-bar";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div style={{minHeight: "100dvh"}}>
      <main>
        <Outlet />
      </main>
       <BottomNavBar />
    </div>
  );
}
