import { FC } from "react";

import Icons from "../../../Icons";
import styles from "./MenuButtonMobile.module.scss";
import { MenuButtonMobileProps } from "./MenuButtonMobileTypes";

const MenuButtonMobile: FC<MenuButtonMobileProps> = ({ handleOpenMenu }) => {
  return (
    <div
      onClick={handleOpenMenu}
      className={styles.menu__button__mobile__wrapper}
      data-testid="header-menu-icon-mobile_wrapper"
    >
      <Icons
        icon="sandwich"
        data-fs-menu-icon
        data-icon="arrowDown"
        className={styles.menu__button__mobile__icon}
        data-testid="header-menu-icon-mobile"
      />
      <p
        data-testid="header-menu-icon-mobile-title"
        className={styles.menu__button__mobile__text}
      >
        Menu
      </p>
    </div>
  );
};

export { MenuButtonMobile };
