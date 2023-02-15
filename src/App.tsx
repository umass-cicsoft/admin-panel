import { ProSidebarProvider } from "react-pro-sidebar";
import { NavigationBar } from "./components";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <ProSidebarProvider>
      <div className="flex h-screen w-screen text-center">
        <NavigationBar />
        <Outlet />
      </div>
    </ProSidebarProvider>
  );
}
