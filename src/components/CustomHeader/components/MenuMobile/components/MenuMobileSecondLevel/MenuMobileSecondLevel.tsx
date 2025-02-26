import { FC } from "react";

import { Link } from "@faststore/ui";

import Icons from "../../../../../Icons";

import styles from "../../MenuMobile.module.scss";

import { SubMenuData } from "../../../../CustomHeaderTypes";

import { MenuMobileSecondLevelProps } from "./MenuMobileSecondLevelTypes";

const MenuMobileSecondLevel: FC<MenuMobileSecondLevelProps> = ({
  menuLevelOne,
  currentLevel,
  selectAndIncreseLevel,
  deselectAndDecreseLevel,
}) => {
  return (
    <div
      className={`${styles.level__wrapper} ${styles.level__two__wrapper}`}
      data-level={currentLevel}
      data-testid="menu-mobile-level-2-wrapper"
    >
      <div
        className={`${styles.level__header} ${styles.sub__level__header} ${styles.level__two__header}`}
        data-testid="menu-mobile-level-2-header"
      >
        <div
          onClick={() => deselectAndDecreseLevel()}
          data-testid="menu-mobile-level-2-go-back"
        >
          <Icons
            data-fs-menu-icon
            data-icon="arrowLeft"
            icon="arrow-left"
            className={styles.menu__back__button}
            data-testid="menu-mobile-level-2-go-back-icon"
          />
        </div>
        <div
          className={`${styles.sub__level__header__title}`}
          data-testid="menu-mobile-level-2-title"
        >
          {menuLevelOne.title}
        </div>
      </div>
      <div
        className={`${styles.level__item__wrapper} ${styles.level__two__item__wrapper}`}
        data-testid="menu-mobile-level-2-item-wrapper"
      >
        {menuLevelOne?.submenu?.length &&
          menuLevelOne.submenu.map((submenu: SubMenuData, index: number) => (
            <Link
              key={`level-two-${index}`}
              className={`${styles.level__item__container} ${styles.sub__level__item__container} ${styles.level__two__item__container}`}
              onClick={() => selectAndIncreseLevel(submenu)}
              href={
                submenu.href && !submenu?.submenuThirdLevel?.length
                  ? submenu.href
                  : undefined
              }
              data-testid={`menu-mobile-level-2-item-${index}-link`}
            >
              <p
                className={`${styles.level__item__title} ${styles.level__two__item__title}`}
                data-testid={`menu-mobile-level-2-item-${index}-title`}
              >
                {submenu.title}
              </p>
              {submenu?.submenuThirdLevel?.length > 0 && (
                <Icons
                  data-fs-menu-icon
                  data-icon="arrowRight"
                  icon="arrow-right"
                  className={styles.menu__next__level__button}
                  data-testid={`menu-mobile-level-2-item-${index}-icon`}
                />
              )}
            </Link>
          ))}
        {menuLevelOne.href && (
          <Link
            key={`level-two-parent`}
            className={`${styles.level__item__container} ${styles.sub__level__item__container} ${styles.level__two__item__container} ${styles.level__item__parent__link}`}
            href={menuLevelOne.href}
            data-testid="menu-mobile-level-2-see-all-link"
          >
            <p
              className={`${styles.level__item__title} ${styles.level__two__item__title}`}
              data-testid="menu-mobile-level-2-see-all-title"
            >
              See all from {menuLevelOne.title}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export { MenuMobileSecondLevel };
