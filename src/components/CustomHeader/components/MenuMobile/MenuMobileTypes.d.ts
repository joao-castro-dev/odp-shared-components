import { MenuData } from "../../CustomHeaderTypes";
import { ContactUsItem } from "../ContactUs/ContactUsTypes";
export interface MenuMobileProps {
  logoSrc: string;
  logoAlt: string;
  menuData: MenuData[];
  contactUs: ContactUsItem[];
  triggerLevelUpdate?(currentLevel: number): void;
}

export interface MenuMobileLevelSharedProps {
  currentLevel: number;
  selectAndIncreseLevel(
    selectedMenu?: MenuData | SubMenuData | SubMenuThirdLevelData
  ): void;
  deselectAndDecreseLevel(selectedMenu?: MenuData): void;
}
