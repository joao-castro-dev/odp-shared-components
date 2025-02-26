import {
  MenuData,
  SubMenuData,
  SubMenuFourthLevel,
  SubMenuThirdLevelData,
} from "../../CustomHeaderTypes";

export interface MenuDesktopProps {
  item: MenuData | SubMenuData | SubMenuThirdLevelData | SubMenuFourthLevel;
  level: number;
  onClick?(): void;
  currIndex: number;
}
