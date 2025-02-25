import React, { useRef, useState } from "react";
import { Navbar, NavbarHeader, useScrollDirection } from "@faststore/ui";

import type { SearchInputRef } from "./components/SearchInput/SearchInputTypes";
import SearchInput from "./components/SearchInput";
import Menu from "./components/Menu";
import MenuButtonMobile from "./components/MenuButtonMobile";
import HeaderNavbarButtons from "./components/HeaderNavbarButtons";
import { HeaderLogo } from "./components/HeaderLogo/HeaderLogo";

import type { CustomHeaderProps } from "./CustomHeaderTypes";
import styles from "./CustomHeader.module.scss";

import { formatMenu } from "./utils/formatMenu";

export function CustomHeader(props: CustomHeaderProps) {
  const inputRef = useRef<SearchInputRef>(null);

  const scrollDirection = useScrollDirection();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const { navButtons, region, contactUs, isMobile, menuData, currency } = props;

  const handleOpenMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const handleMenuFocus = () => {
    if (inputRef.current) {
      inputRef.current.setSearchDropdownVisible(false);
    }
  };

  const formattedMenu = formatMenu(menuData.menuItems);

  return (
    <>
      <Navbar
        data-fs-navbar
        scrollDirection={scrollDirection}
        className={`${styles.section} ${styles.mainHeader} section-navbar`}
        data-testid="header-navbar-container"
      >
        <NavbarHeader data-fs-navbar-header data-testid="header-navbar">
          <div
            data-fs-navbar-header-wrapper
            className={styles.mainHeader__wrapper}
            data-testid="header-wrapper"
          >
            <HeaderLogo
              url={props.logo.link ? props.logo.link.url : "/"}
              title={props.logo.link.title}
              src={props.logo.src}
            />

            <div
              data-fs-mainheader-wrapper
              className={styles.mainHeader__wrapper__content}
              data-testid="header-content-wrapper"
            >
              {isMobile && <MenuButtonMobile handleOpenMenu={handleOpenMenu} />}

              <Menu
                data-fs-menu
                menu={formattedMenu}
                isMobile={isMobile}
                isMobileMenuOpen={isMenuOpened}
                logoAlt={props.logo.link.title}
                logoSrc={props.logo.src}
                onCloseMobileMenu={handleOpenMenu}
                onFocus={handleMenuFocus}
                data-testid="header-menu"
                contactUs={contactUs}
              />

              {!isMobile && (
                <SearchInput
                  ref={inputRef}
                  data-fs-search
                  className={styles.mainHeader__search}
                  data-testid="header-search-input"
                />
              )}

              <HeaderNavbarButtons
                navButtons={navButtons}
                region={region}
                contactUs={contactUs}
                loginButton={props.loginButton}
                isMobile={isMobile}
              />
            </div>
          </div>
        </NavbarHeader>
      </Navbar>
    </>
  );
}
