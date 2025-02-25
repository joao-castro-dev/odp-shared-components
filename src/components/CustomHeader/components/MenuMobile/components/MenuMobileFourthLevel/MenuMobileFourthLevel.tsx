import { FC } from "react";

import { Link } from "@faststore/ui";

import Icons from "../../../../../Icons";

import styles from "../../MenuMobile.module.scss";

import { SubMenuFourthLevel } from "../../../../CustomHeaderTypes";

import { MenuMobileFourthLevelProps } from "./MenuMobileFourthLevelTypes";

const MenuMobileFourthLevel: FC<MenuMobileFourthLevelProps> = ({
  menuLevelThree,
  currentLevel,
  deselectAndDecreseLevel,
}) => {
  return (
    <div
      className={`${styles.level__wrapper} ${styles.level__four__wrapper}`}
      data-level={currentLevel}
      data-testid="menu-mobile-level-4-wrapper"
    >
      <div
        className={`${styles.level__header} ${styles.sub__level__header} ${styles.level__four__header}`}
        data-testid="menu-mobile-level-4-header"
      >
        <div
          onClick={() => deselectAndDecreseLevel()}
          data-testid="menu-mobile-level-4-go-back"
        >
          <Icons
            data-fs-menu-icon
            data-icon="arrowLeft"
            icon="arrow-left"
            className={styles.menu__back__button}
            data-testid="menu-mobile-level-4-go-back-icon"
          />
        </div>
        <div
          className={`${styles.sub__level__header__title}`}
          data-testid="menu-mobile-level-4-title"
        >
          {menuLevelThree.title}
        </div>
      </div>
      <div
        className={`${styles.level__item__wrapper} ${styles.level__four__item__wrapper}`}
        data-testid="menu-mobile-level-4-item-wrapper"
      >
        <div>
          {menuLevelThree?.submenuFourthLevel?.length &&
            menuLevelThree.submenuFourthLevel.map(
              (submenuFourthLevel: SubMenuFourthLevel, index: number) => (
                <Link
                  key={`level-four-${index}`}
                  className={`${styles.level__item__container} ${styles.sub__level__item__container} ${styles.level__four__item__container}`}
                  href={submenuFourthLevel.href}
                  data-testid={`menu-mobile-level-4-item-${index}-link`}
                >
                  <p
                    className={`${styles.level__item__title} ${styles.level__four__item__title}`}
                    data-testid={`menu-mobile-level-4-item-${index}-title`}
                  >
                    {submenuFourthLevel.title}
                  </p>
                </Link>
              )
            )}
          {menuLevelThree.href && (
            <Link
              key={`level-four-parent`}
              className={`${styles.level__item__container} ${styles.sub__level__item__container} ${styles.level__four__item__container} ${styles.level__item__parent__link}`}
              href={menuLevelThree.href}
              data-testid="menu-mobile-level-4-see-all-link"
            >
              <p
                className={`${styles.level__item__title} ${styles.level__four__item__title}`}
                data-testid="menu-mobile-level-4-see-all-title"
              >
                See all from {menuLevelThree.title}
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export { MenuMobileFourthLevel };
