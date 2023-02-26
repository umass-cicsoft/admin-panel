import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
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
import navigationData from "../../data/navigation.json";

import styles from "./NavigationBar.module.css";

const icons: any = {
  faBars: faBars,
  faHouse: faHouse,
  faUsers: faUsers,
  faPeopleGroup: faPeopleGroup,
  faUserSecret: faUserSecret,
  faToolbox: faToolbox,
  faPenToSquare: faPenToSquare,
  faWarehouse: faWarehouse,
  faHashtag: faHashtag,
  faChalkboard: faChalkboard,
};

export default function NavigationBar() {
  const { collapseSidebar, collapsed, rtl } = useProSidebar();
  return (
    <div className="flex sticky top-0 h-full" dir={rtl ? "rtl" : "ltr"}>
      <Sidebar customBreakPoint="0px" width="270px" collapsed={collapsed}>
        <div className="flex flex-col h-fill justify-center">
          <div>
            <Menu className="w-full text-lg">
              <MenuItem
                className="flex w-full text-start"
                icon={collapsed ? <FontAwesomeIcon icon={faBars} /> : null}
                suffix={!collapsed ? <FontAwesomeIcon icon={faBars} /> : null}
                onClick={() => collapseSidebar(!collapsed)}
              >
                {!collapsed && (
                  <div className="flex w-full text-center px-1 py-3">
                    <Image
                      src={FallbackCICSoftLogo}
                      srcSet={CICSoftLogo}
                      alt="CICSoft Logo"
                    />
                  </div>
                )}
              </MenuItem>
            </Menu>
            <hr className="m-0" />
            <Menu className={`w-full text-lg ${styles.customizedMenu}`}>
              {navigationData.map((menuItem: any, idx: number) => {
                if (menuItem.subMenu) {
                  return (
                    <SubMenu
                      className="w-full text-start"
                      label={menuItem.name}
                      icon={<FontAwesomeIcon icon={icons[menuItem.icon]} />}
                      key={idx}
                    >
                      {menuItem.subMenu.map(
                        (subMenuItem: any, subIdx: number) => {
                          return (
                            <Link to={`${menuItem.link}/${subMenuItem.link}`}>
                              <MenuItem
                                className="flex w-full text-start"
                                icon={
                                  <FontAwesomeIcon
                                    icon={icons[subMenuItem.icon]}
                                  />
                                }
                                key={subIdx}
                              >
                                {subMenuItem.name}
                              </MenuItem>
                            </Link>
                          );
                        }
                      )}
                    </SubMenu>
                  );
                } else {
                  return (
                    <Link to={`${menuItem.link}`}>
                      <MenuItem
                        className="flex w-full text-start"
                        icon={<FontAwesomeIcon icon={icons[menuItem.icon]} />}
                        key={idx}
                      >
                        {menuItem.name}
                      </MenuItem>
                    </Link>
                  );
                }
              })}
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
