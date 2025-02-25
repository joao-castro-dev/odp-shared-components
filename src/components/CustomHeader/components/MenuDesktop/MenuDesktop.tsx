import React, { FC } from "react";
import { NavbarLinksListItem, Link } from "@faststore/ui";

import type {
  MenuData,
  SubMenuData,
  SubMenuFourthLevel,
  SubMenuThirdLevelData,
} from "../../CustomHeaderTypes";
import Icons from "../../../Icons";

import styles from "./MenuDesktop.module.scss";
import { MenuDesktopProps } from "./MenuDesktopTypes";

const MenuDesktop: FC<MenuDesktopProps> = ({
  item,
  level,
  onClick,
  currIndex,
}) => {
  const hasChildren =
    ((item as MenuData).submenu && (item as MenuData).submenu.length > 0) ||
    ((item as SubMenuData).submenuThirdLevel &&
      (item as SubMenuData).submenuThirdLevel.length > 0) ||
    ((item as SubMenuThirdLevelData).submenuFourthLevel &&
      (item as SubMenuThirdLevelData).submenuFourthLevel.length > 0);

  return (
    <NavbarLinksListItem
      data-fs-menu-item
      className={`${styles.subMenu__item} ${
        (item as SubMenuThirdLevelData).headTitle &&
        `${styles.subMenu__item__headTitle}`
      } ${hasChildren ? "has-children" : ""} ${
        level === 1
          ? styles.subMenu__item__levelOne
          : level === 2
          ? styles.subMenu__item__levelTwo
          : level === 3
          ? styles.subMenu__item__levelThree
          : styles.subMenu__item__levelFour
      } `}
      data-level={level}
      data-headtitle={(item as SubMenuThirdLevelData).headTitle}
      data-testid={`menu-desktop-navbar-links-list-item-level-${level}-index-${currIndex}`}
    >
      <Link
        data-fs-menu-item-link
        data-fs-button-dropdown-link-highlight={
          (item as SubMenuThirdLevelData).headTitle
        }
        href={item.href}
        data-testid={`menu-desktop-link-level-${level}-index-${currIndex}`}
        className={styles.navLink}
        onClick={onClick}
        variant={hasChildren ? "display" : "default"}
      >
        {item.title}

        {((level == 1 && (item as MenuData)?.submenu?.length) ||
          (level == 2 && (item as SubMenuData)?.submenuThirdLevel?.length)) && (
          <Icons
            data-fs-menu-icon
            icon={level == 1 ? "arrow-down" : "arrow-right"}
            data-icon={level == 1 ? "arrowDown" : "arrowRight"}
            data-testid={`menu-desktop-link-icon-level-${level}-index-${currIndex}`}
            className={styles.menu__item__icon}
          />
        )}
      </Link>

      {hasChildren && (
        <ul className={styles.subMenu} data-level={level + 1}>
          {level == 1 &&
            (item as MenuData)?.submenu?.length &&
            (item as MenuData)?.submenu?.map(
              (subItem: SubMenuData, index: number) => (
                <MenuDesktop
                  item={subItem}
                  key={index}
                  level={2}
                  currIndex={index}
                  data-testid={`menu-desktop-sublevel-level-${level}-index-${currIndex}`}
                />
              )
            )}

          {level == 2 &&
            (item as SubMenuData)?.submenuThirdLevel?.length &&
            (item as SubMenuData)?.submenuThirdLevel?.map(
              (subItemCol: SubMenuThirdLevelData[], index: number) => (
                <div className={styles.subMenu__col} key={index}>
                  {subItemCol.map(
                    (subItem: SubMenuThirdLevelData, index: number) => (
                      <MenuDesktop
                        item={subItem}
                        key={index}
                        level={3}
                        currIndex={index}
                        data-testid={`menu-desktop-sublevel-level-${level}-index-${currIndex}`}
                      />
                    )
                  )}
                </div>
              )
            )}

          {level == 3 &&
            (item as SubMenuThirdLevelData)?.submenuFourthLevel?.length &&
            (item as SubMenuThirdLevelData)?.submenuFourthLevel?.map(
              (subItem: SubMenuFourthLevel, index: number) => (
                <MenuDesktop
                  item={subItem}
                  key={index}
                  level={4}
                  currIndex={index}
                  data-testid={`menu-desktop-sublevel-level-${level}-index-${currIndex}`}
                />
              )
            )}
        </ul>
      )}
    </NavbarLinksListItem>
  );
};

export { MenuDesktop };
