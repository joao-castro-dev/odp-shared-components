import React, { FC, useEffect, useState } from "react";

import {
  MenuData,
  SubMenuData,
  SubMenuThirdLevelData,
} from "../../CustomHeaderTypes";
import CustomLevel from "./components/CustomLevel";
import ContactUs from "../ContactUs";

import { handleMenuContactUs } from "../../utils/handleMenuContactUs";

import MenuMobileFirstLevel from "./components/MenuMobileFirstLevel";
import MenuMobileSecondLevel from "./components/MenuMobileSecondLevel";
import MenuMobileThirdLevel from "./components/MenuMobileThirdLevel";
import MenuMobileFourthLevel from "./components/MenuMobileFourthLevel";

import type { MenuMobileProps } from "./MenuMobileTypes";

const MenuMobile: FC<MenuMobileProps> = ({
  menuData,
  logoSrc,
  logoAlt,
  contactUs,
  triggerLevelUpdate,
}) => {
  const [renderMenu, setRenderMenu] = useState<MenuData[]>(menuData);
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [selectedLevelOne, setSelectedLevelOne] = useState<MenuData>();
  const [selectedLevelTwo, setSelectedLevelTwo] = useState<SubMenuData>();
  const [selectedLevelThree, setSelectedLevelThree] =
    useState<SubMenuThirdLevelData>();

  useEffect(() => {
    if (triggerLevelUpdate) {
      triggerLevelUpdate(currentLevel);
    }
  }, [currentLevel]);

  useEffect(() => {
    const handledMenu = handleMenuContactUs(menuData);
    setRenderMenu(handledMenu);
  }, []);

  const selectAndIncreseLevel = (
    selectedMenu?: MenuData | SubMenuData | SubMenuThirdLevelData
  ) => {
    if (currentLevel == 0) {
      setCurrentLevel(currentLevel + 1);
      return;
    }

    if (
      (selectedMenu as MenuData)?.submenu?.length ||
      (selectedMenu as SubMenuData)?.submenuThirdLevel?.length ||
      (selectedMenu as SubMenuThirdLevelData)?.submenuFourthLevel?.length
    ) {
      if (currentLevel == 1) {
        setSelectedLevelOne(selectedMenu as MenuData);
      } else if (currentLevel == 2) {
        setSelectedLevelTwo(selectedMenu as SubMenuData);
      } else if (currentLevel == 3) {
        setSelectedLevelThree(selectedMenu as SubMenuThirdLevelData);
      }
      setCurrentLevel(currentLevel + 1);
    }
  };

  const deselectAndDecreseLevel = (selectedMenu?: MenuData) => {
    setCurrentLevel(currentLevel - 1);

    if (currentLevel == 1 && selectedMenu) {
      setSelectedLevelOne(selectedMenu as MenuData);
    }
  };

  if (currentLevel == 1) {
    return (
      <MenuMobileFirstLevel
        menu={renderMenu}
        currentLevel={currentLevel}
        logoAlt={logoAlt}
        logoSrc={logoSrc}
        selectAndIncreseLevel={selectAndIncreseLevel}
        deselectAndDecreseLevel={deselectAndDecreseLevel}
      />
    );
  }

  if (currentLevel == 2 && selectedLevelOne) {
    return (
      <MenuMobileSecondLevel
        menuLevelOne={selectedLevelOne}
        currentLevel={currentLevel}
        selectAndIncreseLevel={selectAndIncreseLevel}
        deselectAndDecreseLevel={deselectAndDecreseLevel}
      />
    );
  }

  if (currentLevel == 3 && selectedLevelTwo) {
    return (
      <MenuMobileThirdLevel
        menuLevelTwo={selectedLevelTwo}
        currentLevel={currentLevel}
        selectAndIncreseLevel={selectAndIncreseLevel}
        deselectAndDecreseLevel={deselectAndDecreseLevel}
      />
    );
  }

  if (currentLevel == 4 && selectedLevelThree) {
    return (
      <MenuMobileFourthLevel
        menuLevelThree={selectedLevelThree}
        currentLevel={currentLevel}
        deselectAndDecreseLevel={deselectAndDecreseLevel}
      />
    );
  }

  if (
    currentLevel == 0 &&
    selectedLevelOne &&
    selectedLevelOne.title === "Contact Us"
  ) {
    return (
      <CustomLevel
        selectedLevelOne={selectedLevelOne}
        currentLevel={currentLevel}
        selectAndIncreseLevel={() => selectAndIncreseLevel()}
      >
        <ContactUs variation="mobile" contactUs={contactUs}/>
      </CustomLevel>
    );
  }
};

export { MenuMobile };
