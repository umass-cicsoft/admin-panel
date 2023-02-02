import styled from "styled-components";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { CICSoftLogo, FallbackCICSoftLogo } from "../assets";
import { Image } from "../utils";

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  direction: ${(props: { direction: string }) =>
    props.direction ? "rtl" : "ltr"};
`;

const StyledMenu = styled(Menu)`
  width: 100%;
  font-size: large;
  padding: 0.5rem;
`;

const StyledSubMenu = styled(SubMenu)`
  width: 100%;
  text-align: start;
`;

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  width: 100%;
  text-align: start;
`;

const StyledMenuLogo = styled(MenuItem)`
  display: flex;
  width: 100%;
  text-align: center;
`;

export default function NavigationBar() {
  const { toggleSidebar, collapseSidebar, broken, rtl } = useProSidebar();
  return (
    <StyledContainer direction={rtl}>
      <Sidebar breakPoint="lg">
        <StyledMenu>
          <StyledMenuLogo>
            <Image
              src={FallbackCICSoftLogo}
              srcSet={CICSoftLogo}
              alt="CICSoft Logo"
              width="100%"
              height="auto"
            ></Image>
          </StyledMenuLogo>
          <StyledMenuItem>Dashboard</StyledMenuItem>
          <StyledSubMenu label="Members">
            <StyledMenuItem>Manage Members</StyledMenuItem>
            <StyledMenuItem>Verified Members</StyledMenuItem>
            <StyledMenuItem>Search Members</StyledMenuItem>
          </StyledSubMenu>
          <StyledSubMenu label="Core Team">
            <StyledMenuItem>Manage Teams</StyledMenuItem>
            <StyledMenuItem>Logistics Team</StyledMenuItem>
            <StyledMenuItem>Social Media Team</StyledMenuItem>
            <StyledMenuItem>Teaching Team</StyledMenuItem>
          </StyledSubMenu>
          <StyledMenuItem>Development Team</StyledMenuItem>
          <StyledMenuItem>Administration</StyledMenuItem>
        </StyledMenu>
      </Sidebar>
      <main>
        <div style={{ display: "flex", padding: 10 }}>
          {broken ? (
            <button onClick={() => toggleSidebar()}>Toggle </button>
          ) : null}
        </div>
      </main>
    </StyledContainer>
  );
}
