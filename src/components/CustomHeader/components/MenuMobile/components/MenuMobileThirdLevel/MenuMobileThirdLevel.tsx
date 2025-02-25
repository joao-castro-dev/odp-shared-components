import { FC } from "react";

import { Link } from "@faststore/ui";

import Icons from "../../../../../Icons";

import styles from "../../MenuMobile.module.scss";

import { SubMenuThirdLevelData } from "../../../../CustomHeaderTypes";

import { MenuMobileThirdLevelProps } from "./MenuMobileThirdLevelTypes";

const MenuMobileThirdLevel: FC<MenuMobileThirdLevelProps> = ({
  menuLevelTwo,
  currentLevel,
  selectAndIncreseLevel,
  deselectAndDecreseLevel,
}) => {
  return (
    <div
      className={`${styles.level__wrapper} ${styles.level__three__wrapper}`}
      data-level={currentLevel}
      data-testid="menu-mobile-level-3-wrapper"
    >
      <div
        className={`${styles.level__header} ${styles.sub__level__header} ${styles.level__three__header}`}
        data-testid="menu-mobile-level-3-header"
      >
        <div
          onClick={() => deselectAndDecreseLevel()}
          data-testid="menu-mobile-level-3-go-back"
        >
          <Icons
            data-fs-menu-icon
            data-icon="arrowLeft"
            icon="arrow-left"
            className={styles.menu__back__button}
            data-testid="menu-mobile-level-3-go-back-icon"
          />
        </div>
        <div
          className={`${styles.sub__level__header__title}`}
          data-testid="menu-mobile-level-3-title"
        >
          {menuLevelTwo.title}
        </div>
      </div>
      <div
        className={`${styles.level__item__wrapper} ${styles.level__three__item__wrapper}`}
        data-testid="menu-mobile-level-3-item-wrapper"
      >
        {menuLevelTwo?.submenuThirdLevel?.length &&
          menuLevelTwo.submenuThirdLevel.map(
            (subItemCol: SubMenuThirdLevelData[], index: number) => (
              <div key={`level-three-col-${index}`}>
                {subItemCol.length &&
                  subItemCol.map(
                    (subItem: SubMenuThirdLevelData, index: number) => (
                      <Link
                        key={`level-three-${index}`}
                        className={`${styles.level__item__container} ${styles.sub__level__item__container} ${styles.level__three__item__container}`}
                        href={
                          subItem.href && !subItem?.submenuFourthLevel?.length
                            ? subItem.href
                            : undefined
                        }
                        onClick={() => selectAndIncreseLevel(subItem)}
                        data-testid={`menu-mobile-level-3-item-${index}-link`}
                      >
                        <p
                          className={`${styles.level__item__title} ${styles.level__three__item__title}`}
                          data-testid={`menu-mobile-level-3-item-${index}-title`}
                        >
                          {subItem.title}
                        </p>
                        {subItem?.submenuFourthLevel?.length > 0 && (
                          <Icons
                            data-fs-menu-icon
                            data-icon="arrowRight"
                            icon="arrow-right"
                            className={styles.menu__next__level__button}
                            data-testid={`menu-mobile-level-3-item-${index}-icon`}
                          />
                        )}
                      </Link>
                    )
                  )}
              </div>
            )
          )}
        {menuLevelTwo.href && (
          <Link
            key={`level-three-parent`}
            className={`${styles.level__item__container} ${styles.sub__level__item__container} ${styles.level__three__item__container} ${styles.level__item__parent__link}`}
            href={menuLevelTwo.href}
            data-testid="menu-mobile-level-3-see-all-link"
          >
            <p
              className={`${styles.level__item__title} ${styles.level__three__item__title}`}
              data-testid="menu-mobile-level-3-see-all-title"
            >
              See all from {menuLevelTwo.title}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export { MenuMobileThirdLevel };
