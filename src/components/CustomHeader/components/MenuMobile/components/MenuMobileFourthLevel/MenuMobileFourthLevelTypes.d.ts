import { SubMenuThirdLevelData } from "../../../../CustomHeaderTypes";
import { MenuMobileLevelSharedProps } from "../../MenuMobileTypes";

export interface MenuMobileFourthLevelProps
  extends Omit<MenuMobileLevelSharedProps, "selectAndIncreseLevel"> {
  menuLevelThree: SubMenuThirdLevelData;
}
