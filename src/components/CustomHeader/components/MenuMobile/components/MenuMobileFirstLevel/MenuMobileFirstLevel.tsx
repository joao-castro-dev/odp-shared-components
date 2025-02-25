import { FC } from "react";

import { Link } from "@faststore/ui";

import Icons from "../../../../../Icons";

import styles from "../../MenuMobile.module.scss";

import { MenuData } from "../../../../CustomHeaderTypes";

import { MenuMobileFirstLevelProps } from "./MenuMobileFirstLevelTypes";

const MenuMobileFirstLevel: FC<MenuMobileFirstLevelProps> = ({
  menu,
  currentLevel,
  logoAlt,
  logoSrc,
  selectAndIncreseLevel,
  deselectAndDecreseLevel,
}) => {
  return (
    <div
      className={`${styles.level__wrapper} ${styles.level__one__wrapper}`}
      data-level={currentLevel}
      data-testid="menu-mobile-level-1-wrapper"
    >
      <div
        className={`${styles.level__header} ${styles.level__one__header}`}
        data-testid="menu-mobile-level-1-header"
      >
        <Link
          data-fs-navbar-logo-link
          href={"/"}
          title={logoAlt}
          prefetch="false"
          className={styles.menu__logo__link}
          data-testid="menu-mobile-level-1-link"
        >
          <img
            src={logoSrc}
            alt={logoAlt}
            width={100}
            height={35.75}
            className={styles.menu__logo}
            loading="eager"
            data-testid="menu-mobile-level-1-link-image"
          />
        </Link>
      </div>
      <div
        className={`${styles.level__item__wrapper} ${styles.level__one__item__wrapper}`}
        data-testid="menu-mobile-level-1-item-wrapper"
      >
        {menu?.length &&
          menu.map((item: MenuData, index: number) => (
            <Link
              key={`level-one-${index}`}
              className={`${styles.level__item__container} ${styles.level__one__item__container}`}
              href={item.href && !item?.submenu?.length ? item.href : undefined}
              onClick={() =>
                !item?.custom
                  ? selectAndIncreseLevel(item)
                  : deselectAndDecreseLevel(item)
              }
              data-testid={`menu-mobile-level-1-item-${index}-link`}
            >
              <p
                className={`${styles.level__item__title} ${styles.level__one__item__title}`}
                data-testid={`menu-mobile-level-1-item-${index}-title`}
              >
                {item.title}
              </p>
              {item?.submenu?.length > 0 && (
                <Icons
                  data-fs-menu-icon
                  data-icon="arrowRight"
                  icon="arrow-right"
                  className={styles.menu__next__level__button}
                  data-testid={`menu-mobile-level-1-item-${index}-icon`}
                />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export { MenuMobileFirstLevel };
