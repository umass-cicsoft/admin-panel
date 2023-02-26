import { ProSidebarProvider } from "react-pro-sidebar";
import { NavigationBar } from "./components";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <ProSidebarProvider>
      <div className="flex h-screen w-screen">
        <NavigationBar />

        {/* Outlet allows parent route display child route as a component */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </ProSidebarProvider>
  );
}
