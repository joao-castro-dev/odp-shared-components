import { MenuData } from "../../../../CustomHeaderTypes";
import { MenuMobileLevelSharedProps } from "../../MenuMobileTypes";

export interface MenuMobileFirstLevelProps extends MenuMobileLevelSharedProps {
  menu: MenuData[];
  logoAlt: string;
  logoSrc: string;
}
