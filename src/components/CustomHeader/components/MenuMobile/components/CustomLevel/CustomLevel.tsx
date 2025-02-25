import React from "react";

import Icons from "../../../../../Icons";
import styles from "../../MenuMobile.module.scss";

import type { CustomLevelProps } from "./CustomLevelTypes";

const CustomLevel = ({
  selectedLevelOne,
  currentLevel,
  selectAndIncreseLevel,
  children,
}: CustomLevelProps) => {
  return (
    <div
      className={`${styles.level__wrapper} ${styles.level__two__wrapper}`}
      data-level={currentLevel}
      data-testid="menu-mobile-level-0-wrapper"
    >
      <div
        className={`${styles.level__header} ${styles.sub__level__header} ${styles.level__two__header}`}
        data-testid="menu-mobile-level-0-header"
      >
        <div
          onClick={() => selectAndIncreseLevel()}
          data-testid="menu-mobile-level-0-go-back"
        >
          <Icons
            icon="arrow-left"
            data-fs-menu-icon
            data-icon="arrowLeft"
            className={styles.menu__back__button}
            data-testid="menu-mobile-level-0-go-back-icon"
          />
        </div>
        <div
          className={`${styles.sub__level__header__title}`}
          data-testid="menu-mobile-level-0-title"
        >
          {selectedLevelOne.title}
        </div>
      </div>
      {children}
    </div>
  );
};

export { CustomLevel };
