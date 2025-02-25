import React, { FC, useState } from "react";
import { NavbarLinks, NavbarLinksList } from "@faststore/ui";

import type { MenuData } from "../../CustomHeaderTypes";
import MenuDesktop from "../MenuDesktop";
import MenuMobile from "../MenuMobile";

import Modal from "../../../Modal";
import styles from "./Menu.module.scss";
import { MenuProps } from "./MenuTypes";

const Menu: FC<MenuProps> = ({
  menu: mainMenu,
  isMobile,
  isMobileMenuOpen,
  logoAlt,
  logoSrc,
  contactUs,
  onCloseMobileMenu,
  onFocus,
}) => {
  const [currentLevel, setCurrentLevel] = useState<number>(1);

  const handleMobileLevelUpdate = (selectedLevel: number) => {
    setCurrentLevel(selectedLevel);
  };

  if (!mainMenu) return;

  if (isMobile && !isMobileMenuOpen) return null;

  if (isMobile && isMobileMenuOpen) {
    return (
      <Modal
        isOpen={isMobileMenuOpen}
        onClose={onCloseMobileMenu}
        shouldShowCloseButton={currentLevel == 1 ? true : false}
        data-testid="menu-modal-mobile"
      >
        {mainMenu.length && (
          <MenuMobile
            menuData={mainMenu}
            logoAlt={logoAlt}
            logoSrc={logoSrc}
            contactUs={contactUs}
            triggerLevelUpdate={handleMobileLevelUpdate}
            data-testid="menu-mobile"
          />
        )}
      </Modal>
    );
  }

  if (!isMobile) {
    return (
      <NavbarLinks
        className={`${styles.navLinks} ${
          isMobile ? styles.navLinks__mobile : styles.navLinks__desktop
        }`}
        onMouseEnter={onFocus}
        data-testid="menu-desktop-navbar-links"
      >
        <NavbarLinksList
          className={styles.menu}
          data-testid="menu-desktop-navbar-links-list"
        >
          {mainMenu.length &&
            mainMenu.map((item: MenuData, idx: number) => (
              <MenuDesktop
                key={idx}
                item={item}
                level={1}
                data-testid={`menu-desktop-item-${idx}`}
                currIndex={idx}
              />
            ))}
        </NavbarLinksList>
      </NavbarLinks>
    );
  }
};

export { Menu };
