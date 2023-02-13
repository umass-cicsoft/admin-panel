import { ProSidebarProvider } from "react-pro-sidebar";
import { NavigationBar } from "./components";

export default function App() {
  return (
    <ProSidebarProvider>
      <div className="flex h-screen w-screen text-center">
        <NavigationBar />
      </div>
    </ProSidebarProvider>
  );
}
