import { CustomHeaderProps } from "../../CustomHeaderTypes";

export interface HeaderNavbarButtonsProps
  extends Omit<
    CustomHeaderProps,
    "navbar" | "cart" | "logoLink" | "logo" | "topbar" | "menu" | "menuData"
  > {}
