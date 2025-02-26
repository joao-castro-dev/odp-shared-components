import { CustomHeaderProps } from "../../CustomHeaderTypes";

export interface HeaderNavbarButtonsProps
  extends Omit<
    CustomHeaderProps,
    "navbar" | "logoLink" | "logo" | "topbar" | "menu" | "menuData"
  > {}
