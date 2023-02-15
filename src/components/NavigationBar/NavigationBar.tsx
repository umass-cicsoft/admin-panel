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
  faPenToSquare,
  faWarehouse,
  faHashtag,
  faChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import { CICSoftLogo, FallbackCICSoftLogo } from "../../assets";
import { Image } from "../../utils";
import { Link } from "react-router-dom";

import styles from "./NavigationBar.module.css";

export default function NavigationBar() {
  const { collapseSidebar, collapsed, rtl } = useProSidebar();
  return (
    <div className="flex h-full" dir={rtl ? "rtl" : "ltr"}>
      <Sidebar customBreakPoint="0px" width="270px" collapsed={collapsed}>
        <div className="flex flex-col h-fill justify-center">
          <div>
            <Menu className="w-full text-lg">
              {collapsed ? (
                <MenuItem
                  className="flex w-full text-start"
                  icon={<FontAwesomeIcon icon={faAngleDoubleRight} />}
                  onClick={() => collapseSidebar(false)}
                ></MenuItem>
              ) : (
                <MenuItem
                  suffix={<FontAwesomeIcon icon={faAngleDoubleLeft} />}
                  onClick={() => collapseSidebar(true)}
                >
                  <div className="flex w-full text-center px-1 py-3">
                    <Image
                      src={FallbackCICSoftLogo}
                      srcSet={CICSoftLogo}
                      alt="CICSoft Logo"
                      width="100%"
                      height="auto"
                    />
                  </div>
                </MenuItem>
              )}
            </Menu>
            <hr style={{ margin: "0" }} />
            <Menu className={`w-full text-lg ${styles.customizedMenu}`}>
              <Link to={`dashboard`}>
                <MenuItem
                  className="flex w-full text-start"
                  icon={<FontAwesomeIcon icon={faHouse} />}
                >
                  Dashboard
                </MenuItem>
              </Link>
              <Link to={`members`}>
                <MenuItem
                  className="flex w-full text-start"
                  icon={<FontAwesomeIcon icon={faUsers} />}
                >
                  Members
                </MenuItem>
              </Link>
              <SubMenu
                className="w-full text-start"
                label="Core Team"
                icon={<FontAwesomeIcon icon={faPeopleGroup} />}
              >
                <MenuItem
                  className="flex w-full text-start"
                  icon={<FontAwesomeIcon icon={faPenToSquare} />}
                >
                  Manage Teams
                </MenuItem>
                <MenuItem
                  className="flex w-full text-start"
                  icon={<FontAwesomeIcon icon={faWarehouse} />}
                >
                  Logistics Team
                </MenuItem>
                <MenuItem
                  className="flex w-full text-start"
                  icon={<FontAwesomeIcon icon={faHashtag} />}
                >
                  Social Media Team
                </MenuItem>
                <MenuItem
                  className="flex w-full text-start"
                  icon={<FontAwesomeIcon icon={faChalkboard} />}
                >
                  Teaching Team
                </MenuItem>
              </SubMenu>
              <MenuItem
                className="flex w-full text-start"
                icon={<FontAwesomeIcon icon={faUserSecret} />}
              >
                Development Team
              </MenuItem>
              <Link to={`administration`}>
                <MenuItem
                  className="flex w-full text-start"
                  icon={<FontAwesomeIcon icon={faToolbox} />}
                >
                  Administration
                </MenuItem>
              </Link>
            </Menu>
          </div>
          <Menu classname="w-full text-lg">
            {/* Placeholder for Sidebar Footer */}
          </Menu>
        </div>
      </Sidebar>
    </div>
  );
}
