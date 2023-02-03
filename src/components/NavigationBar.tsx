import styled from "styled-components";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faHouse,
  faUsers,
  faPeopleGroup,
  faUserSecret,
  faToolbox,
  faUserPen,
  faUserCheck,
  faMagnifyingGlass,
  faPenToSquare,
  faWarehouse,
  faHashtag,
  faChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import { CICSoftLogo, FallbackCICSoftLogo } from "../assets";
import { Image } from "../utils";

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  direction: ${(props: { direction: string }) =>
    props.direction ? "rtl" : "ltr"};
`;

const StyledSpacingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const StyledMenu = styled(Menu)`
  width: 100%;
  font-size: large;

  .ps-submenu-content {
    width: min-content;
  }
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
  padding: 0.5em 0em;
`;

export default function NavigationBar() {
  const { collapseSidebar, collapsed, rtl } = useProSidebar();
  return (
    <StyledContainer direction={rtl}>
      <Sidebar customBreakPoint="0px" width="270px" collapsed={collapsed}>
        <StyledSpacingContainer>
          <div>
            <StyledMenu>
              {collapsed ? (
                <StyledMenuItem
                  icon={<FontAwesomeIcon icon={faAngleDoubleRight} />}
                  onClick={() => collapseSidebar(false)}
                ></StyledMenuItem>
              ) : (
                <MenuItem
                  suffix={<FontAwesomeIcon icon={faAngleDoubleLeft} />}
                  onClick={() => collapseSidebar(true)}
                >
                  <StyledMenuLogo>
                    <Image
                      src={FallbackCICSoftLogo}
                      srcSet={CICSoftLogo}
                      alt="CICSoft Logo"
                      width="100%"
                      height="auto"
                    />
                  </StyledMenuLogo>
                </MenuItem>
              )}
            </StyledMenu>
            <hr style={{ margin: "0" }} />
            <StyledMenu>
              <StyledMenuItem icon={<FontAwesomeIcon icon={faHouse} />}>
                Dashboard
              </StyledMenuItem>
              <StyledSubMenu
                label="Members"
                icon={<FontAwesomeIcon icon={faUsers} />}
              >
                <StyledMenuItem icon={<FontAwesomeIcon icon={faUserPen} />}>
                  Manage Members
                </StyledMenuItem>
                <StyledMenuItem icon={<FontAwesomeIcon icon={faUserCheck} />}>
                  Verified Members
                </StyledMenuItem>
                <StyledMenuItem
                  icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                >
                  Search Members
                </StyledMenuItem>
              </StyledSubMenu>
              <StyledSubMenu
                label="Core Team"
                icon={<FontAwesomeIcon icon={faPeopleGroup} />}
              >
                <StyledMenuItem icon={<FontAwesomeIcon icon={faPenToSquare} />}>
                  Manage Teams
                </StyledMenuItem>
                <StyledMenuItem icon={<FontAwesomeIcon icon={faWarehouse} />}>
                  Logistics Team
                </StyledMenuItem>
                <StyledMenuItem icon={<FontAwesomeIcon icon={faHashtag} />}>
                  Social Media Team
                </StyledMenuItem>
                <StyledMenuItem icon={<FontAwesomeIcon icon={faChalkboard} />}>
                  Teaching Team
                </StyledMenuItem>
              </StyledSubMenu>
              <StyledMenuItem icon={<FontAwesomeIcon icon={faUserSecret} />}>
                Development Team
              </StyledMenuItem>
              <StyledMenuItem icon={<FontAwesomeIcon icon={faToolbox} />}>
                Administration
              </StyledMenuItem>
            </StyledMenu>
          </div>
          <StyledMenu>{/* Placeholder for Sidebar Footer */}</StyledMenu>
        </StyledSpacingContainer>
      </Sidebar>
    </StyledContainer>
  );
}
